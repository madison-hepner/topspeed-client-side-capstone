import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
  const history = useNavigate()

  const handleLogout = () => {
      clearUser();
      history('/');
  }

  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <div className="navbar__background" >
        <picture className="navbar__background" >
          <Link to={'/'}>
          {/* <img className="nav__logo" src={'/ghost.png'} alt="Ghost Zen logo" /> */}
          </Link>
        </picture>
      </div>
      <div>
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {isAuthenticated
            ? <li className="nav-item">
              <Link className="nav-link" to="/articles">forum</Link>
            </li>
            : null}
          {isAuthenticated 
            ? <li className="nav-item">
              <Link className="nav-link" to="/friends">media</Link>
            </li>
            : null}
          {/* {isAuthenticated
            ? <li className="nav-item">
              <Link className="nav-link" to="/messages">Messages</Link>
            </li>
            : null}
          {isAuthenticated
            ? <li className="nav-item">
              <Link className="nav-link" to="/tasks">Tasks</Link>
            </li>
            : null}
          {isAuthenticated
            ? <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            : null}
          {isAuthenticated 
            ? 
            <div className="navbar__logout">
              <li className="nav-item">
                <span className="navbar-link navbar__span" onClick={handleLogout}>Logout </span> 
              </li>
            </div>
            : null
          } */}
        </ul>
      </div>
    </nav>
  )
}