import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware"
import axios from "axios";

// import reducer from "../reducers";
import reducers from '../reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducers, composeWithDevTools(middleware));

// store.subscribe(() => {
// 	console.log("State di redux store sekarang: ", store.getState());
// });

export default store;
