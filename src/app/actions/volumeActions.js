import axios from "axios";

/**
 * 
 * Action creator untuk menngambil data volume dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */
export function fetchVolumes() {
	return {
		type: "FETCH_VOLUMES",
		payload: axios.get("http://localhost:3000/volumes")
	}
}