// ADD FORUM POST FORM

import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { addForumPost, getAllPosts, getPostById } from '../modules/ForumManager'
import './Forum.css'
import './AddForumPost.css'


export const AddForumPostForm = () => {
    const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
    const sessionUserId = sessionUser.id
    const [forumPost, setPost] = useState({
        id: "",
        userId: sessionUserId,
        title: "",
        carTypeId: "",
        content: "",
        date: new Date().toLocaleString(),
        commentId: 1,
    });

    const navigate = useNavigate();

    const handleInputChange = (evt) => {
        const newPost = {...forumPost}
        let selectedVal = evt.target.value
        newPost[evt.target.id] = selectedVal
        setPost(newPost)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (forumPost.title === "" || forumPost.content === "") {
            window.alert('All fields must be filled in')
        } else {
            addForumPost(forumPost)
                .then(() => navigate("/forum"))
        }
    }

    useEffect(() => {
        getAllPosts()
    }, [])
   

    return (
        <form>
            <div  className="form__inputs">
                <h2 className="page__title">Make Forum Post</h2>
                <div className="spacer"></div>

                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="title" className="form__input__label" >Post Title:</label>
                        <input type="text" className="form__input__field" id="title" onChange={handleInputChange} required value={forumPost.title} /> 
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="content" className="form__input__label" >Post Contents:</label>
                        <input type="text" className="form__input__field" id="content" onChange={handleInputChange} required value={forumPost.content} /> 
                        
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="carTypeId" className="form__input__label" >Car Type Dropdown Here</label>
                        <input type="text" className="form__input__field" id="carTypeId" onChange={handleInputChange} required value={forumPost.carTypeId} /> 
                        
                    </div>
                </fieldset>
                <div className="form__input crud__btn">
                    <button className="submit__btn"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
                
            </div>
        </form>
    )
}