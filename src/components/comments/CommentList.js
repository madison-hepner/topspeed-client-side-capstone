import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Navigate} from "react-router-dom"
import { getCommentByPost } from "../modules/CommentManager";
import "./Comment.css"

export const CommentList = () => {
    const { postId } = useParams()
    const navigate = useNavigate()
    const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
    const sessionUserId = sessionUser.id

    const [comments, setComments] = useState([]);

    const getAllComments = () => {
        return getCommentByPost(postId).then(commentsFromAPI => {
          setComments(commentsFromAPI)
        });
      };

    useEffect(() => {
        getCommentByPost(postId).then(setComments)
    }, [postId])
    

    return (
        <>
            <div className="postCommentList">
            <div className="add__comment">
            <section className="make__post">
                <div className="comment__btns">
                    <button type="button" className="comment__btn btn" id="comment__btn" onClick={() => {navigate(`/forum/subforum/addComment/${postId}`)}} >add a comment</button>
                </div>
            </section>
            </div>
            <div className="comment__list">
                {comments.map((comment) => {
                    return (
                        <>
                        <div className="user__comment">
                        <div className="user__name">
                            <strong>{comment.user?.name}</strong>
                        </div>
                        <div className="comment__content">
                            {comment.content}
                        </div>
                        <div className="date__space">
                            <p className="date"><small>{comment.date}</small></p>
                        </div>
                        </div>
                        <hr></hr>

                        </>
                    )
                 })
    

                }
                </div>
            </div>
        </>





    )




}
