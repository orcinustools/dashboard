/**
 * 
 * Action creator untuk menngambil data stack dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { FETCH_STACKS, FETCH_STACK } from "./actionTypes"
import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

export function fetchStacks() {
	return {
		type: "FETCH_STACKS",
		payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/stack`)
	}
}

export function fetchStack() {
	return {
		type: "FETCH_STACK",
		// payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/wordpress-app`)
		payload: axios.get(`/wordpress-app`)
	}
}