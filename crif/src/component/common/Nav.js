import React from "react";
import { Link } from "react-router-dom";

const Nav =() =>{
    return(
        <div className="navbar bg-light">
            <div className="container">
                <div className="navbar-brand">Logo</div>
                <ul className="mr-auto menu">
                    <li>
                        <Link to="/">Personal</Link>
                    </li>
                    <li>
                        <Link to="/business">Business</Link>
                    </li>
                    <li>
                        <Link to="/freeflow">Freeflow</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
           
        </div>
       
    )
}

export default Nav;