import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ForecastExtended from "../components/ForecastExtended";

class ForecastExtendedContainer extends Component {
  render() {
    return this.props.city && <ForecastExtended city={this.props.city} />;
  }
}
ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
};

//Objeto de FUNCIONES que se mapea y se inyecta gracias a connect como propiedades dentro del componente:
// (setea los nuevos valores de propiedades "se ejecuta una renderización")
const mapDispattchToprops = ({ city }) => ({ city });

export default connect(mapDispattchToprops, null)(ForecastExtendedContainer); // Se suma: MapStateToprops(values) + MapDispattchToprops(func) = propiedades extra para el
//(component) que son iyectadas por el connect no por otro componente externo.
