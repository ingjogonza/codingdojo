import React, { useState, createContext } from 'react'
export const WrapperContext = createContext();

const Wrapper = ({children}) => {
    const [message, setMessage] = useState('');
    return (
        <div>
            <WrapperContext.Provider
        value={{
            message,
            setMessage
          }}
        >
            {children}
        </WrapperContext.Provider>
        </div>
    )
}

export default Wrapper
