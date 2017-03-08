import axios from "axios";

/**
 * 
 * Action creator untuk menngambil data image dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */
export function fetchImages() {
	return {
		type: "FETCH_IMAGES",
		payload: axios.get("http://localhost:3000/images")
	}
}