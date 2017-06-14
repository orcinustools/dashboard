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

import { getToken } from '../utils/AuthService'

const token = getToken()

// fetch list of services
export function fetchServices() {
	return {
		type: FETCH_SERVICES,
		// payload: axios.get()
    payload: axios({
    	method: 'post',
    	data:{},
    	url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service`,
    	headers: {
    		'Content-Type': 'application/json',
    		'x-access-token': token
    	}
    })
	}
}

// fetch single service
export function fetchService(id) {
	return {
		type: FETCH_SERVICE,
		payload: axios({
			method: 'post',
			url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service/inspect`,
			headers: {
    		'Content-Type': 'application/json',
    		'x-access-token': token
    	},
			data: JSON.parse(`{ "id": "${id}" }`)
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
  		'Content-Type': 'application/json',
  		'x-access-token': token
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
  		'Content-Type': 'application/json',
  		'x-access-token': token
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

export function replicasIncrement(serviceId) {
	return {
		type: "REPLICAS_INCREMENT",
		serviceId
	}
}

export function replicasDecrement(serviceId) {
	return {
		type: "REPLICAS_DECREMENT",
		serviceId
	}
}

/**
 * Send data for scaling service on api
 * @param  {Object} props Object Spec for scaling
 * @return {promise}       payload
 */
export function scaleServiceAPI(props) {
	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service/update`,
		data: props,
		headers: {
  		'Content-Type': 'application/json',
  		'x-access-token': token
  	}
	})

	return {
		type: "SCALING_SERVICE",
		payload: request
	}
}

export function setNewService(data) {
	return {
		type: "SET_NEW_SERVICE",
		data
	}
}

export function setStackName(data) {
	return {
		type: "SET_STACK_NAME",
		data
	}
}

export function checkStackServiceAPI(stack) {
	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/stack`,
		data: stack,
		headers: {
  		'Content-Type': 'application/json',
  		'x-access-token': token
  	}
	})

	return {
		type: "CHECK_STACK_SERVICE",
		payload: request
	}
}

export function createService(service) {
	console.log(service)
	const request = axios({
		method: 'post',
		data: service,
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service/create`,
		headers: {
  		'Content-Type': 'application/json',
  		'x-access-token': token
  	}
	})

	return {
		type: "CREATE_SERVICE",
		payload: request
	}
}

export function removeServiceItemFromNewService(index) {
	return {
		type: "REMOVE_SERVICE_ITEM_FROM_NEW_SERVICE",
		index
	}
}