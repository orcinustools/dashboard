import axios from "axios"

/**
 * 
 * Action creator untuk menngambil data image dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

let HOST = process.env.ORCINUS_HOST || "localhost"
let PORT 	 = process.env.ORCINUS_PORT || 4000

console.log(process.env)

export function fetchImages() {
	return {
		type: "FETCH_IMAGES",
		payload: axios.get(`http://${HOST}:${PORT}/images`)
	}
}