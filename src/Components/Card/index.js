
import React from "react";
import Proptypes from "prop-types";
import "./style.css";


const Card = ({ theme, cardImage, value, title }) => {
  return (
    <wrapper>
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className={`card ${theme}`}>
            <div><img className="img-fluid" src={cardImage} alt="Gaga"  /></div>
                <div><span className="card">{title}</span></div>
            <div><p className="card-p">{value}</p></div>
          </div>
        </div>
      </div>
    </div>
    </wrapper>
  );
};

Card.propTypes = {
  theme: Proptypes.string,
  cardImage: Proptypes.string,
<<<<<<< HEAD
=======
  imageHeight: Proptypes.string,
  imageWidth: Proptypes.string,
>>>>>>> 62c7933d649a1eeb2f1eb4434a7cd20d629ac3c7
  value: Proptypes.string,
  title: Proptypes.string,
};

export default Card;