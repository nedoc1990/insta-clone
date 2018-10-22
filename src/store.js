import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import histories from "./reducers/histories-reducer";
import feeds from "./reducers/feeds-reducer";

const rootReducer = combineReducers({
  histories,
  feeds
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
