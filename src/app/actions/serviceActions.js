import axios from "axios";

/**
 * 
 * Action creator untuk menngambil data services dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

// fetch list of services
export function fetchServices() {
	return {
		type: "FETCH_SERVICES",
		payload: axios.get("http://localhost:3000/services")
	}
}

// fetch single service
export function fetchService() {
	return {
		type: "FETCH_SERVICE",
		payload: axios.get("http://localhost:3000/wp-app")
	}
}