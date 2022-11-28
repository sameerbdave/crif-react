import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from '../../assets/images/logo.svg';

const Nav = () => {
    return (
        <div className="navbar bg-light">
            <div className="container">
                <div className="navbar-brand"><img className="logo" src={LogoImg} alt="" /></div>
                <nav className="mid-menu">
                    <NavLink to="/">Personal</NavLink>
                    <NavLink to="/business">Business</NavLink>
                </nav>
                <ul className="rgt-menu">
                    <li>
                        <Link to="/">ABOUT CRIF</Link>
                    </li>
                    <li>
                        <Link to="/business">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/freeflow">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default Nav;

