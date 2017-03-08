import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import stacksReducer from "./stacksReducer";
import servicesReducer from "./servicesReducer";
import containersReducer from "./containersReducer";
import volumesReducer from "./volumesReducer";

export default combineReducers({
	imagesState: imagesReducer,
	stacksState: stacksReducer,
	serviceState: servicesReducer,
	containerState: containersReducer,
	volumeState: volumesReducer,
})
