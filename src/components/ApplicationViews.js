import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { TopSpeed } from "./TopSpeed"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ForumList } from "./forum/ForumList"
import { PostDetails } from "./forum/ForumPostDetails"
import { SubForumList } from "./forum/porsche/SubForumList"
import { AddForumPostForm } from "./forum/AddForumForm"
import { CommentForm } from "./comments/CommentForm"



export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
      return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("topspeed_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("topspeed_user") !== null)
    }
    return (
        <>
            <Routes>
            <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
            <Route exact path="/register" element={<Register />} />

            <Route exact path="/" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />

            <Route exact path="/forum" element={
                <PrivateRoute>
                    <ForumList />
                </PrivateRoute>
            } />

            <Route exact path="/forum/:postId" element={
                <PrivateRoute>
                    <PostDetails />
                </PrivateRoute>
            } />

            <Route path="/forum/addPost" element={
                <PrivateRoute>
                    <AddForumPostForm /> 
                </PrivateRoute>
        } />

            <Route path="/forum/subforum/addComment/:postId" element={
                <PrivateRoute>
                    <CommentForm /> 
                </PrivateRoute>
        } />
{/* 
            <Route exact path="/forum/porsche/" element={
                <PrivateRoute>
                    <PorscheSubForum />
                </PrivateRoute>
            } /> */}


            <Route exact path="/forum/subforum/:carTypeId" element={
                <PrivateRoute>
                    <SubForumList />
                </PrivateRoute>
            } />






            </Routes>
        </>
    )
}