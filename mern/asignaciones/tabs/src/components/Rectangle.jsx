import React from 'react'

const Rectangle = (props) => {
    const { rectangleMessage } = props;
    return (
        <div className="rectangle">
            { rectangleMessage }
        </div>
    )
}

export default Rectangle
