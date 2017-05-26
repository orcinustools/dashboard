import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"

import imagesReducer from "./imagesReducer";
import stacksReducer from "./stacksReducer";
import servicesReducer from "./servicesReducer";
import containersReducer from "./containersReducer";
import volumesReducer from "./volumesReducer";
import overviewReducer from "./overviewReducer";

export default combineReducers({
	form: formReducer,
	overviewState: overviewReducer,
	imagesState: imagesReducer,
	stacksState: stacksReducer,
	servicesState: servicesReducer,
	containerState: containersReducer,
	volumeState: volumesReducer,
})
