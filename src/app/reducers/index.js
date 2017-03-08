import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import stacksReducer from "./stacksReducer";

export default combineReducers({
	imagesState: imagesReducer,
	stacksState: stacksReducer,
})
