import {
  FETCH_ITINENARY_DETAILS,
  FETCH_ITINENARY_DETAILS_SUCCESS,
  FETCH_ALL_ITINERARY_LIST,
  FETCH_ALL_ITINERARY_LIST_SUCCESS,
  FETCH_ALL_ITINERARY_LIST_FAILED,
  SEARCH_ITINERARY,
  SEARCH_ITINERARY_SUCCESS,
  SEARCH_ITINERARY_FAILED,
  SUBMIT_ITINERARY_REVIEW,
  SUBMIT_ITINERARY_REVIEW_SUCCESS,
  SUBMIT_ITINERARY_REVIEW_FAILED,
  SEARCH_ITINERARY_FILTERS_RESULTS_SUCCESS,
  SEARCH_ITINERARY_FILTERS_RESULTS_FAILED
} from "./actionType";

const initialState = {
  loadingItineraryDetails: true,
  loadingItineraryList: true,
  itineraryReviewStatus: null,
  itineraryDetails: null,
  itineraryList: [],
  noMoreItineraries: false,
  searchResults: [],
  backupSearchResults: []
};

export default function ItineraryDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINENARY_DETAILS:
      return {
        ...state,
        loadingItineraryDetails: true,
        itineraryDetails: null
      };
    case FETCH_ITINENARY_DETAILS_SUCCESS:
      return {
        ...state,
        loadingItineraryDetails: false,
        itineraryDetails: action.payload
      };
    case FETCH_ALL_ITINERARY_LIST:
      return {
        ...state,
        loadingItineraryList: true
      };
    case FETCH_ALL_ITINERARY_LIST_SUCCESS:
      return {
        ...state,
        loadingItineraryList: false,
        itineraryList: action.payload.newList,
        noMoreItineraries: !action.payload.loadMore
      };
    case SEARCH_ITINERARY:
      return {
        ...state,
        loadingItineraryList: true
      };
    case SEARCH_ITINERARY_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        backupSearchResults: action.payload,
        loadingItineraryList: false
      };
    case SEARCH_ITINERARY_FAILED:
      return {
        ...state,
        searchResults: [],
        backupSearchResults: [],
        loadingItineraryList: false
      };
    case SUBMIT_ITINERARY_REVIEW:
      return {
        ...state,
        itineraryReviewStatus: null
      };
    case SUBMIT_ITINERARY_REVIEW_SUCCESS:
      return {
        ...state,
        itineraryReviewStatus: action.payload
      };
    case SUBMIT_ITINERARY_REVIEW_FAILED:
      return {
        ...state,
        itineraryReviewStatus: action.payload
      };
    case SEARCH_ITINERARY_FILTERS_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: action.payload
      };
    case SEARCH_ITINERARY_FILTERS_RESULTS_FAILED:
      return {
        ...state,
        searchResults: []
      };

    default:
      return state;
  }
}
