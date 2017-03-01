import { applyMiddleware, createStore } from "redux";

const initialState = {
	userName: "Miral",
	images: [{name: "mysql"}],
	stacks: [{name: "wordpress-app"}],
	containers: [],
	services: [],
}


const reducer = (state, action) => {
	return state;
}

export default createStore(reducer, initialState);
