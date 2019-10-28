import React from 'react'; 

const Display = ({display, alt, title}) => {
    return (
        <div>
            <img src={display} className='searchImage' alt={alt} title={title} />
        </div>
    )
}

export default Display;