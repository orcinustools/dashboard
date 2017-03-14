import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import stacksReducer from "./stacksReducer";
import servicesReducer from "./servicesReducer";
import containersReducer from "./containersReducer";
import volumesReducer from "./volumesReducer";
import overviewReducer from "./overviewReducer";

export default combineReducers({
	overviewState: overviewReducer,
	imagesState: imagesReducer,
	stacksState: stacksReducer,
	servicesState: servicesReducer,
	containerState: containersReducer,
	volumeState: volumesReducer,
})
