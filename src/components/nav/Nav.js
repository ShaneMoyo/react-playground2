import React from 'react'; 
import { Link } from "react-router-dom";


export default function Nav() { 
    return (
        <nav className="topnav"> 
            <a>
                <Link to="/">Home</Link>
            </a>  
            <a>
                <Link to="/about">About</Link>
            </a>          
        </nav>
    );
}