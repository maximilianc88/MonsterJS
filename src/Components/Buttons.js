import React from "react";
import ButtonOne from "./ButtonOne/button";
import ButtonSunset from "./ButtonSunset/index";


const Button = (props) => {
  return (
    <div>
      <div className="comp-cat buttons">
        <h1> Buttons: <ButtonOne /> <ButtonSunset /> </h1>
      </div>
    </div>
  );
};

export default Button;

// types = ['primary', 'outline', 'destructive', 'lowEmphasis'];
// <>
// {types.map(type => <Button type={type} key={type} style={{marginRight: 12}}>{type}</Button>)}

// <div style={{backgroundColor: '#212636', display: 'inline-block' }}>
//   <Button kind='outlineDark' key='outlineDark' style={{margin: 12}}>outlineDark</Button>
// </div>
// </>
