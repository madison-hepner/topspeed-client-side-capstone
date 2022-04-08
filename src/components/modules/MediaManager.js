const remoteURL = "http://localhost:8088"

export const getMediaPostById = (mediaId) => {
  return fetch(`${remoteURL}/media/${mediaId}?_expand=user&_expand=caption`)
  .then(res => res.json())
}

export const getAllMediaPosts = () => {
  return fetch(`${remoteURL}/media?_expand=user&_expand=caption`)
  .then(res => res.json())
}


export const addMediaPost = (newMediaPost) => {
    return fetch(`${remoteURL}/media`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMediaPost)
    }).then(response => response.json())
}

export const deleteMediaPost = (id) => {
    return fetch(`${remoteURL}/media/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
  

  export const editMediaPost = (editedMediaPost) => {
    return fetch(`${remoteURL}/forumPosts/${editedMediaPost.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedMediaPost)
    }).then(response => response.json())
  }