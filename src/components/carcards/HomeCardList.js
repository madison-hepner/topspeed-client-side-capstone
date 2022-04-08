// // PORSCHE SPECIFIC FORUM SECTION

import React, { useState, useEffect } from 'react';
import { getAllPosts, deletePost } from '../modules/ForumManager';
import { useNavigate, useParams} from "react-router-dom"
import { getForumByCarType } from '../modules/ForumManager';
import { getAllCarTypes } from '../modules/CarTypeManager';
import { HomeCards } from './HomeCards';

export const CarCardList = () => {


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
    <div className="spacer"></div>

      <div className="car__cards">
          {carTypes?.map(carType =>
          <HomeCards
              key={carType.id}
              carType={carType} /> )}
      </div>
    </>
  );
};