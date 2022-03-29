import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Navigate} from "react-router-dom"
import { deleteComment, getAllComments, getCommentByPost } from "../modules/CommentManager";
import { Comments } from './Comment';
import "./Comment.css"
import { CommentForm } from './CommentForm';


export const CommentList = () => {
    const { postId } = useParams()
    const navigate = useNavigate()
    const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
    const sessionUserId = sessionUser.id

    const [postComments, setComments] = useState([]);
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const getComments = () => {
        // After the data comes back from the API, we
        //  use the setAnimals function to update state
        return getCommentByPost(+postId).then(commentsFromAPI => {
          setComments(commentsFromAPI)
        });
      };

      const syncComments = () => {
        getComments()
      }


      const handleDeleteComment = id => {
        deleteComment(id)
        .then(syncComments)
    };
    

      // got the animals from the API on the component's first render
      useEffect(() => {
        getCommentByPost(+postId).then(setComments)
    }, [])

    


 return (
        <>
        <div className="add__comment">
            <section className="make__post">
                <div className="comment__btns">
                    <button type="button" className="comment__btn btn" id="comment__btn" onClick={openModal}><small>add a comment</small></button>
                    <CommentForm showModal={showModal} setShowModal={setShowModal}/>
                </div>
            </section>
            </div>
            {postComments?.map(postComment => {
              return <div className="postCommentList">
            
              <div className="comment__list">
                          <div className="user__comment">
                          <div className="user__name">
                              <strong>{postComment.user?.name}</strong>
                          </div>
                          <div className="comment__content">
                              {postComment?.content}
                          </div>
                          <div className="date__space">
                              <p className="date"><small>{postComment?.date}</small></p>
                          </div>
  
                          { postComment?.userId === sessionUserId
                              ? 
                              <> <div className="delete__post">
                              <section className="delete__post">
                                  <div className="delete__btns">
                                      <button type="button" className="delete__btn btn" id="delete__btn" onClick={() => handleDeleteComment(postComment?.id)} ><small>delete comment</small></button>
                                  </div>
                              </section>
                              </div>
  
                              {/* <button className="crud__btn btn" id="edit__btn" onClick={() => {navigate(`/forum/${forumPost.id}/edit`)}}>Edit</button> */}
                              </>
                              : ""
                          }
                          </div>


                          <hr></hr>

            
                  </div>
              </div>

                        })}
                        
        </>
                        

    )
                    
}
