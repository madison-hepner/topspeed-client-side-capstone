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
            ? <li className="menu-item">
              <Link className="menu" to="/forum">FORUMS</Link>
              <ul className="drop-menu">
                <div className="grow"><li><Link className="drop-menu-iten" to="forum/subforum/1">Porsche</Link></li></div>
                <div className="grow"><li><Link className="drop-menu-item" to="forum/subforum/2">Nissan</Link></li></div>
                <div className="grow"><li><Link className="drop-menu-item" to="forum/subforum/3">BMW</Link></li></div>
                <div className="grow"><li><Link className="drop-menu-item" to="forum/subforum/4">Audi</Link></li></div>
                <div className="grow"><li><Link className="drop-menu-item" to="forum/subforum/5">Mercedes</Link></li></div>
                <div className="grow"><li><Link className="drop-menu-item" to="forum/subforum/6">Toyota</Link></li></div>
                <div className="grow"><li><Link className="drop-menu-item" to="forum/subforum/7">Honda</Link></li></div>
                <div className="grow"><li><Link className="drop-menu-item" to="forum/subforum/8">Ford</Link></li></div>
            </ul>
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
