import React from 'react'
import './components.css'


const BoxList = (props) => {
    const { box } = props;
    const {id, color} = box;
    const divStyle ={
        backgroundColor: color,
    }
    console.log(divStyle);
    
    return (
        
            <div style={ divStyle } className="cuadro" id={ id } >

            </div>
        
    )
}

export default BoxList
