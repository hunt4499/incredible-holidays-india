import {
  SUBMIT_QUERY_FORM,
  SUBMIT_QUERY_FORM_SUCCESS,
  SUBMIT_QUERY_FORM_FAILED,
  FETCH_FOOTER_DATA,
  FETCH_FOOTER_DATA_SUCCESS,
  FETCH_FOOTER_DATA_FAILED,
  FETCH_CONTACT_DETAILS,
  FETCH_CONTACT_DETAILS_SUCCESS,
  FETCH_CONTACT_DETAILS_FAILED,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILED
} from "./actionType";

function submittingQueryForm() {
  return {
    type: SUBMIT_QUERY_FORM
  };
}

function submittingQueryFormSuccess(payload) {
  return {
    type: SUBMIT_QUERY_FORM_SUCCESS,
    payload
  };
}

function submittingQueryFormFailed(payload) {
  return {
    type: SUBMIT_QUERY_FORM_FAILED,
    payload
  };
}

function fetchingFooterData() {
  return {
    type: FETCH_FOOTER_DATA
  };
}

function fetchingFooterDataSuccess(payload) {
  return {
    type: FETCH_FOOTER_DATA_SUCCESS,
    payload
  };
}

function fetchingFooterDataFailed(payload) {
  return {
    type: FETCH_FOOTER_DATA_FAILED,
    payload
  };
}

function fetchingContactDetails() {
  return {
    type: FETCH_CONTACT_DETAILS
  };
}

function fetchingContactDetailsSuccess(payload) {
  return {
    type: FETCH_CONTACT_DETAILS_SUCCESS,
    payload
  };
}

function fetchingContactDetailsFailed(payload) {
  return {
    type: FETCH_CONTACT_DETAILS_FAILED,
    payload
  };
}

function fetchingCategories() {
  return {
    type: FETCH_CATEGORIES
  };
}

function fetchingCategoriesSuccess(payload) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload
  };
}

function fetchingCategoriesFailed(payload) {
  return {
    type: FETCH_CATEGORIES_FAILED,
    payload
  };
}


function fetchingLocations() {
  return {
    type: FETCH_LOCATIONS
  };
}

function fetchingLocationsSuccess(payload) {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    payload
  };
}

function fetchingLocationsFailed(payload) {
  return {
    type: FETCH_LOCATIONS_FAILED,
    payload
  };
}


export const submitQueryForm = data => async (dispatch, getState, api) => {
  dispatch(submittingQueryForm());
  api
    .post(`/addEnquiry`, data)
    .then(res => {
      if (res.data.success === true) {
        dispatch(submittingQueryFormSuccess(res.data));
      } else {
        dispatch(submittingQueryFormFailed(res.data));
      }
    })
    .catch(err => {
      const data = {
        success: false,
        message: "Something Went Wrong"
      };
      dispatch(submittingQueryFormFailed(data));
    });
};

export const fetchFooterData = () => async (dispatch, getState, api) => {
  dispatch(fetchingFooterData());
  api
    .get(`/getFooterData`)
    .then(res => {
      if (res.data.success === true) {
        dispatch(fetchingFooterDataSuccess(res.data.data));
      } else {
        dispatch(fetchingFooterDataFailed(res.data));
      }
    })
    .catch(err => {
      const data = {
        success: false,
        message: "Something Went Wrong"
      };
      dispatch(fetchingFooterDataFailed(data));
    });
};

export const fetchContactDetails = () => async (dispatch, getState, api) => {
  dispatch(fetchingContactDetails());
  try {
    const response = await api.get(`/fetchConfig`);
    if (response.data.success === true) {
      dispatch(fetchingContactDetailsSuccess(response.data.data));
    } else {
      dispatch(fetchingContactDetailsFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(fetchingContactDetailsFailed(data));
  }
};

export const fetchCategories = () => async (dispatch, getState, api) => {
  dispatch(fetchingCategories());
  try {
    const response = await api.get(`/getCategoryList`);
    if (response.data.success === true) {
      dispatch(fetchingCategoriesSuccess(response.data.data));
    } else {
      dispatch(fetchingCategoriesFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(fetchingContactDetailsFailed(data));
  }
};

export const fetchLocations = () => async (dispatch, getState, api) => {
  dispatch(fetchingLocations());
  try {
    const response = await api.get(`/getCategoryList`);
    if (response.data.success === true) {
      console.log("data", response.data)
      dispatch(fetchingLocationsSuccess(response.data.data));
    } else {
      dispatch(fetchingLocationsFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(fetchingContactDetailsFailed(data));
  }
};

