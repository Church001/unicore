import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { IAppState } from "./StoreInterface";
import { weatherReducer } from "./dashboard/reducer/DashboardReducer";
// creating store

const store = createStore(
  combineReducers<IAppState>({
    weatherReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
