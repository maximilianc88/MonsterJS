import React from "react";
import "./style.css";

const Figure = ({ caption, imageSrc, theme }) => (
  <div>
    <figure className={`${theme} figure`}>
      <img className="figureImage" alt="placeholder" src={imageSrc} />
      <p className="figureLabel">{caption}</p>
    </figure>
  </div>
);

export default Figure;
