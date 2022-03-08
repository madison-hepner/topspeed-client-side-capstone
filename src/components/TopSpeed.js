import { Login } from "./auth/Login"
import "./TopSpeed.css"

import React,  {useState} from "react"
// import { Route, Link } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"

    
export const TopSpeed = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("topspeed_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("topspeed_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("topspeed_user") !== null)
    }
  
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("topspeed_user") !== null)
      }
  

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
      <ApplicationViews 
          setAuthUser={setAuthUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
      />
    </>
  )
}