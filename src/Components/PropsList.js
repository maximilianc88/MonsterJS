import React from 'react';
import './style.css'


const PropsList = (props) => {
  return (
    <div>
        <h1>Index of Components with Props</h1>
      <div>  
<ol> 
    <li className="props-li">Buttons
        <div className="row props-list-row">
         <h4 className="ml-1">Props:</h4>   
        <ul>
            <li>Theme</li>
            <li>Value</li>
            <li>Size</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Card
    <div className="row props-list-row">
         <h4 className="ml-1">Props:</h4>   
        <ul>
            <li>Theme</li>
            <li>Car Image</li>
            <li>Value</li>
            <li>Title</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Contact Form
        <div className="row props-list-row">
         <h4 className="ml-1">Props:</h4>   
        <ul>
            <li>theme</li>
            <li>placeholder1</li>
            <li>placeholder2</li>
            <li>placeholder3</li>
            <li>onChange</li>
            <li>onSubmit</li>
            <li>buttonValue1</li>
            <li>buttonValue2</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Figure
        <div className="row props-list-row">
         <h4 className="ml-1">Props:</h4>   
        <ul>
            <li>theme</li>
            <li>caption</li>
            <li>imageSource</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Footer
        <div className="row props-list-row">
         <h4 className="ml-1">Props:</h4>   
        <ul>
            <li>theme</li>
            <li>footerLogo</li>
            <li>logoHeight</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Header
        <div className="row props-list-row">
         <h4 className="ml-1">Props:</h4>   
        <ul className="nav-props-li">
            <li>theme</li>
            <li>logo</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Search Bar
        <div className="row props-list-row">
         <h4 className="ml-1">Props:</h4>   
        <ul>
            <li>theme</li>
            <li>value</li>
            <li>placeholder</li>
        </ul>
        </div>
    </li>
    <li className="props-li">Social Media Bar
        <div className="row props-list-row">
         <h4 className="ml-1">Props:</h4>   
        <ul>
            <li>size</li>
            <li>facebookLink</li>
            <li>twitterLink</li>
            <li>instagramLink</li>
            <li>googlePlusLink</li>
            <li>githubLink</li>
            <li>emailAddress</li>
        </ul>
        </div>
    </li>
</ol>
      </div>
    </div>
  );
};

export default PropsList;