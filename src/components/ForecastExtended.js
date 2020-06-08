import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import transformForecast from "./../services/transformForecast";
import "./styles.css";

/*const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

const data = {
  temperature: 10,
  humidity: 10,
  weatherState: "normal",
  wind: "normal",
};*/
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null };
  }
  componentDidMount() {
    this.upadateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.upadateCity(nextProps.city);
    }
  }

  upadateCity = (city) => {
    //fetch or axios
    const url_forecast = `${url}?q=${city}&appid=${api_key}`;

    fetch(url_forecast)
      .then((data) => data.json())
      .then((weather_data) => {
        console.log(`El resultado de weather_data es: ${weather_data}`);
        const forecastData = transformForecast(weather_data);
        this.setState({ forecastData });
      });
  };

  renderForecastItemDays(forecastData) {
    return forecastData.map((forecast) => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
  }

  renderProgress = () => {
    return "Cargando pronostico estendido...";
  };

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forcast-title">Pronosticco Extendido para {city}</h2>

        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

//Para trabajar la propiedad la propiedad de ciudad en el forcastExtended por defecto
// se puede hacer de esta manera tambien pero en este curso la tratamos en el App.js:

/*ForecastExtended.defaultProps = {
  city: "(No hay ciudades por defecto)",
};*/

export default ForecastExtended;
