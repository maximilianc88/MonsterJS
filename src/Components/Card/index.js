import React from 'react';
import Proptypes from 'prop-types';
import "./style.css";

const Card = ({theme, value, title}) => (
    <div>
        <div className="row">
            <div className="col-md-3">
                <div className={`card ${theme}`}>
                    <span className={`card ${title}`}></span>
                        <p className="card-p">{value}</p>
                    </div>
                </div>
        </div>
        </div>
);

Card.propTypes = {
    theme: Proptypes.string,
    value: Proptypes.string,
    title: Proptypes.string
}

export default Card;
