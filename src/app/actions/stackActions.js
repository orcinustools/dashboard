import axios from "axios";

/**
 * 
 * Action creator untuk menngambil data stack dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */
export function fetchStack() {
	return {
		type: "FETCH_STACKS",
		payload: axios.get("http://localhost:3000/stacks")
	}
}