import React from 'react';

const SearchBar = ({theme, value}) => (
    
    <div className={` ${ theme }`}>

        <input type="text"></input>

        <button>{ value }</button>
    </div>

)

export default SearchBar;