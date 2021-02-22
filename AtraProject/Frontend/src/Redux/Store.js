import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import imageReducer from "../Redux/Reducers/ImgeReducer"
import userReducer from "../Redux/Reducers/UserReducer"
import { getImages, login, sighUp } from "./Middlewaes/crud";
const reducer = combineReducers({ imageReducer, userReducer, form: formReducer });
const store = createStore(reducer, applyMiddleware(getImages, login, sighUp));

window.store = store;

export default store;

// store.dispatch(actionsUser.getImages())