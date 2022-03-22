import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getPostById, editPost, getAllPosts} from "./../modules/ForumManager"
import "./Forum.css"
import "./../TopSpeed.css"
import { getAllCarTypes } from "../modules/CarTypeManager";

export const PostEditForm = () => {
const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
const sessionUserId = sessionUser.id
const [forumPost, setPost] = useState({
    id: "",
    userId: sessionUserId,
    title: "",
    carTypeId: 0,
    model: "",
    content: "",
    date: new Date().toLocaleString(),
    commentId: 0,
});

const [carTypes, setCarTypes] = useState([]);

const getCarTypes = () => {
    return getAllCarTypes().then(carTypesFromAPI => {
        setCarTypes(carTypesFromAPI)
    })
}

  const [isLoading, setIsLoading] = useState(false);

  const {postId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...forumPost };
    stateToChange[evt.target.id] = evt.target.value;
    setPost(stateToChange);
  };

  const updateExistingPost = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedPost = {
      id: postId,
      title: forumPost.title,
      carTypeId: forumPost.carTypeId,
      model: forumPost.model,
      content: forumPost.content,
      date: forumPost.date,
    };


  editPost(editedPost)
    .then(() => navigate(`/forum`)
    )
  }

  useEffect(() => {
    getPostById(postId)
      .then(forumPost => {
        setPost(forumPost);
        setIsLoading(false);
      });
  }, []);

useEffect(() => {
    getCarTypes()
}, []);


  return (
    <form>
        <div  className="form__inputs">
            <h2 className="page__title">Edit Forum Post</h2>
            <div className="spacer"></div>

            <fieldset>
            <div  className="form__input">
                <label htmlFor="title" className="form__input__title" >Title:</label>
                <input type="text" className="form__input__field" id="title" onChange={handleFieldChange} required value={forumPost.title} /> 
            </div>
        </fieldset>
        <fieldset>
            <div  className="form__input">
                <label htmlFor="content" className="form__input__label" >Post Contents:</label>
                <input type="text" className="form__input__field" id="content" onChange={handleFieldChange} required value={forumPost.content} /> 
                
            </div>
        </fieldset>
        <fieldset>
            <div  className="form__input">
                <label htmlFor="carTypeId" className="form__input__label">Car Type:</label>
				<select value={forumPost.carTypeId} name="carTypeId" id="carTypeId" onChange={handleFieldChange} className="form__input__field" >
				<option value="0">Select a Car Type</option>
					{carTypes.map(carType => (
				<option key={carType.id} value={carType.id}>
					{carType.name}
				</option>
			))}
            </select>
            </div>
        </fieldset>
        <fieldset>
            <div  className="form__input">
                <label htmlFor="model" className="form__input__label" >Model:</label>
                <input type="text" className="form__input__field" id="model" onChange={handleFieldChange} required value={forumPost.model} /> 
                
            </div>
        </fieldset>
            <section className="big__btns">
            <div className="form__input__crud__btn">
                <button type="button" className="big__btn" id="big__btn"
                    onClick={updateExistingPost}>
                    update
                </button>
            </div>
            </section>
        </div>
    </form>
)
}
