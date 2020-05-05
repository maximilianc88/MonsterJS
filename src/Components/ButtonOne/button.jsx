import React from 'react';
import './style.css';


// function button(props) {
//   return (
//     <div className="button" type={props.type}><span className="button-text">{props.text}</span>
//         </div>
//   );
// }


// button.propTypes = {
//   children: PropTypes.node,
//   type: PropTypes.string,
//   text: PropTypes.string
// }

// export default button;



const ButtonOne = props => {
    return (
    <button onClick={props.onClick}> 
    <span className="button-text">{props.text}Dumb</span>
    </button>
  );
}

export default ButtonOne;



// function Button(props) {
//     return (
//         <div className="button-sm primary">
//             <span className="button-text">{props.text}</span>
//         </div>
//     )
// }

// export default Button;