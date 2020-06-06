import React, { Component } from "react";
import PropTypes from "prop-types";

class ForecastExtended extends Component {
  render() {
    const { city } = this.props;
    return <div>Pronosticco Extendido para {city}</div>;
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

//Para trabajar la propiedad la propiedad de ciudad en el forcastExtended por defecto
// se puede hacer de esta manera tambien pero en este curso la tratamos en el App.js:

/*ForecastExtended.defaultProps = {
  city: "(No hay ciudades por defecto)",
};*/

export default ForecastExtended;
