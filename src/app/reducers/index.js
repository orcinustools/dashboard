import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import stacksReducer from "./stacksReducer";
import servicesReducer from "./servicesReducer";

export default combineReducers({
	imagesState: imagesReducer,
	stacksState: stacksReducer,
	serviceState: servicesReducer,
})
