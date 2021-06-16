import React from 'react'
import Navigation from './Navigation'
import AuthorsList from './AuthorsList'

const Home = () => {
    return (
        <div className="container">
            <Navigation/>
            <AuthorsList/>
            
        </div>
    )
}

export default Home
