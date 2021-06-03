import React, { useContext } from 'react';
import { WrapperContext } from '../contexts/Wrapper'


const FormWrapper = () => {
    const {message, setMessage} = useContext(WrapperContext);
    
    return (
        <div>
            <label htmlFor="name">Your Name:</label>
            <input type="text" name="name" value={message} onChange={(e)=> setMessage(e.target.value)}/>

        </div>
    )
}

export default FormWrapper
