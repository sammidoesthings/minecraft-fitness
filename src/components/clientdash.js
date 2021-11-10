import React from 'react';
import { Header, Footer } from './header'

const ClientDashboard = ()=>{
    return (
        <div className="client-dashboard-container">
            <Header/>
            I am the client dashboard page!
            <Footer/>
        {/* PAGE CONTAINER ENDS HERE */}
        </div>
    )
}

export { ClientDashboard }