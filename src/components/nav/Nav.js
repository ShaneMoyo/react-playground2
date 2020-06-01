import React from 'react'; 
import { Link } from "react-router-dom";
import './Nav.scss';


export default function Nav() { 
    return (
        <nav className="navbar">        
            <label className="navbar-toggle" id="js-navbar-toggle" htmlFor="chkToggle">
                <span className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </span>
            </label>
            <a href="#" className="logo">Shane Moyo</a>
            <input type="checkbox" id="chkToggle"></input>
            <ul className="main-nav" id="js-menu">
                <li>
                    <Link to="/" className="nav-links">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-links">About</Link>
                </li>
            </ul>
        </nav>
    );
}