/**
 * 
 * Action creator untuk menngambil data container dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { FETCH_CONTAINERS, FETCH_CONTAINER } from "./actionTypes"
import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

// fetch list of containers
export function fetchContainers() {
	return {
		type: FETCH_CONTAINERS,
		payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/task`)
	}
}

// fetch single container
// TODO := tambah id sebagai parameter
export function fetchContainer(id) {
	return {
		type: FETCH_CONTAINER,
		// payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/tasks/${id}`)
		payload: axios.get(`/tasks/${id}`)
	}
}
