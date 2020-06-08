import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCity } from "./../actions";
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
  setCity: (value) => dispatch(setCity(value)), //ActionCreator = setCity
});

export default connect(null, mapDispatchTpProps)(LocationListContainer);
