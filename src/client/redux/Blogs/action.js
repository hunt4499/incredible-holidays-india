import {
  FETCH_BLOGS_LIST,
  FETCH_BLOGS_LIST_SUCCESS,
  FETCH_BLOGS_LIST_FAILED,
  FETCH_BLOG_DETAILS,
  FETCH_BLOG_DETAILS_SUCCESS,
  FETCH_BLOG_DETAILS_FAILED,
  SUBMIT_BLOG_REVIEW,
  SUBMIT_BLOG_REVIEW_SUCCESS,
  SUBMIT_BLOG_REVIEW_FAILED
} from "./actionType";

function fetchingBlogsList() {
  return {
    type: FETCH_BLOGS_LIST
  };
}

function fetchingBlogsListSuccess(payload) {
  return {
    type: FETCH_BLOGS_LIST_SUCCESS,
    payload
  };
}

function fetchingBlogsListFailed(payload) {
  return {
    type: FETCH_BLOGS_LIST_FAILED,
    payload
  };
}

function fetchingBlogDetails() {
  return {
    type: FETCH_BLOG_DETAILS
  };
}

function fetchingBlogDetailsSuccess(payload) {
  return {
    type: FETCH_BLOG_DETAILS_SUCCESS,
    payload
  };
}

function fetchingBlogDetailsFailed(payload) {
  return {
    type: FETCH_BLOG_DETAILS_FAILED,
    payload
  };
}

function submittingBlogReview() {
  return {
    type: SUBMIT_BLOG_REVIEW
  };
}

function submittingBlogReviewSuccess(payload) {
  return {
    type: SUBMIT_BLOG_REVIEW_SUCCESS,
    payload
  };
}

function submittingBlogReviewFailed(payload) {
  return {
    type: SUBMIT_BLOG_REVIEW_FAILED,
    payload
  };
}

export const fetchBlogsList = pageNo => async (dispatch, getState, api) => {
  dispatch(fetchingBlogsList());
  let currentList = await getState().Blogs.blogsList;
  let loadMore = true;
  try {
    const response = await api.get(`/getBlogsList?pageNo=${pageNo}`);
    if (response.data.success === true) {
      let newList = [...currentList, ...response.data.data];
      if (response.data.data.length === 4) {
        dispatch(fetchingBlogsListSuccess({ newList, loadMore }));
      } else {
        dispatch(fetchingBlogsListSuccess({ newList, loadMore: false }));
      }
    } else {
      dispatch(fetchingBlogsListFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(fetchingBlogsListFailed(data));
  }
};

export const fetchBlogDetails = payload => async (dispatch, getState, api) => {
  dispatch(fetchingBlogDetails());
  try {
    const response = await api.get(`/getBlogDetails`, {
      headers: { slug: payload }
    });
    if (response.data.success === true) {
      dispatch(fetchingBlogDetailsSuccess(response.data.data));
    } else {
      dispatch(fetchingBlogDetailsFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(fetchingBlogDetailsFailed(data));
  }
};

export const submitIBlogReview = payload => async (dispatch, getState, api) => {
  dispatch(submittingBlogReview());
  try {
    const response = await api.post(`/submitBlogReview`, payload);
    if (response.data.success === true) {
      dispatch(submittingBlogReviewSuccess(response.data));
    } else {
      dispatch(submittingBlogReviewFailed(response.data));
    }
  } catch (err) {
    const data = {
      success: false,
      message: "Something Went Wrong"
    };
    dispatch(submittingBlogReviewFailed(data));
  }
};
