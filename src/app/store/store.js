import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware"
import axios from "axios";

// import reducer from "../reducers";
import imageReducer from '../reducers';

const middleware = applyMiddleware(promise(), logger(), thunk);

const store = createStore(imageReducer, middleware);

store.subscribe(() => {
	console.log("State di redux store sekarang: ", store.getState());
});

export default store;
