import React, { useState, useEffect } from 'react';
import { getPostById } from '../modules/ForumManager';
import './Forum.css';
import { useParams, useNavigate } from "react-router-dom"

export const PostDetails = () => {
  const [forumPost, setPost] = useState({ title: "", content: "", carTypeId: "", date: ""});

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
            <hr></hr>
          <div className="forumPost__card">
            <h4><span className="forumPost__title">
              {forumPost.title}
            </span></h4>
            <p><strong>Model:</strong> {forumPost.model}</p>
            <p> {forumPost.content}</p>
            <p>{forumPost.date}</p>
  
    
            <hr></hr>
    
    
          </div>

          {/* <div className="forumPost_comments">
            <p>{postComments.content}</p> */}


          {/* </div> */}
    
        </div>
      
      );
    }

