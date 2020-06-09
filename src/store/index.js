import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { city } from "./../reducers/city";

const inicialState = {
  city: "Buenos Aires,ar",
};

//Herramienta debugger React Developer Tools para ver el funcionamiento: (ver documentación), si hay dudas: https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Si no quisieramos utilizar la herramienta simplemente quitamos la constante... Pero es mejor para poder comprobar los estados como cambian.
//De esta manera ya incorporamos el Middleware => thunk..
export const store = createStore(
  city,
  inicialState,
  composeEnhancers(applyMiddleware(thunk))
);
