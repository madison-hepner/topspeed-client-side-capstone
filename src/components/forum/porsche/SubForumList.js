// // PORSCHE SPECIFIC FORUM SECTION

import React, { useState, useEffect } from 'react';
import { getAllPosts, deletePost } from '../../modules/ForumManager';
import { useNavigate, useParams} from "react-router-dom"
import { getForumByCarType } from '../../modules/ForumManager';
import { getAllCarTypes } from '../../modules/CarTypeManager';
// import "./forum/Forum.css"
// import "./ForumPostDetails"
import './SubForum.css'
import { SubForum } from './SubForum.js';

export const SubForumList = () => {


  // The initial state is an empty array
  const [forumPosts, setPosts] = useState([]);
  const [carTypes, setCarTypes] = useState([]);

  const navigate = useNavigate();
  const {carTypeId} = useParams();

  const getCarTypes = () => {
    return getAllCarTypes().then(carTypesFromAPI => {
        setCarTypes(carTypesFromAPI)
    })
}

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
    .then(() => getForumPosts());
};

var sortedSubPosts = forumPosts.sort((a,b) => {
  return new Date(a.date).getTime() - 
      new Date(b.date).getTime()
}).reverse();

useEffect(() => {
  getCarTypes()
}, []);

  useEffect(() => {
    getForumPosts(sortedSubPosts);
  }, []);



  return (
    <>
    <h2 className="page__title">
        {forumPosts[0]?.carType?.name}
    </h2>
    <div className="spacer"></div>

      <div className="subForumPost__card">
          {forumPosts?.map(forumPost =>
          <SubForum
              key={forumPost.id}
              forumPost={forumPost} 
              handleDeletePost={handleDeletePost}/> )}
      </div>
    </>
  );
};