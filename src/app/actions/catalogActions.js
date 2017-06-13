/**
 * 
 * Action creator untuk menngambil data image dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { FETCH_IMAGES } from "./actionTypes"
import { OMURA_HOST, OMURA_PORT } from "../config/environtment"
import _ from "lodash"

import { setNewService } from "./serviceActions"

export function fetchCatalog() {
	return {
		type: "FETCH_CATALOG",
		payload: axios.get(`http://${OMURA_HOST}:${OMURA_PORT}/apis`)
	}
}

export function removeItemFromBoard(name) {
	return {
		type: "REMOVE_ITEM_FROM_BOARD",
		name
	}
}

/**
 * Async Action Creator for adding item to board
 */
export function fetchCatalogItem(name, category) {
	const request = axios({
		method: 'get',
		url: `http://${ OMURA_HOST }:${ OMURA_PORT }/apis/${ category }/${ name }`
	})

	return {
		type: "FETCH_CATALOG_ITEM",
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
		dispatch(fetchCatalogItem(name, category)).then((res) => {

			const orcinus = {}
			const board = _.map(res.value.data.stack)

	    board.forEach(function(item) {
	      orcinus[Object.keys(item.service)[0]] = item.service[Object.keys(item.service)[0]]
	    })
	    
			dispatch(setItemToBoard(board))
	    dispatch(setNewService(orcinus))

		})
	}
}

export function setOptionSelect(props) {
	return {
		type: "SET_OPTIONS_SELECT",
		data: props
	}
}