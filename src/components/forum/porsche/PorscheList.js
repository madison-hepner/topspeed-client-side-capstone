// // PORSCHE SPECIFIC FORUM SECTION

import React, { useState, useEffect } from 'react';

import { useNavigate, useParams} from "react-router-dom"
import { getForumByCarType } from '../../modules/ForumManager';
// import "./forum/Forum.css"
// import "./ForumPostDetails"
import { PorscheForum } from './Porsche';

export const PorscheSubForum = () => {


  // The initial state is an empty array
  const [porschePosts, setPosts] = useState([]);

  const navigate = useNavigate();
  const {carTypeId} = useParams();



  const getPorschePosts = () => {
    return getForumByCarType(+carTypeId).then(postsFromAPI => {
      setPosts(postsFromAPI)
    });
  };

  useEffect(() => {
    console.log("useEffect", carTypeId)
    getPorschePosts()
  }, [carTypeId]);


  return (
    <>
    <h2 className="page__title">{porschePosts[0]?.carType?.name}</h2>
    <div className="spacer"></div>

      <div className="porschePost__card">
          {porschePosts.map(porschePost =>
          <PorscheForum
              key={porschePost.id}
              forumPost={porschePost} /> )}
      </div>
    </>
  );
};