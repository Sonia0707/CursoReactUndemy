import { combineReducers } from "redux";
import { createSelector } from "reselect";
import {
  cities,
  getForecastDataFromCities as _getForecastDataFromCities,
  getWeatherCities as _getWeatherCities,
} from "./cities"; //Importamos con un alias para poder reutilizarla con el mismo nombre
import { city } from "./city";

export default combineReducers({
  cities,
  city,
});

//Generamos la función getcity le pasamos el estado global de la aplicación y de hay obtenemos solamente la parte de city, que se la pasamos la función,
//generada en el reducers de cities
//Cremos el createSelector pasandole los parametros del estado de la city
export const getcity = createSelector(
  (state) => state.city,
  (city) => city
);

//Generamos aquí el getForecastDataFromCities con el mismo nombre que la función que tenemos el cities
//Cremos el createSelector pasandole los parametros del estado de las cities y las funciones getCity que ya tiene el createSelector y la función _getForecastDataFromCities
// generada en el reducers cities que tambien tiene el createSelector

export const getForecastDataFromCities = createSelector(
  (state) => state.cities, // 1º Función
  getcity, // 2º Función
  _getForecastDataFromCities //resultFunc
);

export const getWeatherCities = createSelector(
  (state) => state.cities,
  _getWeatherCities
);
