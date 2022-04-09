import react from "react";
import { Link } from "react-router-dom";
// import './ArticleCard.css'
// import './../TopSpeed.css'
import { useNavigate, useParams } from "react-router-dom";
import "./Media.css"


export const MediaCard = ({ media, handleDeleteMedia }) => {
    const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
    const sessionUserId = sessionUser.id
    const {postId} = useParams();

    const navigate = useNavigate();

    return (
        <>
        <div className="media__cards">
        <div className="media__card__grow">
        <div className="media__container">
            <div className="media__card">
            <picture>
            <img className="media__img" src={media.img} alt="media image" />
            </picture>
            <div className="media__overlay">
                    <p className="media__caption">{media.caption}</p>
                    <p className="media__user"><strong>Posted by:</strong>{media?.user.name}</p>
                    { media?.userId === sessionUserId
        ? <>
        <section className="media__container">
        <div className="media__delete">
            <div className="media__delete__btns">
                <button type="button" className="media__delete__btns__btn" id="media__delete__btn" onClick={() => handleDeleteMedia(media.id)} ><small>delete post</small></button>
            </div>
        </div>
        </section>
        </>
        : ""
        }
                    
            </div>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}