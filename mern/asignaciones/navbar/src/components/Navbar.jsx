import React, { useContext } from 'react';
import { WrapperContext } from '../contexts/Wrapper'

const Navbar = () => {
    const {message} = useContext(WrapperContext);
    return (
        <div>
            <h1>Hello {message} !</h1>
        </div>
    )
}

export default Navbar
