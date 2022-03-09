const remoteURL = "http://localhost:8088"

export const getPostById = (postId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/forumPosts/${postId}?_expand=user`)
  .then(res => res.json())
}

export const getAllPosts = () => {
  return fetch(`${remoteURL}/forumPosts?_expand=user`)
  .then(res => res.json())
}
