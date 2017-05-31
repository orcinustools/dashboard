/**
 * 
 * Action creator untuk menngambil data services dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { 
	FETCH_SERVICES, FETCH_SERVICE, 
	DELETE_SERVICE, SET_DELETE_SERVICE,
	FETCH_TASK_BY_SERVICE_NAME, 
	CREATE_SERVICE
} from "./actionTypes"
import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

// fetch list of services
export function fetchServices() {
	return {
		type: FETCH_SERVICES,
    payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service`)
	}
}

// fetch single service
export function fetchService(id) {
	return {
		type: FETCH_SERVICE,
		payload: axios({
			method: 'post',
			url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service/inspect`,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: querystring.stringify({ id: id })
		})
	}
}

/**
 * Delete service on api
 * @param  {string} id [description]
 * @return {Object}    [description]
 */
export function deleteServiceAPI(id) {
	const request = axios({
		method: 'post',
		data: JSON.parse(`{ "id" : "${id}" }`),
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service/delete`,
		headers: {
			'Content-Type': 'application/json'
		}
	})

	return {
		type: DELETE_SERVICE,
		payload: request
	}
}

/**
 * Set Delete Service in Redux State
 * @param {string} id Id of the deleted service
 */
export function setDeleteService(id) {
	return {
		type: SET_DELETE_SERVICE,
		payload: id
	}
}

/**
 * Function that is called by user to perform delete service
 * @param  {String} id Id of the deleted service
 */
export function deleteService(id) {
	return (dispatch) => {
		dispatch(deleteServiceAPI(id)).then((res) => {
			dispatch(setDeleteService(id))
		})
	}
}

export function fetchTasks(name) {
	const request = axios({
		method: 'post',
		data: JSON.parse(`{ "service": "${name}"}`),
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service/task`,
		headers: {
			'Content-Type': 'application/json'
		}
	})

	return {
		type: FETCH_TASK_BY_SERVICE_NAME,
		payload: request
	}
}

export function fetchTaskByService(serviceId) {
	return (dispatch) => {
		dispatch(fetchService(serviceId)).then((res) => {
			dispatch(fetchTasks(res.value.data.Spec.Name))
		})
	}
}

export function addCounter() {
	return {
		type: "ADD_COUNTER"
	}
}

