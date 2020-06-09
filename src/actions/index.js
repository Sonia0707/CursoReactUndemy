//Importamos los datos que nos arroja el servidor:
import transformForecast from "./../services/transformForecast";

//Constantes de las acciones que enviaremos a los reducers para comprobar el state:
export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

const setCity = (payload) => ({ type: "SET_CITY", payload }); //literal correspondiente al estado de la ciudad
// (ya no hace falta la exportación porque internamente lo va hacer el setSelectedCity mediante el  dispatch(setCity(payload));)

//Fetch de de los datos del forecast:

const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload }); //Accion que hace la petición al servidor

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = (payload) => {
  //Por el Middleware se genera una funcion que tiene que es dispatch
  return (dispatch) => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

    //Activar en el estado de un indicador de busqueda de datos inicial: (Le ponemos uno por defecto inicial)
    dispatch(setCity(payload)); //literal de la ciudad que el usuario selecciono

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
