const remoteURL = "http://localhost:8088"

export const getPostById = (postId) => {
  return fetch(`${remoteURL}/forumPosts/${postId}?_expand=user`)
  .then(res => res.json())
}

export const getAllPosts = () => {
  return fetch(`${remoteURL}/forumPosts?_expand=carType&_expand=user`)
  .then(res => res.json())
}

export const getForumByCarType = (carTypeId) => {
    return fetch(`${remoteURL}/carTypes/${carTypeId}?_expand=name`)
    .then(res => res.json())
  }
