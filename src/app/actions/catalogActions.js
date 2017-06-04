/**
 * 
 * Action creator untuk menngambil data image dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { FETCH_IMAGES } from "./actionTypes"
import { OMURA_HOST, OMURA_PORT } from "../config/environtment"

export function fetchImages() {
	return {
		type: FETCH_IMAGES,
		// payload: axios.get(`http://${OMURA_HOST}:${OMURA_PORT}/`)
		payload: axios.get(`/api/v5/application/wordpress`)
	}
}

export function removeItemFromBoard(index) {
	return {
		type: "REMOVE_ITEM_FROM_BOARD",
		index
	}
}

/**
 * Async Action Creator for adding item to board
 */
export function addItemToBoardAPI(name, category) {
	const request = axios({
		method: 'get',
		url: `http://${ OMURA_HOST }:${ OMURA_PORT }/${ category }/${ name }`
	})

	return {
		type: "ADD_ITEM_TO_BOARD",
		payload: request
	}
}

export function setItemToBoard(data) {
	return {
		type: "SET_ITEM_TO_BOARD",
		data
	}
}

export function addItemToBoard(name, category) {
	return (dispatch) => {
		dispatch(addItemToBoardAPI(name, category)).then((res) => {
			dispatch(setItemToBoard(res.value.data))
		})
	}
}