/**
 * 
 * Action creator untuk menngambil data volume dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import { FETCH_VOLUMES, FETCH_VOLUME } from "./actionTypes"
import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

import { getToken } from '../utils/AuthService'

const token = getToken()

// fetch list of volumes
export function fetchVolumes() {
	return {
		type: FETCH_VOLUMES,
		payload: axios({
			method: 'get',
			url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/volume`,
			headers: {
				'x-access-token': token,
				'Content-Type': 'application/json'
			}
		})
	}
}

// fetch single volume
export function fetchVolume() {
	return {
		type: FETCH_VOLUME,
		// payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/wp-vol`)
		payload: axios.get(`/wp-vol`)
	}
}