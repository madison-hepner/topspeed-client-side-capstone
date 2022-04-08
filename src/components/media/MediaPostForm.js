// ADD FORUM POST FORM

import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { addMediaPost, getMediaPostById } from '../modules/MediaManager'
import './Media.css'
import { getAllCarTypes } from "../modules/CarTypeManager";
import { getAllMediaPosts } from "../modules/MediaManager";


export const AddMediaPostForm = ({showModal, setShowModal}) => {
    const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
    const sessionUserId = sessionUser.id
    const [mediaPost, setMediaPost] = useState({
        id: "",
        userId: sessionUserId,
        img: "",
        caption: "",
        date: new Date().toLocaleString(),
    });

    const navigate = useNavigate();


	const handleControlledInputChange = (event) => {
		const newMediaPost = { ...mediaPost}
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newMediaPost[event.target.id] = selectedVal
		// update state
		setMediaPost(newMediaPost)
	}


	const handleClickSaveMediaPost = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const mediaPostId = mediaPost.id

			addMediaPost(mediaPost)
            .then(() => setShowModal(false))
				.then(() => navigate("/media"))
	}

    useEffect(() => {
        getAllMediaPosts()
    }, [])


    return (
        <form>
             { showModal ?
            <div  className="form__inputs">

                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="img" className="form__input__label" >Image URL:</label>
                        <input type="url" className="form__input__field" id="img" onChange={handleControlledInputChange} required value={mediaPost.img} /> 
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="caption" className="form__input__label" >Caption:</label>
                        <input type="text" className="big__form__input__field" id="caption" onChange={handleControlledInputChange} required value={mediaPost.caption} /> 
                        
                    </div>
                </fieldset>
            
                <section className="big__btns">
                <div className="form__input__crud__btn">
                    <button type="button" className="big__btn" id="big__btn"
                        onClick={handleClickSaveMediaPost}>
                        Submit
                    </button>
                
                </div>
                </section>
            </div>
             : null 
            }
        </form>
    )
}