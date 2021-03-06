// MANAGES COMMENT FUNCTIONS
const remoteURL = "http://localhost:8088"

export const getCommentByPost = (postId) => {
    return fetch(`${remoteURL}/postComments?postId=${postId}&_expand=comment&_expand=user`)
    .then(res => res.json())
  }

  export const getAllComments = () => {
    return fetch(`${remoteURL}/postComments?expand=content&_expand=user`)
    .then(res => res.json())
  }

  export const addComment = (newComment) => {
    return fetch(`${remoteURL}/postComments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
    }).then(response => response.json())
}

export const deleteComment = (id) => {
    return fetch(`${remoteURL}/postComments/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const editComment = (editedComment) => {
    return fetch(`${remoteURL}/postComments/${editedComment.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedComment)
    }).then(response => response.json())
  }