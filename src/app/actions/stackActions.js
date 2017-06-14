/**
 * 
 * Action creator untuk menngambil data stack dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { browserHistory } from "react-router"

import { getToken } from '../utils/AuthService'

const token = getToken()

import { 
	FETCH_STACKS,	FETCH_STACK, CREATE_STACK, RESET_STACK_FIELDS
} from "./actionTypes"

const ROOT_URL = location.href.indexOf('localhost') > 0 ? `http://localhost:4000/apis` : '/apis'

export function fetchStacks() {
	return {
		type: FETCH_STACKS,
		payload: axios({
			method: 'post',
			url: `${ ROOT_URL }/stack`,
			headers: {
				'x-access-token': token,
				'Content-Type': 'application/json'
			}
		})
	}
}

// Async Action Creator Inspect Stack
export function fetchStack(id) {
	const request = axios({
		method: 'post',
		url: `${ ROOT_URL }/stack/inspect`,
		data: JSON.parse(`{ "id" : "${id}"}`),
		headers: {
				'x-access-token': token,
				'Content-Type': 'application/json'
			}
	})

	return {
		type: FETCH_STACK,
		payload: request
	}
}

export function resetStackFields() {
	return {
		type: RESET_STACK_FIELDS
	}
}

export function deleteStackAPI(id) {
	const request = axios({
		method: 'post',
		url: `${ ROOT_URL }/stack/delete`,
		data: JSON.parse(`{ "id": "${id}" }`),
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': token
		}
	})

	return {
		type: "DELETE_STACK",
		payload: request
	}
}

export function setDeleteStack(id) {
	return {
		type: "SET_DELETE_STACK",
		id
	}
}

export function deleteStack(id) {
	return (dispatch) => {
		dispatch(deleteStackAPI(id)).then(() => {
			dispatch(setDeleteStack(id))
		})
	}
}

export function fetchServices(stackId) {
	const request = axios({
		method: 'post',
		url: `${ ROOT_URL }/stack/list-services`,
		data: JSON.parse(`{ "id": "${stackId}"}`),
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': token
		}
	})

	return {
		type: "FETCH_SERVICE_BY_STACK_ID",
		payload: request
	}
}

export function checkStackAPI(stack) {
	const request = axios({
		method: 'post',
		url: `${ ROOT_URL }/stack`,
		data: stack,
		headers: {
			'Content-Type' : 'application/json',
			'x-access-token': token
		}
	})

	return {
		type: "CHECK_STACK",
		payload: request
	}
}

export function createStack(stackName) {
	const request = axios({
		method: 'post',
		data: JSON.parse(`{ "name" : "${stackName}" }`),
		url: `${ ROOT_URL }/stack/create`,
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': token
		}
	});

	return {
		type: CREATE_STACK,
		payload: request
	}	
}

export function checkStack(stack) {
	return dispatch => {
		dispatch(checkStackAPI(stack)).then((res) => {

			if(res.action.payload.data.created === false){
				dispatch(createStack(stack)).then(() => {
					browserHistory.push('/projects')
				})
			} else {
				browserHistory.push(`/projects/${stack.name}`)
			}
			
		})
	}
}
