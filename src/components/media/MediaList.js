import react, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteMediaPost, getAllMediaPosts } from '../modules/MediaManager';
import { MediaCard } from './Media';
import "./Media.css"
import { MediaDetails } from './MediaDetailsModal';
import { AddMediaPostForm } from './MediaPostForm';
// import './TopSpeed.css'

//This renders all article cards in a list with a button to add additional articles/cards. Coded by Brian.

export const MediaList = () => {
    const {mediaId} = useParams();
    const [mediaPosts, setMediaPosts] = useState([]);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [showDetailsModal, setShowDetailsModal] = useState(false)

    const openDetailsModal = () => {
        setShowDetailsModal(prev => !prev)
    }
    

    const getMediaPosts = () => {
        return getAllMediaPosts().then(mediaFromAPI => {
            setMediaPosts(mediaFromAPI)
        })
    }

    useEffect(() => {
        getMediaPosts();
    }, []);


    const handleDeleteMedia = (id) => {
        deleteMediaPost(id)
        .then(() => getAllMediaPosts().then(setMediaPosts));
    };

    return (
        <>
        <fieldset className="background">
        <h2 className="page__title">Media</h2>
        <div className="spacer"></div>
        <section className="make__post">
                <div className="media__btns">
                    <button type="button" className="comment__btn btn" id="comment__btn" onClick={openModal}><small>add an image</small></button>
                    <AddMediaPostForm showModal={showModal} setShowModal={setShowModal}/>
                </div>
            </section>
        <div className="media__cards" >
            <>
            {mediaPosts.map(media =>
                <MediaCard
                key={media.id}
                media={media}
                handleDeleteMedia={handleDeleteMedia} 
                />
            )}
            </>
        </div>
        </fieldset>

        </>
    )
}