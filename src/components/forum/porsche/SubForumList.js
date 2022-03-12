// // PORSCHE SPECIFIC FORUM SECTION

import React, { useState, useEffect } from 'react';

import { useNavigate, useParams} from "react-router-dom"
import { getForumByCarType } from '../../modules/ForumManager';
// import "./forum/Forum.css"
// import "./ForumPostDetails"
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


  return (
    <>
    <h2 className="page__title">{forumPosts[0]?.carType?.name}</h2>
    <div className="spacer"></div>

      <div className="subForumPost__card">
          {forumPosts.map(forumPost =>
          <SubForum
              key={forumPost.id}
              forumPost={forumPost} /> )}
      </div>
    </>
  );
};