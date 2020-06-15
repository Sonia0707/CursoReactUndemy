import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import "./styles.css";

/*componentDidMount() {
    this.hundleUpdateClick();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  //Componentes que ya no se van a usar:
  /*componentWillMount() {
    console.log("componentWillMount");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }*/

/* hundleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather)
      .then((resolve) => {
        return resolve.json();
      })
      .then((data) => {
        const newWeather = transformWeather(data);
        console.log(newWeather);
        this.setState({
          data: newWeather,
        });
      });
  };*/

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
  <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
    <Location city={city} />
    {data ? (
      <WeatherData data={data} />
    ) : (
      <CircularProgress size={60} thickness={7} />
    )}
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherLocation;
