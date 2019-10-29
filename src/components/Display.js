import React from 'react'; 
import './Display.css'

const Display = ({display, alt, title}) => {
    return (
        <div className = 'display'>
            <img src={display} className='searchImage' alt={alt} title={title} />
        </div>
    )
}

export default Display;