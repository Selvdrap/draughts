import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const persistedToken = localStorage.getItem("user")
  ? { user: JSON.parse(localStorage.getItem("user")) }
  : {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  persistedToken,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
