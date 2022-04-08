import react from "react";
import { Link } from "react-router-dom";
// import './ArticleCard.css'
// import './../TopSpeed.css'
import { useNavigate } from "react-router-dom";
import './HomeCard.css'


export const HomeCards = ({ carType, forumPosts }) => {

    const navigate = useNavigate();

    return (
        <>
        <div className="car__cards">
        <div className="car__container">
            <div className="car__card">
            <picture>
            <img className="car__img" src={carType.img} alt="car image" />
            </picture>
            <p className="carType__name">{carType.name}</p>
            </div>
            </div>
        </div>
        </>
    )
}