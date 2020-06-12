import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const hanlWeatherLocationClic = (city) => {
    console.log("hanlWeatherLocationClic");
    onSelectedLocation(city);
  };
  const strToComponents = (cities) =>
    cities.map((city) => (
      <WeatherLocation
        //Provee de una clave para la ciudad
        key={city.key}
        //Provee el nombre de la ciudad
        city={city.name}
        //Boton de click se refresca con city.name
        onWeatherLocationClick={() => hanlWeatherLocationClic(city.name)}
        //Proveer al componente WeatherLocation de la data:
        data={city.data}
      />
    ));

  return <div className="locationList">{strToComponents(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;
