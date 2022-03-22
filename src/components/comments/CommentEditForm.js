// import React, { useState, useEffect } from "react"
// import {useNavigate, useParams} from "react-router-dom";
// import {getCommentByPost, editComment, getAllComments} from "./../modules/CommentManager"
// import "./Forum.css"
// import "./../TopSpeed.css"
// import { getAllCarTypes } from "../modules/CarTypeManager";

// export const CommentEditForm = () => {
// const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
// const sessionUserId = sessionUser.id
// const [postComment, setComment] = useState({
//     id: "",
//     userId: sessionUserId,
//     content: "",
// });


//   const [isLoading, setIsLoading] = useState(false);

//   const {postId} = useParams();
//   const navigate = useNavigate();

//   const handleFieldChange = evt => {
//     const stateToChange = { ...postComment };
//     stateToChange[evt.target.id] = evt.target.value;
//     setComment(stateToChange);
//   };

//   const updateExistingComment = evt => {
//     evt.preventDefault()
//     setIsLoading(true);

//     // This is an edit, so we need the id
//     const editedComment = {
//       id: postId,
//       content: postComment.content,
//     };


//   editComment(editedComment)
//     .then(() => navigate(`/forum`)
//     )
//   }

//   useEffect(() => {
//     getCommentByPost(postId)
//       .then(postComment => {
//         setComment(postComment);
//         setIsLoading(false);
//       });
//   }, []);

// // useEffect(() => {
// //     getCommentByPost()
// // }, []);


//   return (
//     <form>
//         <div  className="form__inputs">
//             <h2 className="page__title">Edit Forum Post</h2>
//             <div className="spacer"></div>

//             <fieldset>
//             <div  className="form__input">
//                 <label htmlFor="title" className="form__input__title" >Title:</label>
//                 <input type="text" className="form__input__field" id="title" onChange={handleFieldChange} required value={forumPost.title} /> 
//             </div>
//         </fieldset>
//         <fieldset>
//             <div  className="form__input">
//                 <label htmlFor="content" className="form__input__label" >Post Contents:</label>
//                 <input type="text" className="form__input__field" id="content" onChange={handleFieldChange} required value={forumPost.content} /> 
                
//             </div>
//         </fieldset>
//         <fieldset>
//             <div  className="form__input">
//                 <label htmlFor="carTypeId" className="form__input__label">Car Type:</label>
// 				<select value={forumPost.carTypeId} name="carTypeId" id="carTypeId" onChange={handleFieldChange} className="form__input__field" >
// 				<option value="0">Select a Car Type</option>
// 					{carTypes.map(carType => (
// 				<option key={carType.id} value={carType.id}>
// 					{carType.name}
// 				</option>
// 			))}
//             </select>
//             </div>
//         </fieldset>
//         <fieldset>
//             <div  className="form__input">
//                 <label htmlFor="model" className="form__input__label" >Model:</label>
//                 <input type="text" className="form__input__field" id="model" onChange={handleFieldChange} required value={forumPost.model} /> 
                
//             </div>
//         </fieldset>
//             <section className="big__btns">
//             <div className="form__input__crud__btn">
//                 <button type="button" className="big__btn" id="big__btn"
//                     onClick={updateExistingPost}>
//                     update
//                 </button>
//             </div>
//             </section>
//         </div>
//     </form>
// )
// }