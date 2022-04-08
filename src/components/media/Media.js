import react from "react";
import { Link } from "react-router-dom";
// import './ArticleCard.css'
import './../TopSpeed.css'
import { useNavigate } from "react-router-dom";
import "./Media.css"


export const MediaCard = ({ media }) => {

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
                    <p>{media.caption}</p>
                    <p><strong>Posted by:</strong>{media?.user.name}</p>
            </div>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}