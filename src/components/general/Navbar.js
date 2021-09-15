import React from 'react';
import {Link, BrowserRouter} from "react-router-dom";
import '../../App';

const Navbar = () =>{
    return (
        <nav className="main-navbar bg-main">
            <h2>
                <BrowserRouter>
                    <Link to="" style={{color: "white"}}>YourPartner</Link>
                </BrowserRouter>
            </h2>
            <ul>
                <li>
                    <BrowserRouter >
                        <Link to="/register" style={{color: "white"}}>Register</Link>
                    </BrowserRouter>
                </li>
                <li>
                    <BrowserRouter>
                        <Link to="#" style={{color: "white"}}>Help</Link>
                    </BrowserRouter></li>
            </ul>
        </nav>
    );
};

export default Navbar;