import React from 'react';
import Navigation from './Navigation';
import Product from './Product';
import Products from './Products'
const Home = () => {
    
    return (
        <div className="container">
            <Navigation/>
            <Products/>
            {/* <div className="row mt-1">
                <div className="col-md-4">
                    <Product/>
                </div>
                <div className="col-md-8">
                     <Products/>      
                </div>

            </div> */}
            
        </div>
    )
}

export default Home
