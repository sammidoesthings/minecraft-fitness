import React from 'react';
import { Header, Footer } from './header'
// import { ClassCard } from './cards/classcard'
// import ExampleClasses from './cards/ExampleClasses';

const ClientDashboard = ()=>{
    return (
        <div className="client-dashboard-container">
            <Header/>
            I am the client dashboard page!
            Here are the classes we have available: insert map function here i think lol
            <Footer/>
        {/* PAGE CONTAINER ENDS HERE */}
        </div>
    )
}

export { ClientDashboard }