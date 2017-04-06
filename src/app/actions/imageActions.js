/**
 * 
 * Action creator untuk menngambil data image dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { FETCH_IMAGES } from "./actionTypes"
import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

export function fetchImages() {
	return {
		type: FETCH_IMAGES,
		payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/images`)
	}
}