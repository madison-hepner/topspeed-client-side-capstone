// // PORSCHE SPECIFIC FORUM SECTION

// import React, { useState, useEffect } from 'react';
// import { GenForum } from './Forum';
// import { getForumByCarType } from '../modules/ForumManager';
// import { useNavigate} from "react-router-dom"
// import "./Forum.css"
// import "./ForumPostDetails"
// import { PorscheForum } from './Porsche';

// export const PorscheSubForum = () => {
//   // The initial state is an empty array
//   const [porschePosts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   const getPosts = () => {
//     return getForumByCarType().then(porschePostsFromAPI => {
//       setPosts(porschePostsFromAPI)
//     });
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return (
//     <>
//     <h2 className="page__title">Porsche</h2>

//       <div className="porschePost__card">
//           {porschePosts.map(porschePost =>
//           <PorscheForum
//               key={porschePost.id}
//               porschePost={porschePost} /> )}
//       </div>
//     </>
//   );
// };