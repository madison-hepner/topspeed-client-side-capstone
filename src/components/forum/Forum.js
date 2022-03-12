import react from "react";
import { Link } from "react-router-dom";
import './Forum.css'
import './ForumPostDetails.css'
import { useNavigate } from "react-router-dom";

export const GenForum = ({ forumPost }) => {
    const navigate = useNavigate()

    return (
      <div className="forumPost__card">
          <hr></hr>
        <div className="forumPost__card">
        <Link className="post__detail__link" to={`/forum/${forumPost.id}`}>
          <h4><span className="forumPost__title">
            {forumPost.title}
          </span></h4>
          </Link>
          <p><strong>Car Type:</strong> {forumPost.carType?.name}</p>
          <p><strong>Model:</strong> {forumPost.model}</p>
          <p><strong>Posted by:</strong> {forumPost.user.name}</p>
          <p>{forumPost.date}</p>

  
          <hr></hr>
  
  
        </div>
  
      </div>
    
    );
  }
