import React, { useState, useEffect } from 'react';
import { useNavigate, useParams} from "react-router-dom"
import { getCommentByPost } from "../modules/CommentManager";

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
            
            <div className="comment__list">
                {comments.map((comment) => {
                    return (
                        <div className="comment__content">
                            {comment.content}
                        </div>

                    )
                    })
    

                }

                </div>

            </div>

        </>





    )




}
