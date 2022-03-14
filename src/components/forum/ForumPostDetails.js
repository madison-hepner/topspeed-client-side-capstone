import React, { useState, useEffect } from 'react';
import { getPostById } from '../modules/ForumManager';
import { getAllComments, getCommentById } from '../modules/CommentManager';
import './Forum.css';
import { useParams, useNavigate } from "react-router-dom";
import { CommentList } from '../comments/CommentList';
import "./ForumPostDetails.css"



export const PostDetails = () => {
  const [forumPost, setPost] = useState({ title: "", content: "", carTypeId: "", model: "", date: "", commentId: ""});

  const {postId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", postId)
    getPostById(postId)
      .then(post => {
        setPost(post);
      });
  }, [postId]);




    return (
        <div className="forumPost__card">
            <section className="make__post">
                <div className="bign__btns">
                    <button type="button" className="big__btn btn" id="big__btn" onClick={() => {navigate("/forum")}} >Return to Forum</button>
                </div>
            </section>
            <hr></hr>
            <div className="forumPost__card">
            <div className="forumpost__header">
                <h4><span className="forumPost__title">
                    {forumPost.title}
                </span></h4>
            <p className="model"><strong>Model:</strong>{forumPost.model}</p>
            </div>
            <div className="details__spacer"></div>
            <p> {forumPost.content}</p>
            <p className="date">{forumPost.date}</p>
  
    
            <hr></hr>
    
    
          </div>

          <div className="forumPost_comments">
          <section className="featured__comments">
                <h4 className="comments__header">Comments</h4>
                <div className="details__comment__spacer"></div>


            <CommentList />


        </section>

              
          </div>
    
        </div>
      
      );
    }

