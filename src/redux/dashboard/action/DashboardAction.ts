import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { AnyAction } from "redux";

import { IUnsetLoading, ISetLoading, IGetWeather } from "../DashboardInterface";

export const getWeatherData = (payload: any[]): IGetWeather => {
  return {
    type: "SET_WEATHER",
    payload,
  };
};

export const setLoading = (): ISetLoading => {
  return {
    type: "SET_LOADING",
  };
};

export const unsetLoading = (): IUnsetLoading => {
  return {
    type: "UNSET_LOADING",
  };
};

// --------------_Functions----------------------
export const fetchWeather = (): ThunkAction<void, {}, {}, AnyAction> => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(setLoading());

    axios
      .get("")
      .then((response) => {
        console.log(response);
        let payload: [] = [];
        dispatch(getWeatherData(payload));
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {}
};
