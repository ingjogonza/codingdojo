import React from 'react';
import './components.css';

const Tabs = (props) => {
    const { tab, setRectangleMessage, tabs } = props;
    const { id } = tab;
    const handleClick = (e)=>{ 
        setRectangleMessage(tabs[e.target.id].message)
    }
    return (
            <div id={ id } name={ id } className="tab" onClick={(e) => handleClick(e)}>
                Tab { id+1 }
            </div>
    )
}

export default Tabs
