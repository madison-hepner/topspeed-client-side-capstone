import react, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleCard } from './Articles';
import { getAllArticles, deleteArticle } from './../modules/ArticleManager'
// import './TopSpeed.css'

//This renders all article cards in a list with a button to add additional articles/cards. Coded by Brian.

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    const getArticles = () => {
        return getAllArticles().then(articlesFromAPI => {
            setArticles(articlesFromAPI)
        })
    }

    useEffect(() => {
        getArticles();
    }, []);


    const handleDeleteArticle = (id) => {
        deleteArticle(id)
        .then(() => getAllArticles().then(setArticles));
    };

    return (
        <>
        <div className="article__cards">
            {articles.map(article =>
                <ArticleCard
                key={article.id}
                article={article}
                handleDeleteArticle={handleDeleteArticle} 
                />
            )}
        </div>

        </>
    )
}