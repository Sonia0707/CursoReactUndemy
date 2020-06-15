import React, { Component } from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//Simplificamos y cogemos todas las acciones que se producen en el actions con el alias => * as.
//Ahora todo lo que se exporte puede recogerse en esta clase bajo ese nombre:
import * as actions from "./../actions";
import { getWeatherCities, getcity } from "./../reducers";
import LocationList from "./../components/LocationList";

class LocationListContainer extends Component {
  //Invocación al ActionCreator de setWeather
  componentDidMount() {
    //Simplificamos todo lo que tiene que tener alprincipio con JavaScript y se lo pasamos
    // a los actionCreator lo que necesitamos para cuando cliquemos se produzca el cambio:
    const { setWeather, setSelectedCity, cities, city } = this.props;

    setWeather(cities);

    setSelectedCity(city);
  }

  handSelectionLocation = (city) => {
    this.props.setSelectedCity(city);
  };
  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handSelectionLocation}
      />
    );
  }
}
//Cambiamos la propiedad de setCity y validamos la de setWeather tambien que se nos habia olvidado:
LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
};

//Funcion que inyecta los VALUES como propiedades: (ejecutan las acciones, "altera el estado de la aplicación")

/*const mapDispatchTpProps = (dispatch) => ({
  //Nombre de función setCity (Podría ser cualquier nombre no tiene que ser el mismo que el ActionCreator):
  //Cambiamos el nombre del dispatch porque ahora la accion se produce dentro setSelectedCity:

  setCity: (value) => dispatch(setSelectedCity(value)), //ActionCreator = setCity


  //Esta acción trae todos los valores de los climas de las ciudades, en este caso el value es el array de ciudades
  //Se llama al setWeather

  setWeather: (cities) => dispatch(setWeather(cities)), //ActionCreator = setWeather
});*/

///////////////////Funcion nueva video 148 cambiamos para añadir el bindActionCreators
//bindemos los createActions que estan en el action que vendrán con las mismas propiedades
const mapDispatchTpProps = (dispatch) => bindActionCreators(actions, dispatch);

const mapStateToProps = (state) => ({
  citiesWeather: getWeatherCities(state),
  city: getcity(state),
});

export default connect(
  mapStateToProps,
  mapDispatchTpProps
)(LocationListContainer);
