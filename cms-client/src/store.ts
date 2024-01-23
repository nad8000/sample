import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./reducks"; // import all reducers from ducks/index.js

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware()
  );
}