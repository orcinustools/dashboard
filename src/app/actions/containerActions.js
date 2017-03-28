/**
 * 
 * Action creator untuk menngambil data container dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios";
let apiUrl = process.env.API_URL || "localhost"

// fetch list of containers
export function fetchContainers() {
	return {
		type: "FETCH_CONTAINERS",
		payload: axios.get(`http://${apiUrl}:3000/containers`)
	}
}

// fetch single container
// TODO := tambah id sebagai parameter
export function fetchContainer() {
	return {
		type: "FETCH_CONTAINER",
		payload: axios.get(`http://${apiUrl}:3000/wp-app-1`)
	}
}
