import React from 'react';
import '../App.css'

import { Link } from 'react-router-dom'

const Header = ()=>{
    return (
        <div className="header-container">
            <nav>
                <Link 
                    to="/" 
                    className="link-link">
                    Landing
                </Link>

                <Link 
                    to="/clientdash" 
                    className="link-link">
                    Client Dash
                </Link>

                <Link 
                    to="/instdash" 
                    className="link-link">
                    Inst Dash
                </Link>

                <Link 
                    to="/login" 
                    className="link-link">
                    Login
                </Link>

                <Link 
                    to="/createaccount" 
                    className="link-link">
                    Create Account
                </Link>

                <Link 
                    to="/meetourinst" 
                    className="link-link">
                    Meet Our Instructors
                </Link>

                <Link 
                    to="/coursecatalog" 
                    className="link-link">
                    CourseCatalog
                </Link>
            </nav>
        {/* DIV CONTAINER ENDS HERE */}
        </div>
    )
}

const Footer = ()=>{
    return (
        <div className="footer-container">
            <p>I am a footer. Links will be added to me after all the routing and authentication is solved.</p>
        {/* DIV CONTAINER ENDS HERE */}
        </div>
    )
}

export { Header, Footer }