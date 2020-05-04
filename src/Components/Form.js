import React from "react";

const Form = (props) => {
    return (
      <div>
        <div className="comp-cat forms">
          <h1> Footers:</h1>
          <div className="form-ecommerce">
          <form>
            <label></label>
            <input  type="text"></input>
            <input type="radio"></input>
            <input type="submit"></input>
          </form> 
          </div>
          <div className="form-two">
            {/* Inster code for second footer choice here... */}
          </div>
          <div className="form-three">
            {/* Inster code for third footer choice here... */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Form;
  