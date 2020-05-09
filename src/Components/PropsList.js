import React from 'react';
import './style.css'


const PropsList = (props) => {
  return (
      <div className='listWrapper container m-0'>
    <div>
        <h1 className={`${props.theme}`}>Index of Components with Props</h1>
      <div>  
<ol> 
    <li className="props-li">Buttons
        <div className={`${props.theme} row props-list-row`}>
        <h3 className={`${props.theme} ml-1`}>Props:</h3>    
        <ul >
            <li className={`${props.theme}`}>theme</li>
            <li className={`${props.theme}`}>value</li>
            <li className={`${props.theme}`}>size</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Card
    <div className={`${props.theme} row props-list-row`}>
    <h3 className={`${props.theme} ml-1`}>Props:</h3>    
        <ul>
            <li className={`${props.theme}`}>theme</li>
            <li className={`${props.theme}`}>carImage</li>
            <li className={`${props.theme}`}>value</li>
            <li className={`${props.theme}`}>title</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Contact Form
    <div className={`${props.theme} row props-list-row`}>
    <h3 className={`${props.theme} ml-1`}>Props:</h3>  
        <ul>
            <li className={`${props.theme}`}>theme</li>
            <li className={`${props.theme}`}>placeholder1</li>
            <li className={`${props.theme}`}>placeholder2</li>
            <li className={`${props.theme}`}>placeholder3</li>
            <li className={`${props.theme}`}>onChange</li>
            <li className={`${props.theme}`}>onSubmit</li>
            <li className={`${props.theme}`}>buttonValue1</li>
            <li className={`${props.theme}`}>buttonValue2</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Figure
    <div className={`${props.theme} row props-list-row`}>
    <h3 className={`${props.theme} ml-1`}>Props:</h3>   
        <ul>
            <li className={`${props.theme}`}>theme</li>
            <li className={`${props.theme}`}>caption</li>
            <li className={`${props.theme}`}>imageSource</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Footer
    <div className={`${props.theme} row props-list-row`}>
    <h3 className={`${props.theme} ml-1`}>Props:</h3>   
        <ul>
            <li className={`${props.theme}`}>theme</li>
            <li className={`${props.theme}`}>footerLogo</li>
            <li className={`${props.theme}`}>logoHeight</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Header
    <div className={`${props.theme} row props-list-row`}>
    <h3 className={`${props.theme} ml-1`}>Props:</h3>    
        <ul className="nav-props-li">
            <li className={`${props.theme}`}>theme</li>
            <li className={`${props.theme}`}>logo</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Search Bar
    <div className={`${props.theme} row props-list-row`}>
    <h3 className={`${props.theme} ml-1`}>Props:</h3>    
        <ul>
            <li className={`${props.theme}`}>theme</li>
            <li className={`${props.theme}`}>value</li>
            <li className={`${props.theme}`}>placeholder</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Social Media Bar
    <div className={`${props.theme} row props-list-row`}>
        <h3 className={`${props.theme} ml-1`}>Props:</h3>   
        <ul>
            <li className={`${props.theme}`}>size</li>
            <li className={`${props.theme}`}>facebookLink</li>
            <li className={`${props.theme}`}>twitterLink</li>
            <li className={`${props.theme}`}>instagramLink</li>
            <li className={`${props.theme}`}>googlePlusLink</li>
            <li className={`${props.theme}`}>githubLink</li>
            <li className={`${props.theme}`}>emailAddress</li>
        </ul>
        </div>
    </li>
</ol>
</div>
      </div>
    </div>
  );
};

export default PropsList;