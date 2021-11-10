import React from 'react';
import { Header, Footer } from './header'

const CourseCatalog = ()=>{
    return (
        <div className="catalog-container">
            <Header/>
            I am the course catalog page!
            <Footer/>
        {/* PAGE CONTAINER ENDS HERE */}
        </div>
    )
}

export { CourseCatalog }