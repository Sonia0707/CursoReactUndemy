import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import transformWeather from "./../../services/transformWeather";
import getUrlWeatherByCity from "./../../services/getUrlWeatherBtCity";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
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

  hundleUpdateClick = () => {
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
  };
  render() {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress />}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherLocation;
