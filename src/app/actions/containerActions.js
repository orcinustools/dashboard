import axios from "axios";

/**
 * 
 * Action creator untuk menngambil data container dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */
export function fetchContainers() {
	return {
		type: "FETCH_CONTAINERS",
		payload: axios.get("http://localhost:3000/containers")
	}
}