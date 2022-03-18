// PORSCHE SPECIFIC FORUM SECTION

import react from "react";
import { Link } from "react-router-dom";
// import './Forum.css'
// import './ForumPostDetails.css'
import './SubForum.css'
import { useNavigate } from "react-router-dom";

export const SubForum = ({forumPost, handleDeletePost}) => {

  const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
  const sessionUserId = sessionUser.id
    const navigate = useNavigate()

    return (
      <div className="forumPost__card">
        <div className="card__grow">
        <div className="forumPost__card">
        <div className="header__title">
        <Link className="post__detail__link" to={`/forum/${forumPost.id}`}>
          <h4><span className="forumPost__title">
            {forumPost.title}
          </span></h4>
          </Link>
          </div>
          <div className="prev__wrap">
          <div className="car__details">
                <p><strong>Posted by:</strong> {forumPost.user.name}</p>
                <div className="type__model__spacer"></div>
                <p><strong>Model:</strong> {forumPost.model}</p>
                <div className="model__date__spacer">
                <small className="post__date">{forumPost.date}</small>
                </div>
          </div>

          { forumPost.userId === sessionUserId
        ? <div className="delete__post">
        <section className="delete__post">
            <div className="delete__btns">
                <button type="button" className="delete__btn btn" id="delete__btn" onClick={() => handleDeletePost(forumPost.id)} ><small>delete post</small></button>
            </div>
        </section>
        </div>
        : ""
        }
          </div>
          <div className="post__title__spacer"></div>
          </div>
        </div>
      </div>
    
    );
  }


