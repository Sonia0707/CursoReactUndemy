import { SET_CITY } from "./../actions";

export const city = (state = {}, action) => {
  switch (action.type) {
    case SET_CITY:
      return action.payload; // Al principio solo tenemos un reducers por eso ponemos return { ...state, city: action.payload };
    // pero ahora la clave city ya esta dada por el index.js en el combineReducers.

    default:
      return state;
  }
};
