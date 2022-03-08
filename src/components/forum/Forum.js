import react from "react";
import { Link } from "react-router-dom";
import './Forum.css'
import './../TopSpeed'
import { useNavigate } from "react-router-dom";

export const GenForum = ({ forumPost }) => {
    const navigate = useNavigate()

    return (
      <div className="forumPost__card">
          <hr></hr>
        <div className="forumPost__card">
          <h4><span className="forumPost__title">
            {forumPost.title}
          </span></h4>
          <p><strong>Car Type:</strong> {forumPost.carType}</p>
          <p> {forumPost.content}</p>
          <p>{forumPost.date}</p>

  
          <hr></hr>
  
  
        </div>
  
      </div>
    
    );
  }
