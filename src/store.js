import { applyMiddleware, createStore, compose } from "redux";
import promiseMiddleware from "redux-promise";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger({
  collapsed: true,
});

const middleware = [promiseMiddleware, thunk];
let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
  composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
}

export const store = createStore(
  composeEnhancers(applyMiddleware(...middleware))
);
