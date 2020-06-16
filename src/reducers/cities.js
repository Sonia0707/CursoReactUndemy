import { createSelector } from "reselect";
import toPairs from "lodash.topairs";

//Importamos la accion que recoge los datos del servidor:
import {
  SET_FORECAST_DATA,
  GET_WEATHER_CITY,
  SET_WEATHER_CITY,
} from "./../actions";

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA: {
      const { city, forecastData } = action.payload; //Nos llega la city y el forecastData del SET_FORECAST_DATA

      return {
        ...state,
        [city]: { ...state[city], forecastData, forecastDataDate: new Date() }, //Utilizamos el forecastDataDate para coger la fecha exacta y pasarsela al index.js
      };

      //[city] => de esta manera busca en el dicionario la city que le pasemos (La clave),
      // buscando su forecastData: que dentro si hace poco que se ha mirado pues no manda ninguna petición al servicio, si no que recoge los datos almacenados,
      // de manera inmediata. De esta forma la aplicción a nivel de usuario es de mas calidad porque la respuesta es rapidisima;
    }

    //Cuando el servidor no retorna nada: (Y sale el indicador de proceso al ser weather null)
    case GET_WEATHER_CITY: {
      const city = action.payload;
      return { ...state, [city]: { ...state[city], weather: null } };
    }
    //Retorna lo que el servidor manda:
    case SET_WEATHER_CITY: {
      const { city, weather } = action.payload;
      return { ...state, [city]: { ...state[city], weather } };
    }

    default:
      return state;
  }
};

//Vamos a crear un selector para acortar el estado global de la aplicación para trabajar sobre el ya que es el punto donde se conoce a la perfección el estado,
//de city y forescastData;
//por eso es el punto mas adecuado para hacerlo:

//La exportamos para poder pasardselo al ForecastExtendedContainer. Le pasamos solamente el state de la city:
//Así que ponemos el mismo filtro que teniamos establecido en el container: si al clicar es diferente de null, solicitamos forecastData:

//Utilizamos tambien el createSelector
export const getForecastDataFromCities = createSelector(
  (state, city) => state[city] && state[city].forecastData, //Función con 2 parametros, sobre los que actua el createSelecto
  (forecastData) => forecastData // => Resultado final => resultFunc
);

//Función auxiliar para el paso del objeto cities, con todas sus propiedades:
//toPairs(cities) => Pasa las propiedades clave = valor, la clave sería el nombre de la ciudad y el valor el contenido de dentro
const fromObjToArray = (cities) =>
  toPairs(cities).map(([key, value]) => ({
    key,
    name: key,
    data: value.weather,
  }));

export const getWeatherCities = createSelector(
  (state) => fromObjToArray(state),
  (cities) => cities
);
