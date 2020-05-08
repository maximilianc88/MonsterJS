import React from 'react';
import Button from './Button';
import './style.css'


const ButtonList = (props) => {
  return (
    <div>
      <div className="comp-cat buttons">
        <h1> Buttons:  
         <Button
        value='Click!'
        theme='btn btn-sunset monster' /> 
         <Button
        value='Click!'
        theme='btn btn-lagoon lg' /> 
         <Button
        value='Click!'
        theme='btn btn-moon md' />
         <Button
        value='Click!'
        theme='btn btn-midnight sm' />
        </h1>
      </div>
    </div>
  );
};

export default ButtonList;


