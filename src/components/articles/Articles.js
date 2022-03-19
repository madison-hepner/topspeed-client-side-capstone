import react from "react";
import { Link } from "react-router-dom";
// import './ArticleCard.css'
import './../TopSpeed.css'
import { useNavigate } from "react-router-dom";


export const ArticleCard = ({ article, handleDeleteArticle, handleEditArticle }) => {

    const navigate = useNavigate();

    return (
        <>
        <div className="article__cards">
            <div className="article__card">
                <Link to={article.url}>
                <h4 className="article__title" target="_blank"> {article.title}</h4>
                </Link>
                    <p><strong>Synopsis</strong> {article.synopsis}</p>
                    {/* <Link to={article.url}>
                        <strong> Go to full article</strong>
                    </Link></p> */}
            <hr></hr>
            </div>
        </div>
        </>
    )
}