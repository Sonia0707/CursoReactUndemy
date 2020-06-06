import React from "react";
import PropTypes from "prop-types";
import WeatherIcons from "react-weathericons";

import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from "../../../constants/WeatherConstants";
import "./styles.css";

//Rellenar las varibles que se usen es el diccionario mapeo:
const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstorm",
  [DRIZZLE]: "day-showers",
};

const getwehatherIcon = (weatherState) => {
  const icon = icons[weatherState];

  const sizeIcon = "4x";
  if (icon)
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  else
    return (
      <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
    );
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getwehatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{`Cº`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
