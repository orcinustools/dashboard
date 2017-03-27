import axios from "axios";

/**
 * 
 * Action creator untuk menngambil data stack dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

let apiUrl = process.env.API_URL || "localhost"

console.log(apiUrl)

export function fetchStacks() {
	return {
		type: "FETCH_STACKS",
		payload: axios.get(`http://${apiUrl}:3000/stacks`)
	}
}

export function fetchStack() {
	return {
		type: "FETCH_STACK",
		payload: axios.get(`http://${apiUrl}:3000/wordpress-app`)
	}
}