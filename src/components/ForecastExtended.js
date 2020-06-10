import React from "react"; //Borramos  la  conexión del Component ya que ahora no es una clase y utilizamos la conexión a ForecastExtendedContainers
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import "./styles.css";

const renderForecastItemDays = (forecastData) => {
  return forecastData.map((forecast) => (
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    />
  ));
};

//Cambiamos el componente de  clase y lo  convertimos a un funcional component (Componente presentacional), ya que  ahora las peticiones las mandamos por las acciones de redux
const renderProgress = () => {
  return "Cargando pronostico estendido...";
};

const ForecastExtended = ({ city, forecastData }) => (
  <div>
    <h2 className="forcast-title">Pronosticco Extendido para {city}</h2>

    {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
  </div>
);

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
};

export default ForecastExtended;
