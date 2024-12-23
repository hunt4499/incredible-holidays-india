import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import config from "../client/config/config";
import reducers from "../client/redux/RootReducer";

export default req => {
  const axiosInstance = axios.create({
    baseURL: `${config.serverUrl}:${config.port}/node/api/web`
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
