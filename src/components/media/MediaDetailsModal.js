// COMMENT FORM
import react, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteMediaPost, getAllMediaPosts } from '../modules/MediaManager';
import { MediaCard } from './Media';
import "./Media.css"
import "./MediaDetails.css"
import { AddMediaPostForm } from './MediaPostForm';
import { getMediaPostById } from '../modules/MediaManager';



export const MediaDetails = ({media, showDetailsModal, setShowDetailsModal}) => {
    const sessionUser = JSON.parse(window.sessionStorage.getItem("topspeed_user"))
    const sessionUserId = sessionUser.id
  const navigate = useNavigate();


  const openDetailsModal = () => {
    setShowDetailsModal(prev => !prev)
}
return (
    <>
    { showDetailsModal ?<>
    <fieldset className="media__details__section">
    <div className="media__delete">
            <div className="media__details__btns__section">
                <button type="button" className="media__det__btns__btn" id="media__det__btn" onClick={() => openDetailsModal(media.id)} ><small>x</small></button>
            </div>
        </div>
    <section className="media__detail__card">
        <div  className="media__modal">
            <fieldset className="media__background">
                <picture>
                    <img className="media__details__img" src={media.img} alt="media image" />
                </picture>
                <p className="media__caption">{media?.caption}</p>
                    <p className="media__user"><strong>Posted by:</strong>{media?.user.name}</p>
            </fieldset>
                
            </div>
        </section>    </fieldset>
        </>

        : null 
    }



    </>
)


}