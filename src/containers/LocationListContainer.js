import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity } from "./../actions";
import LocationList from "./../components/LocationList";

class LocationListContainer extends Component {
  handSelectionLocation = (city) => {
    this.props.setCity(city);
  };
  render() {
    return (
      <LocationList
        cities={this.props.cities}
        onSelectedLocation={this.handSelectionLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

//Funcion que inyecta los VALUES como propiedades: (ejecutan las acciones, "altera el estado de la aplicación")

const mapDispatchTpProps = (dispatch) => ({
  //Nombre de función setCity (Podría ser cualquier nombre no tiene que ser el mismo que el ActionCreator):
  //Cambiamos el nombre del dispatch porque ahora la accion se produce dentro setSelectedCity
  setCity: (value) => dispatch(setSelectedCity(value)), //ActionCreator = setCity
});

export default connect(null, mapDispatchTpProps)(LocationListContainer);
