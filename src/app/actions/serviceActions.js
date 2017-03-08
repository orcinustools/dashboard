import axios from "axios";

/**
 * 
 * Action creator untuk menngambil data services dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */
export function fetchServices() {
	return {
		type: "FETCH_SERVICES",
		payload: axios.get("http://localhost:3000/services")
	}
}