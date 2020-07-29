export interface IGetWeather {
  type: "SET_WEATHER";
  payload: any;
}

export interface ISetLoading {
  type: "SET_LOADING";
}

export interface IUnsetLoading {
  type: "UNSET_LOADING";
}

export type IWeatherActions = IGetWeather | ISetLoading | IUnsetLoading;

// ---------------Reducer State----------------
export interface IWeatherReducerState {
  weather: any[];
  isLoading: boolean;
}
