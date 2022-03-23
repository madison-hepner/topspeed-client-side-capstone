// FORUM POST LIST
import React, { useState, useEffect } from 'react';
import { GenForum } from './Forum';
import { getAllPosts, deletePost } from '../modules/ForumManager';
import { useNavigate, useParams} from "react-router-dom"
import "./Forum.css"
import "./ForumPostDetails"
import "./ForumList.css"

export const ForumList = () => {
  // The initial state is an empty array
  const {postId} = useParams();
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


  const handleDeletePost = id => {
    deletePost(id)
    .then(() => getAllPosts().then(setPosts));
};

var sortedPosts = forumPosts.sort((a,b) => {
    return new Date(a.date).getTime() - 
        new Date(b.date).getTime()
}).reverse();

  useEffect(() => {
    getPosts(sortedPosts);
  }, []);

  return (
    <>
    <h2 className="page__title">General Forum</h2>
    <div className="spacer"></div>
    <section className="make__post">
    <div className="bign__btns">
        <button type="button" className="big__btn btn" id="big__btn" onClick={() => {navigate("/forum/addPost")}} >Make a Post</button>
    </div>
    </section>
    <section className="forumPosts">
      <div className="forumPost__card">
          {forumPosts.map(forumPost =>
          <GenForum
              key={forumPost.id}
              forumPost={forumPost} 
              handleDeletePost={handleDeletePost}/> )}
      </div>
      </section>
    </>
  );
};

