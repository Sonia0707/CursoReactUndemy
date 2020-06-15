import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getForecastDataFromCities, getcity } from "./../reducers"; //Cambio va a ser generico para coger los selectors
import ForecastExtended from "../components/ForecastExtended";

//Container que controla los datos  que se le mandan al  Component ForecastExtended
class ForecastExtendedContainer extends Component {
  render() {
    const { city, forecastData } = this.props;
    return city && <ForecastExtended city={city} forecastData={forecastData} />;
  }
}
//La propiedad forecastData que nos llega no es requerida si o si, porque puede venir undefine ya que en el componente tenemos
//la ya una respuesta del indicador de progreso: cargando...

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
};

//Objeto de FUNCIONES que se mapea y se inyecta gracias a connect como propiedades dentro del componente:
// (setea los nuevos valores de propiedades "se ejecuta una renderización")

//Las cities de primeras nos vienen vacias hay que validar y poner algo por defecto

//Hacemos el cambio en este punto para que los containers no controlen el estado porque si no tendríamos que estar cambiando todo el rato los containers
// y en un proyecto muy grande podría ser un problema... Así que aquí vamos a utilizar el patron selector para hacerlo más eficiente y lo crearemos en los
// reducers

//Cambiamos el estado a state y llamamos al primer selector, de momento solo tenemos el de cities y no el de city, hay que cambiarlo para que tambien
//conozca que tenemos en el diccionario...

//Realizamos cambio: pasandole al getForecastDataFromCities el state y importamos desde el index.js de reducers ((Cambiomos el index.js))

//Nivel de asbtracción mas alto para el estado de city y forecastData:
const mapDispattchToprops = (state) => ({
  city: getcity(state),
  forecastData: getForecastDataFromCities(state),
});

export default connect(mapDispattchToprops, null)(ForecastExtendedContainer); // Se suma: MapStateToprops(values) + MapDispattchToprops(func) = propiedades extra para el
//(component) que son iyectadas por el connect no por otro componente externo.
