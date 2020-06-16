//Importamos los datos que nos arroja el servidor:
import transformForecast from "./../services/transformForecast";
import transformWeather from "./../services/transformWeather";
import getUrlWeatherByCity from "./../services/getUrlWeatherBtCity";

//Constantes de las acciones que enviaremos a los reducers para comprobar el state:
export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";

const setCity = (payload) => ({ type: "SET_CITY", payload }); //literal correspondiente al estado de la ciudad
// (ya no hace falta la exportación porque internamente lo va hacer el setSelectedCity mediante el  dispatch(setCity(payload));)

//Fetch de de los datos del forecast:

const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload }); //Accion que hace la petición al servidor

const getWeatherCity = (payload) => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = (payload) => ({ type: SET_WEATHER_CITY, payload });

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = (payload) => {
  //Por el Middleware se genera una funcion que tiene que es dispatch
  return (dispatch, getState) => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

    //Activar en el estado de un indicador de busqueda de datos inicial: (Le ponemos uno por defecto inicial)
    dispatch(setCity(payload)); //literal de la ciudad que el usuario selecciono

    const state = getState();
    const date =
      state.cities[payload] && state.cities[payload].forecastDataDate;

    const now = new Date();

    if (date && now - date < 1 * 60 * 1000) {
      return;
    }

    //Hacemos la promise para buscar los datos de la API y leer el JSON
    return fetch(url_forecast)
      .then((data) => data.json())
      .then((weather_data) => {
        const forecastData = transformForecast(weather_data);

        //Modificar el estado con el resultado de la promise (fetch)
        //(Resolución de petición): Le pasamos la city y la resolución de la promise como pronostico extendido.
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};
export const setWeather = (payload) => {
  return (dispatch) => {
    payload.forEach((city) => {
      dispatch(getWeatherCity(city));

      const api_weather = getUrlWeatherByCity(city);

      fetch(api_weather)
        .then((data) => {
          return data.json();
        })
        .then((weather_data) => {
          const weather = transformWeather(weather_data);
          dispatch(setWeatherCity({ city, weather }));
        });
    });
  };
};
