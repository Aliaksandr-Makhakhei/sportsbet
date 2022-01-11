import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar__logo" to="/">Sports Bet</Link>
        </nav>
    )
}

export default Navbar