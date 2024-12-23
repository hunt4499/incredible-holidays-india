// Startup point for the client side application
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import Routes from "./Routes";
import reducers from "./redux/RootReducer";
import API from "./endpoints";
import config from "./config/config";

const axiosInstance = axios.create({
  baseURL: `${config.serverUrl}:${config.port}/node/api/web`
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance), logger)
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
