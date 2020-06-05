import convert from "convert-units";
import { SUN } from "./../constants/WeatherConstants";

const getTemp = (kelvin) => {
  return Number(convert(kelvin).from("K").to("C").toFixed(2));
};
const getWeatherState = (weather_Data) => {
  return SUN;
};
const transformWeather = (weather_Data) => {
  const { humidity, temp } = weather_Data.main;
  const { speed } = weather_Data.wind;
  const weatherState = getWeatherState(weather_Data);
  const temperature = getTemp(temp);

  const data = {
    temperature,
    weatherState,
    humidity,
    wind: `${speed} m/s`,
  };
  return data;
};

export default transformWeather;
