import React from 'react';
import { Header, Footer } from './header'

const InstructorDashboard = ()=>{
    return (
        <div className="inst-dash-container">
            <Header/>
            I am the instructor dashboard page!
            <Footer/>
        {/* PAGE CONTAINER ENDS HERE */}
        </div>
    )
}

export { InstructorDashboard }