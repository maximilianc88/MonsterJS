import React from "react";
import Proptypes from "prop-types";
import "./style.css";

const Card = ({ theme, cardImage, imageHeight, value, title }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className={`card ${theme}`}>
            <img src={cardImage} alt="Gaga" height={imageHeight} />
                <div><span className="card">{title}</span></div>
            <p className="card-p">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  theme: Proptypes.string,
  cardImage: Proptypes.string,
  imageHeight: Proptypes.string,
  value: Proptypes.string,
  title: Proptypes.string,
};

export default Card;
