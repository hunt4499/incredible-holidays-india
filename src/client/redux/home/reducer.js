import {
  FETCH_HOME_PAGE_DATA,
  FETCH_HOME_PAGE_DATA_SUCCESS,
  FETCH_HOME_PAGE_DATA_FAILED
} from "./actionType";

const initialState = {
  loadingHomePageData: true,
  popularDestinations: [],
  bestValueTrips: [],
  popularTrips: [],
  counts: null,
  errorLoadingHomePageData: false
};

export default function HomePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOME_PAGE_DATA:
      return {
        ...state,
        errorLoadingHomePageData: false,
        loadingHomePageData: true
      };
    case FETCH_HOME_PAGE_DATA_SUCCESS:
      return {
        ...state,
        errorLoadingHomePageData: false,
        loadingHomePageData: false,
        popularDestinations: action.payload.popularDestinations,
        bestValueTrips: action.payload.bestValueTrips,
        popularTrips: action.payload.popularTrips,
        counts: action.payload.counts
      };
    case FETCH_HOME_PAGE_DATA_FAILED:
      return {
        ...state,
        errorLoadingHomePageData: true,
        loadingHomePageData: false
      };
    default:
      return state;
  }
}
