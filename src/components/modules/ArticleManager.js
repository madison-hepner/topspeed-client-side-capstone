const remoteURL = "http://localhost:8088"

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles?_expand=title&_expand=synopsis`)
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