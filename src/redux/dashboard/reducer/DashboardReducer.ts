import { IWeatherReducerState, IWeatherActions } from "../DashboardInterface";

const initialState: IWeatherReducerState = {
  isLoading: false,
  weather: [],
};

export const weatherReducer = (
  state = initialState,
  action: IWeatherActions
) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "UNSET_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "SET_WEATHER":
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};
