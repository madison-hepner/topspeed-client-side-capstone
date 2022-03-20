import react from "react";
import { Link } from "react-router-dom";
// import './ArticleCard.css'
import './../TopSpeed.css'
import { useNavigate } from "react-router-dom";


export const ArticleCard = ({ article }) => {

    const navigate = useNavigate();

    return (
        <>
        <div className="article__cards">
        <div className="container">
            <div className="article__card">
            <picture>
            <img className="article__img" src={article.img} alt="article image" />
            </picture>
            <div className="overlay">
                <Link className="article__info" to={article.url}>
                <h4 className="article__title" target="_blank"> {article.title}</h4>
                </Link>
                    <p><strong>Synopsis</strong> {article.synopsis}</p>
                    {/* <Link to={article.url}>
                        <strong> Go to full article</strong>
                    </Link></p> */}
                    </div>
            </div>
            </div>
        </div>
        </>
    )
}