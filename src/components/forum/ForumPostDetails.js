import React, { useState, useEffect } from 'react';
import { getPostById } from '../modules/ForumManager';
import { getAllComments, getCommentById } from '../modules/CommentManager';
import './Forum.css';
import { useParams, useNavigate } from "react-router-dom";
import { CommentList } from '../comments/CommentList';
import { getAllPosts, deletePost } from '../modules/ForumManager';
import "./ForumPostDetails.css"



export const PostDetails = () => {
    const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
    const sessionUserId = sessionUser.id
  const [forumPost, setPost] = useState({ id: "", title: "", content: "", carTypeId: "", model: "", date: "", commentId: ""});
  const {postId} = useParams();
  const navigate = useNavigate();
  const [postComments, setComments] = useState([]);

  useEffect(() => {
    console.log("useEffect", postId)
    getPostById(postId)
      .then(post => {
        setPost(post);
      });
  }, [postId]);


  const handleDeletePost = id => {
    deletePost(id)
    .then(() => getAllPosts().then(setPost));
};

//   useEffect(() => {
//     getPostById();
//   }, []);



    return (
        <div className="forumPost__card">
            <section className="make__post">
                <div className="bign__btns">
                    <button type="button" className="big__btn btn" id="big__btn" onClick={() => {navigate(`/forum`)}} >Return to Forum</button>
                </div>
            </section>
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
            <div className="date__space"></div>
            <small>
            { forumPost.userId === sessionUserId
            ? <> <div className="delete__post">
            <section className="delete__post">
                <div className="delete__btns">
                    <button type="button" className="delete__btn btn" id="delete__btn" onClick={() => handleDeletePost(forumPost.id)} ><small>delete post</small></button>
                </div>
            </section>
            </div>

            <button className="crud__btn btn" id="edit__btn" onClick={() => {navigate(`/forum/${forumPost.id}/edit`)}}>Edit</button>
            </>
            : ""
            }
            </small>
    
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

