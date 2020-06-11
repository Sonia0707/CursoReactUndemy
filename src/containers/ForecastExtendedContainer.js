import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ForecastExtended from "../components/ForecastExtended";

//Container que controla los datos  que se le mandan al  Component ForecastExtended
class ForecastExtendedContainer extends Component {
  render() {
    const { city, forecastData } = this.props;
    return (
      this.props.city && (
        <ForecastExtended city={city} forecastData={forecastData} />
      )
    );
  }
}
ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
};

//Objeto de FUNCIONES que se mapea y se inyecta gracias a connect como propiedades dentro del componente:
// (setea los nuevos valores de propiedades "se ejecuta una renderización")

//Las cities de primeras nos vienen vacias hay que validar y poner algo por defecto
const mapDispattchToprops = ({ city, cities }) => ({
  city,
  forecastData: cities[city] && cities[city].forecastData,
});

export default connect(mapDispattchToprops, null)(ForecastExtendedContainer); // Se suma: MapStateToprops(values) + MapDispattchToprops(func) = propiedades extra para el
//(component) que son iyectadas por el connect no por otro componente externo.
