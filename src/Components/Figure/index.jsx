import React from 'react';

const Figure = ({theme, value, image}) => (
    
    <div className ={`${ theme }`}>
        <img src={`${ image }`}>
    
        </img>

        <p>{value}</p>

    </div>

)

export default Figure;