const remoteURL = "http://localhost:8088"

export const getPostById = (postId) => {
  return fetch(`${remoteURL}/forumPosts/${postId}?_expand=user&_expand=carType&_expand=comment`)
  .then(res => res.json())
}

export const getAllPosts = () => {
  return fetch(`${remoteURL}/forumPosts?_expand=carType&_expand=user`)
  .then(res => res.json())
}


export const getForumByCarType = (carTypeId) => {
    return fetch(`${remoteURL}/forumPosts?carTypeId=${carTypeId}&_expand=carType&_expand=user`)
    .then(res => res.json())
}

export const addForumPost = (newPost) => {
    return fetch(`${remoteURL}/forumPosts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }).then(response => response.json())
}

export const deletePost = (id) => {
    return fetch(`${remoteURL}/forumPosts/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
  

  export const editPost = (editedPost) => {
    return fetch(`${remoteURL}/forumPosts/${editedPost.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedPost)
    }).then(response => response.json())
  }

