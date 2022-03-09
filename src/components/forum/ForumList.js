// FORUM POST LIST
import React, { useState, useEffect } from 'react';
import { GenForum } from './Forum';
import { getAllPosts } from '../modules/ForumManager';
import { useNavigate} from "react-router-dom"
import "./Forum.css"
import "./ForumPostDetails"

export const ForumList = () => {
  // The initial state is an empty array
  const [forumPosts, setPosts] = useState([]);
  const navigate = useNavigate();

  const getPosts = () => {
    return getAllPosts().then(postsFromAPI => {
      setPosts(postsFromAPI)
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    <h2 className="page__title">General Forum</h2>

      <div className="forumPost__card">
          {forumPosts.map(forumPost =>
          <GenForum
              key={forumPost.id}
              forumPost={forumPost} /> )}
      </div>
    </>
  );
};