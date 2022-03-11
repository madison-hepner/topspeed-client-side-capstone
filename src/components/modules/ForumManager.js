const remoteURL = "http://localhost:8088"

export const getPostById = (postId) => {
  return fetch(`${remoteURL}/forumPosts/${postId}?_expand=user&_expand=carType`)
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
