import { createStore } from "redux";
import { city } from "./../reducers/city";

const inicialState = {
  city: "Buenos Aires,ar",
};

export const store = createStore(
  city,
  inicialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
