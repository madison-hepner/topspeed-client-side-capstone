// COMMENT FORM
import react, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addComment } from "../modules/CommentManager";
import { getAllComments } from "../modules/CommentManager";
import { getAllPosts, getPostById } from "../modules/ForumManager";
import { getCommentByPost } from "../modules/CommentManager";


export const CommentForm = () => {

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
    .then(() => navigate(`/forum/${postId}`))

}

useEffect(() => {
    console.log("useEffect", postId)
    getPostById(postId)
    .then(post => {
        setPost(post);
    });
}, [postId]);

return (
    <>
    <form>
            <div  className="form__inputs">
                <fieldset>
                <h4><span className="forumPost__title">
                    Add a comment on: {forumPost.title}
                </span></h4>
                    <div  className="comment__input">
                        <label htmlFor="contents" className="comment__input__label" >comment:</label>
                        <input type="text" className="comment__input__field" id="content" ref={content} /> 
                    </div>
                </fieldset>
                <section className="big__btns">
                <div className="form__input__crud__btn">
                    <button type="button" className="big__btn" id="big__btn"
                        onClick={handleClickSaveComment}>
                        Submit
                    </button>
                </div>
                </section>
                
            </div>
        </form>


    </>
)


}