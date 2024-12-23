import { combineReducers } from "redux";
import GlobalReducer from "./Global/reducer";
import HomePageReducer from "./home/reducer";
import ItineraryDetailsReducer from "./ItineraryDetails/reducer";
import BlogsReducer from "./Blogs/reducer";

export default combineReducers({
  Global: GlobalReducer,
  Home: HomePageReducer,
  ItineraryDetails: ItineraryDetailsReducer,
  Blogs: BlogsReducer
});
