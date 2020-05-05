import React from "react";
import "./style.css";


const ButtonSunset = props => {
    return (
    <div className="button-sunset">
    <button onClick={props.onClick}> 
    <h1 className="button-text-sunset">Sunset</h1>
    </button>
    </div>
  );
}

export default ButtonSunset;