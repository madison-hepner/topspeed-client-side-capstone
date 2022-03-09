import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css'

export const NavBar = ({ clearUser, isAuthenticated }) => {
  const history = useNavigate()

  const handleLogout = () => {
      clearUser();
      history('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar__background" >
        <picture className="navbar__background" >
           <img className="nav__logo" src={'/TopSpeed.png'} alt="Top Speed Logo" /> 
        </picture> 
      </div>
      <div>
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link" to="/">HOME</Link>
          </li>
          {isAuthenticated
            ? <li className="nav-item">
              <Link className="nav-link" to="/forum">FORUM</Link>
            </li>
            : null}
          {isAuthenticated 
            ? <li className="nav-item">
              <Link className="nav-link" to="/">MEDIA</Link>
            </li>
            : null}
          {isAuthenticated
            ? <li className="nav-item">
              <Link className="nav-link" to="/">SEARCH</Link>
            </li>
            : null}
          {isAuthenticated
            ? <li className="nav-item">
              <Link className="nav-link" to="/">WELCOME,</Link>
            </li>
            : null}
          {isAuthenticated 
            ? 
            <div className="navbar__logout">
              <li className="nav-item">
                <span className="navbar-link navbar__span" onClick={handleLogout}>LOGOUT </span> 
              </li>
            </div>
            : null
          }
        </ul>
      </div>
    </nav>
  )
}