//Importamos la accion que recoge los datos del servidor:
import { SET_FORECAST_DATA } from "./../actions";

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      const { city, forecastData } = action.payload; //Nos llega la city y el forecastData del SET_FORECAST_DATA

      return { ...state, [city]: { forecastData } }; //Falta refactorizar tambien el weather para que nos los guarde en nuestro diccionario.

    //[city] => de esta manera busca en el dicionario la city que le pasemos (La clave),
    // buscando su forecastData: que dentro si hace poco que se ha mirado pues no manda ninguna petición al servicio, si no que recoge los datos almacenados,
    // de manera inmediata. De esta forma la aplicción a nivel de usuario es de mas calidad porque la respuesta es rapidisima;

    default:
      return state;
  }
};

//Vamos a crear un selector para acortar el estado global de la aplicación para trabajar sobre el ya que es el punto donde se conoce a la perfección el estado,
//por eso es el punto mas adecuado para hacerlo:

//La exportamos para poder pasardselo al ForecastExtendedContainer. Le pasamos solamente el state de la city que es el que controla este reducer:
//Así que ponemos el mismo filtro que teniamos establecido en el container: si al clicar es diferente de null, solicitamos forecastData:
export const getForecastDataFromCities = (state, city) =>
  state[city] && state[city].forecastData;
