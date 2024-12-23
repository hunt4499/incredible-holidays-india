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

const initialState = {
  loadingBlogList: true,
  loadingBlogDetails: true,
  blogsList: [],
  blogDetails: null,
  postReviewStatus: null,
  noMoreBlogs: false
};

export default function BlogsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOGS_LIST:
      return {
        ...state,
        loadingBlogList: true
      };
    case FETCH_BLOGS_LIST_FAILED:
      return {
        ...state,
        loadingBlogList: false
      };
    case FETCH_BLOGS_LIST_SUCCESS:
      return {
        ...state,
        blogsList: action.payload.newList,
        noMoreBlogs: !action.payload.loadMore,
        loadingBlogList: false
      };
    case FETCH_BLOG_DETAILS:
      return {
        ...state,
        loadingBlogDetails: true
      };
    case FETCH_BLOG_DETAILS_FAILED:
      return {
        ...state,
        loadingBlogDetails: false
      };
    case FETCH_BLOG_DETAILS_SUCCESS:
      return {
        ...state,
        blogDetails: action.payload,
        loadingBlogDetails: false
      };
    case SUBMIT_BLOG_REVIEW:
      return {
        ...state,
        postReviewStatus: null
      };
    case SUBMIT_BLOG_REVIEW_SUCCESS:
      return {
        ...state,
        postReviewStatus: action.payload
      };
    case SUBMIT_BLOG_REVIEW_FAILED:
      return {
        ...state,
        postReviewStatus: action.payload
      };
    default:
      return state;
  }
}
