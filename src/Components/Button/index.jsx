import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Button = ({ styleClass, value, onClick }) => (
  <button className={`btn ${styleClass}`} onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  styleClass: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  styleClass: "btn-default",
};

export default Button;
