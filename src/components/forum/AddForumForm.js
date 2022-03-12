// ADD FORUM POST FORM

import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { addForumPost, getAllPosts, getPostById } from '../modules/ForumManager'
import './Forum.css'
import './AddForumPost.css'
import { getAllCarTypes } from "../modules/CarTypeManager";


export const AddForumPostForm = () => {
    const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
    const sessionUserId = sessionUser.id
    const [forumPost, setPost] = useState({
        id: "",
        userId: sessionUserId,
        title: "",
        carTypeId: 0,
        content: "",
        date: new Date().toLocaleString(),
        commentId: 1,
    });
    const [carTypes, setCarTypes] = useState([]);

    const navigate = useNavigate();


	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newPost = { ...forumPost}
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* employee is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newPost[event.target.id] = selectedVal
		// update state
		setPost(newPost)
	}


    const getCarTypes = () => {
        return getAllCarTypes().then(carTypesFromAPI => {
            setCarTypes(carTypesFromAPI)
        })
    }

	const handleClickSavePost = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const postId = forumPost.id
		const carTypeId = forumPost.carTypeId

		if (postId === 0 || carTypeId === 0) {
			window.alert("Please select input")
		} else {
			//invoke addemployee passing employee as an argument.
			//once complete, change the url and display the employee list
			addForumPost(forumPost)
				.then(() => navigate("/forum"))
		}
	}

    useEffect(() => {
        getAllPosts()
    }, [])

    useEffect(() => {
        getCarTypes()
	}, []);
   

    return (
        <form>
            <div  className="form__inputs">
                <h2 className="page__title">Make Forum Post</h2>
                <div className="spacer"></div>

                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="title" className="form__input__label" >Post Title:</label>
                        <input type="text" className="form__input__field" id="title" onChange={handleControlledInputChange} required value={forumPost.title} /> 
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="content" className="form__input__label" >Contents:</label>
                        <input type="text" className="big__form__input__field" id="content" onChange={handleControlledInputChange} required value={forumPost.content} /> 
                        
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                    <label htmlFor="carTypeId" className="form__input__label">Car Type:</label>
				    <select value={forumPost.carTypeId} name="carTypeId" id="carTypeId" onChange={handleControlledInputChange} className="form__input__field" >
					<option value="0">Select a Car Type</option>
					    {carTypes.map(carType => (
						<option key={carType.id} value={carType.id}>
							{carType.name}
					</option>
					))}
                    </select>
                    </div>
                </fieldset>
                <section className="big__btns">
                <div className="form__input__crud__btn">
                    <button type="button" className="big__btn" id="big__btn"
                        onClick={handleClickSavePost}>
                        Submit
                    </button>
                </div>
                </section>
                
            </div>
        </form>
    )
}