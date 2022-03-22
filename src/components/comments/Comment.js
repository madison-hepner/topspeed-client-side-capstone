// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, useParams, Navigate} from "react-router-dom"
// // import { deleteComment, getAllComments, getCommentByPost } from "../modules/CommentManager";
// // import "./Comment.css"

// // export const Comments = ({postComment, handleDeleteComment}) => {
// //     const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
// //     const sessionUserId = sessionUser.id

//     return (
//         <>
//             <div className="postCommentList">
//             <div className="comment__list">
//                         <div className="user__comment">
//                         <div className="user__name">
//                             <strong>{postComment.user?.name}</strong>
//                         </div>
//                         <div className="comment__content">
//                             {postComment.content}
//                         </div>
//                         <div className="date__space">
//                             <p className="date"><small>{postComment.date}</small></p>
//                         </div>

//                         { postComment.userId === sessionUserId
//                             ? <> <div className="delete__post">
//                             <section className="delete__post">
//                                 <div className="delete__btns">
//                                     <button type="button" className="delete__btn btn" id="delete__btn" onClick={() => handleDeleteComment(postComment.id)} ><small>delete comment</small></button>
//                                 </div>
//                             </section>
//                             </div>

//                             {/* <button className="crud__btn btn" id="edit__btn" onClick={() => {navigate(`/forum/${forumPost.id}/edit`)}}>Edit</button> */}
//                             </>
//                             : ""
//                         }
//                         </div>
//                         <hr></hr>


//                 </div>
//             </div>
//         </>

//     )


// }
