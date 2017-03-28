import axios from "axios";

/**
 * 
 * Action creator untuk menngambil data volume dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

let apiUrl = process.env.API_URL || "localhost"

// fetch list of volumes
export function fetchVolumes() {
	return {
		type: "FETCH_VOLUMES",
		payload: axios.get(`http://${apiUrl}:3000/volumes`)
	}
}

// fetch single volume
export function fetchVolume() {
	return {
		type: "FETCH_VOLUME",
		payload: axios.get(`http://${apiUrl}:3000/wp-vol`)
	}
}