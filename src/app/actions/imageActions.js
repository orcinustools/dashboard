/**
 * 
 * Action creator untuk menngambil data image dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios";
import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

console.log(ORCINUS_API_HOST)

export function fetchImages() {
	return {
		type: "FETCH_IMAGES",
		payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/images`)
	}
}