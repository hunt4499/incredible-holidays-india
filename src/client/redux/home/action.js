import {
  FETCH_HOME_PAGE_DATA,
  FETCH_HOME_PAGE_DATA_SUCCESS,
  FETCH_HOME_PAGE_DATA_FAILED
} from "./actionType";

function fetchingHomePageData() {
  return {
    type: FETCH_HOME_PAGE_DATA
  };
}

function fetchingHomePageDataSuccess(payload) {
  return {
    type: FETCH_HOME_PAGE_DATA_SUCCESS,
    payload
  };
}

function fetchingHomePageDataFailed(payload) {
  return {
    type: FETCH_HOME_PAGE_DATA_FAILED,
    payload
  };
}

export const fetchHomePageData = () => async (dispatch, getState, api) => {
  dispatch(fetchingHomePageData());
  try {
    const response = await api.get(`/homePageData`);
    if (response.data.success === true) {
      dispatch(fetchingHomePageDataSuccess(response.data.data));
    } else {
      dispatch(fetchingHomePageDataFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(fetchingHomePageDataFailed(data));
  }
};
