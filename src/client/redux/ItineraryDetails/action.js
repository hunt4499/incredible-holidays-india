import some from "lodash/some";

import {
  FETCH_ALL_ITINERARY_LIST,
  FETCH_ALL_ITINERARY_LIST_SUCCESS,
  FETCH_ALL_ITINERARY_LIST_FAILED,
  FETCH_ITINENARY_DETAILS,
  FETCH_ITINENARY_DETAILS_SUCCESS,
  FETCH_ITINENARY_DETAILS_FAILED,
  SUBMIT_ITINERARY_REVIEW,
  SUBMIT_ITINERARY_REVIEW_SUCCESS,
  SUBMIT_ITINERARY_REVIEW_FAILED,
  SEARCH_ITINERARY,
  SEARCH_ITINERARY_SUCCESS,
  SEARCH_ITINERARY_FAILED,
  SEARCH_ITINERARY_FILTERS_RESULTS_SUCCESS,
  SEARCH_ITINERARY_FILTERS_RESULTS_FAILED
} from "./actionType";

const _ = { some };

function fetchingItinenaryList() {
  return {
    type: FETCH_ALL_ITINERARY_LIST
  };
}

function fetchingItinenaryListSuccess(payload) {
  return {
    type: FETCH_ALL_ITINERARY_LIST_SUCCESS,
    payload
  };
}

function fetchingItinenaryListFailed(payload) {
  return {
    type: FETCH_ALL_ITINERARY_LIST_FAILED,
    payload
  };
}

function fetchingItinenaryDetails() {
  return {
    type: FETCH_ITINENARY_DETAILS
  };
}

function fetchingItinenaryDetailsSuccess(payload) {
  return {
    type: FETCH_ITINENARY_DETAILS_SUCCESS,
    payload
  };
}

function fetchingItinenaryDetailsFailed(payload) {
  return {
    type: FETCH_ITINENARY_DETAILS_FAILED,
    payload
  };
}

function submittingitineraryReview() {
  return {
    type: SUBMIT_ITINERARY_REVIEW
  };
}

function submittingitineraryReviewSuccess(payload) {
  return {
    type: SUBMIT_ITINERARY_REVIEW_SUCCESS,
    payload
  };
}

function submittingitineraryReviewFailed(payload) {
  return {
    type: SUBMIT_ITINERARY_REVIEW_FAILED,
    payload
  };
}
function searchingItinerary() {
  return {
    type: SEARCH_ITINERARY
  };
}

function searchingItinerarySuccess(payload) {
  return {
    type: SEARCH_ITINERARY_SUCCESS,
    payload
  };
}

function searchingItineraryFailed(payload) {
  return {
    type: SEARCH_ITINERARY_FAILED,
    payload
  };
}

function searchItineraryFilterResultsSuccess(payload) {
  return {
    type: SEARCH_ITINERARY_FILTERS_RESULTS_SUCCESS,
    payload
  };
}
function searchItineraryFilterResultsFailed(payload) {
  return {
    type: SEARCH_ITINERARY_FILTERS_RESULTS_FAILED,
    payload
  };
}

export const fetchItinenaryList = payload => async (
  dispatch,
  getState,
  api
) => {
  dispatch(fetchingItinenaryList());

  let currentList = await getState().ItineraryDetails.itineraryList;
  let loadMore = true;
  try {
    const response = await api.get(`/getItinerary?pageNo=${payload}`);
    if (response.data.success === true) {
      let newList = [...currentList, ...response.data.data];
      if (response.data.data.length === 6) {
        dispatch(fetchingItinenaryListSuccess({ newList, loadMore }));
      } else {
        dispatch(fetchingItinenaryListSuccess({ newList, loadMore: false }));
      }
    } else {
      dispatch(fetchingItinenaryListFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(fetchingItinenaryListFailed(data));
  }
};

export const fetchItinenaryDetails = payload => async (
  dispatch,
  getState,
  api
) => {
  dispatch(fetchingItinenaryDetails());
  try {
    const response = await api.get(`/getItineraryDetails`, {
      headers: { slug: payload }
    });
    if (response.data.success === true) {
      dispatch(fetchingItinenaryDetailsSuccess(response.data.data));
    } else {
      dispatch(fetchingItinenaryDetailsFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(fetchingItinenaryDetailsFailed(data));
  }
};

export const submitItineraryReview = payload => async (
  dispatch,
  getState,
  api
) => {
  dispatch(submittingitineraryReview());
  try {
    const response = await api.post(`/submitReview`, payload);
    if (response.data.success === true) {
      dispatch(submittingitineraryReviewSuccess(response.data));
    } else {
      dispatch(submittingitineraryReviewFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(submittingitineraryReviewFailed(data));
  }
};

export const searchItinerary = data => (dispatch, getState, api) => {
  dispatch(searchingItinerary());
  api
    .post(`/search-itinerary`, data)
    .then(res => {
      if (res.data.success === true) {
        dispatch(searchingItinerarySuccess(res.data.data));
      } else {
        dispatch(searchingItineraryFailed(res.data));
      }
    })
    .catch(err => {
      dispatch(searchingItineraryFailed(err));
    });
};

export const searchItineraryFilters = data => async (
  dispatch,
  getState,
  api
) => {
  let Filtered = [];
  const searchResults = getState().ItineraryDetails.backupSearchResults;
  Filtered = searchResults;
  if (data.durationEnabled === true) {
    Filtered = await searchResults.filter(
      location => location.itineraryDays.length <= data.duration
    );
  }
  if (data.priceEnabled === true) {
    Filtered = await searchResults.filter(
      location => parseInt(location.price) <= data.value
    );
  }
  if (data.budgetEnabled === true) {
    let newArr = [];
    await Filtered.map(item => {
      let test = item.budgetCategory.some(v => data.budget.includes(v));
      if (test) {
        newArr.push(item);
      }
    });
    Filtered = [...newArr];
  }

  if (Filtered.length != 0) {
    dispatch(searchItineraryFilterResultsSuccess(Filtered));
  } else {
    dispatch(searchItineraryFilterResultsFailed(null));
  }
};
