import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

//Aplicamos el Destructuring:
//Sirve para aplicar la propiedad de manera simplificada sin necesidad de hacer ninguna constante:
const Location = ({ city }) => (
  <div className="LocationCont">
    <h1>{city}</h1>
  </div>
);
Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;
