import React, { useState, useEffect } from "react";
import { getArticleById } from "'./../modules/ArticleManager'";
// import "./AnimalSpotlight.css";


export const ArticleSpotlight = ({articleId}) => {
    useEffect(() => {
        getArticleById(articleId).then(article => {
          setArticle(article);
        });
      }, [articleId]);
      
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(articleId).then(article => {
      setArticle(article);
    });
  }, []);

  return (
    <div className="article-spotlight">
      {/* <img className="kennellogo" src='https://image.freepik.com/free-vector/cute-corgi-puppy-cartoon-icon_42750-299.jpg?w=1060' alt="My Dog" /> */}
      <div>
        <h3>{article.title}</h3>
        <p>{article.synopsis}</p>
      </div>
    </div>
  );
};