import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import reducers from "./../reducers";

const inicialState = {
  city: "Madrid,es",
};

//Herramienta debugger React Developer Tools para ver el funcionamiento: (ver documentación), si hay dudas: https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Si no quisieramos utilizar la herramienta simplemente quitamos la constante... Pero es mejor para poder comprobar los estados como cambian.
//De esta manera ya incorporamos el Middleware => thunk..
export const store = createStore(
  reducers,
  inicialState,
  composeEnhancers(applyMiddleware(thunk))
);
