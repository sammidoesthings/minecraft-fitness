import React from 'react';
import { Header, Footer } from './header'

const LoginPage = ()=>{
    return (
        <div className="login-container">
            <Header/>
            I am the login page!
            <Footer/>
        {/* PAGE CONTAINER ENDS HERE */}
        </div>
    )
}

export { LoginPage }