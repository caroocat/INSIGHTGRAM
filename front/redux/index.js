import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};
export default configureStore;
