/**
 * 
 * Action creator untuk menngambil data container dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { 
	FETCH_CONTAINERS, FETCH_CONTAINER,
	PAUSE_CONTAINER, UNPAUSE_CONTAINER
} from "./actionTypes"

import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

import { getToken } from '../utils/AuthService'

const token = getToken()

// fetch list of containers
export function fetchContainers() {
	return {
		type: FETCH_CONTAINERS,
		payload: axios({
			method: 'get',
			url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/container`,
			headers: { 
				'Content-Type': 'application/json',
				'x-access-token': token 
			}
		})
	}
}

// fetch single container
// TODO := tambah id sebagai parameter
export function fetchContainer(id) {

	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/container/inspect`,
		data: JSON.parse(`{ "id": "${id}" }`),
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': token
		}
	})

	return {
		type: FETCH_CONTAINER,
		payload: request
	}
}


/**
 * Pause Container On API and Redux State
 */
export function pauseContainerAPI(id) {
	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/container/pause`,
		data: JSON.parse(`{ "id": "${id}" }`),
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': token
		}
	})

	return {
		type: PAUSE_CONTAINER,
		payload: request
	}
}

export function setPauseContainer(id) {
	return {
		type: "SET_PAUSE_CONTAINER",
		payload: { status: 'paused', id: id}
	}
}

export function pauseContainer(id) {
	return (dispatch) => {
		dispatch(pauseContainerAPI(id)).then((res) => {
			dispatch(setPauseContainer(id))
		})
	}
}


/**
 * unPause Container On API and Redux State
 */
export function unPauseContainerAPI(id) {
	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/container/unpause`,
		data: JSON.parse(`{ "id" : "${id}"}`),
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': token
		}
	})

	return {
		type: UNPAUSE_CONTAINER,
		payload: request
	}
}

export function setUnPauseContainer(id) {
	return {
		type: "SET_UNPAUSE_CONTAINER",
		payload: { status: 'running', id: id }
	}
}

export function unPauseContainer(id) {
	return (dispatch) => {
		dispatch(unPauseContainerAPI(id)).then((res) => {
			dispatch(setUnPauseContainer(id))
		})
	}
}

export function clearContainerList() {
	return {
		type: "CLEAR_CONTAINERS_LIST"
	}
}

export function deleteContainerAPI(id) {
	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/container/delete`,
		data: JSON.parse(`{ "id": "${id}" }`),
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': token
		}
	})

	return {
		type: "DELETE_CONTAINER",
		payload: request
	}

}

export function setDeleteContainer(id) {
	return {
		type: "SET_DELETE_COTNAINER",
		id
	}
}

export function deleteContainer(id) {
	return (dispatch) => {
		dispatch(deleteContainerAPI(id)).then(() => {
			dispatch(setDeleteContainer(id))
		})
	}
}