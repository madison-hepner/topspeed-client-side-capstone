import react from "react";

const remoteURL = "http://localhost:8088"

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles?_expand=user`)
    .then(response => response.json())
}

export const getArticleById = (articleId) => {
    return fetch(`${remoteURL}/articles/${articleId}`)
    .then(response => response.json())
}

export const deleteArticle = (id) => {
    return fetch(`${remoteURL}/articles/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
}

export const editArticle = (editedArticle) => {
    return fetch(`${remoteURL}/articles/${editedArticle.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedArticle)
    }).then(response => response.json())
}

//This posts a new article 
export const addArticle = (newArticle) => {
    return fetch(`${remoteURL}/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    }).then(response => response.json())
}