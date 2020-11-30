import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return (
        <header className="NavBar">
            <nav className="Nav">
                <div className="name-container">
                    <Link to="/meetyu" className="name-link">
                        <h2 className="first-name">Yu
                        <span className="last-name"> Yuan</span>
                        </h2>
                    </Link>
                </div>
                <ul className="nav-list">
                    <li><Link to="/about" className="about">About</Link></li>
                    <li><Link to="/works" className="works">Works</Link></li>
                    <li><Link to="/contact" className="contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;