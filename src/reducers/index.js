import { combineReducers } from "redux";
import {
  cities,
  getForecastDataFromCities as _getForecastDataFromCities,
} from "./cities"; //Importamos con un alias para poder reutilizarla con el mismo nombre
import { city } from "./city";

export default combineReducers({
  cities,
  city,
});

//Generamos la función getcity le pasamos el estado global de la aplicación y de hay obtenemos solamente la parte de city, que se la pasamos la función,
//generada en el reducers de cities => getForecastDataFromCities. Y exportamos para que lo recoja el container
export const getcity = (state) => state.city;

//Generamos aquí el getForecastDataFromCities con el mismo nombre que la función que tenemos el cities, recogemos los valores generados por los dos reducers,
// y exportamos para mandarselo al contenedor:
export const getForecastDataFromCities = (state) =>
  _getForecastDataFromCities(state.cities, getcity(state));
