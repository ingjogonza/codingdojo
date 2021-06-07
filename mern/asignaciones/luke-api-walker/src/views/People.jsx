import React, { useEffect, useState } from 'react'
import axios from 'axios';

const People = ({ singleItem}) => {
    const [homeWorld, setHomeWorld] = useState('');
    useEffect(() => {
        const getPlanet = async () => {
            const url=singleItem.homeworld;
            

            await axios.get(url)
                .then(function (response) {
                    // handle success
                    setHomeWorld(response.data.name)
                })
                .catch(function (error) {
                    // handle error
                    return error;
                });
        }
        getPlanet()
    })


    return (
        <div className="card card-1">
            <h1>{singleItem.name}</h1>
            <p>Height: {singleItem.height}</p>
            <p>Mass: {singleItem.mass}</p>
            <p>Hair-color: {singleItem.hair_color}</p>
            <p>Home World: {homeWorld}</p>
        </div>
    )
}

export default People
