import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "./../actions";
import { getWeatherCities } from "./../reducers";
import LocationList from "./../components/LocationList";

class LocationListContainer extends Component {
  //Invocación al ActionCreator de setWeather
  componentDidMount() {
    this.props.setWeather(this.props.cities);
  }

  handSelectionLocation = (city) => {
    this.props.setCity(city);
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

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
};

//Funcion que inyecta los VALUES como propiedades: (ejecutan las acciones, "altera el estado de la aplicación")

const mapDispatchTpProps = (dispatch) => ({
  //Nombre de función setCity (Podría ser cualquier nombre no tiene que ser el mismo que el ActionCreator):
  //Cambiamos el nombre del dispatch porque ahora la accion se produce dentro setSelectedCity
  setCity: (value) => dispatch(setSelectedCity(value)), //ActionCreator = setCity

  //Esta acción trae todos los valores de los climas de las ciudades, en este caso el value es el array de ciudades
  //Se llama al setWeather
  setWeather: (cities) => dispatch(setWeather(cities)), //ActionCreator = setWeather
});

const mapStateToProps = (state) => ({ citiesWeather: getWeatherCities(state) });

export default connect(
  mapStateToProps,
  mapDispatchTpProps
)(LocationListContainer);
