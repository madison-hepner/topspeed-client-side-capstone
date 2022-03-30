// COMMENT FORM
import react, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addComment } from "../modules/CommentManager";
import { getAllComments } from "../modules/CommentManager";
import { getAllPosts, getPostById } from "../modules/ForumManager";
import { getCommentByPost } from "../modules/CommentManager";


export const CommentForm = ({showModal, setShowModal}) => {

    const {postId} = useParams()
    const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
    const sessionUserId = sessionUser.id
    const navigate = useNavigate()
    const content = useRef(null)
    const [postComment, setComment] = useState({
        userId: sessionUserId,
        content: "",
        postId: +postId,
        date: new Date().toLocaleString(),
    })
    const [forumPost, setPost] = useState({})




const handleClickSaveComment = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form
    const newComment = {...postComment}
    newComment.content = content.current.value
    addComment(newComment)
    .then(() => setShowModal(false))


}

useEffect(() => {
    console.log("useEffect", postId)
    getPostById(postId)
    .then(post => {
        setPost(post);
    });
}, [postId]);


const getComments = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getCommentByPost(+postId).then(commentsFromAPI => {
      setComment(commentsFromAPI)
      console.log(postComment)
    });
  };

  const syncComments = () => {
    getComments()
  }


return (
    <>
    { showModal ?
    <form>
            <div  className="comment__form__inputs">
                <fieldset>
                    <div  className="comment__input">
                        <input type="text" className="comment__input__field" id="content" ref={content} /> 
                    </div>
                </fieldset>
                <section className="big__btns">
                <div className="form__input__crud__btn">
                    <button type="button" className="big__btn" id="big__btn"
                        onClick={handleClickSaveComment}>
                        <small>add comment</small>
                    </button>
                </div>
                </section>
                
            </div>
        </form>
        : null 
    }


    </>
)


}