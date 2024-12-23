import {
  FETCH_FOOTER_DATA_SUCCESS,
  FETCH_FOOTER_DATA_FAILED,
  FETCH_CONTACT_DETAILS_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  SUBMIT_QUERY_FORM,
  SUBMIT_QUERY_FORM_SUCCESS,
  SUBMIT_QUERY_FORM_FAILED,
  FETCH_LOCATIONS_SUCCESS
} from "./actionType";

const initialState = {
  footerCategories: [],
  contactDetails: null,
  searchCategories: [],
  querySubmitStatus: null,
  searchLocations: []
};

function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FOOTER_DATA_SUCCESS:
      return {
        ...state,
        footerCategories: action.payload
      };
    case FETCH_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,
        contactDetails: action.payload
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        searchCategories: action.payload
      };
    case SUBMIT_QUERY_FORM:
      return {
        ...state,
        querySubmitStatus: null
      };
    case SUBMIT_QUERY_FORM_SUCCESS:
      return {
        ...state,
        querySubmitStatus: action.payload
      };
    case SUBMIT_QUERY_FORM_FAILED:
      return {
        ...state,
        querySubmitStatus: action.payload
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        searchLocations: action.payload
      };
    
    default:
      return state;
  }
}

export default GlobalReducer;
