// // PORSCHE SPECIFIC FORUM SECTION

import React, { useState, useEffect } from 'react';
import { getAllPosts, deletePost } from '../../modules/ForumManager';
import { useNavigate, useParams} from "react-router-dom"
import { getForumByCarType } from '../../modules/ForumManager';
// import "./forum/Forum.css"
// import "./ForumPostDetails"
import './SubForum.css'
import { SubForum } from './SubForum.js';

export const SubForumList = () => {


  // The initial state is an empty array
  const [forumPosts, setPosts] = useState([]);

  const navigate = useNavigate();
  const {carTypeId} = useParams();



  const getForumPosts = () => {
    return getForumByCarType(+carTypeId).then(postsFromAPI => {
      setPosts(postsFromAPI)
    });
  };

  useEffect(() => {
    console.log("useEffect", carTypeId)
    getForumPosts()
  }, [carTypeId]);


  const handleDeletePost = id => {
    deletePost(id)
    .then(() => getForumPosts().then(setPosts));
};

  useEffect(() => {
    getForumPosts();
  }, []);


  return (
    <>
    <h2 className="page__title">{forumPosts[0]?.carType?.name}</h2>
    <div className="spacer"></div>
    <section className="make__post">
    <div className="bign__btns">
        <button type="button" className="big__btn btn" id="big__btn" onClick={() => {navigate("/forum/addPost")}} >Make a Post</button>
    </div>
    </section>

      <div className="subForumPost__card">
          {forumPosts.map(forumPost =>
          <SubForum
              key={forumPost.id}
              forumPost={forumPost} 
              handleDeletePost={handleDeletePost}/> )}
      </div>
    </>
  );
};