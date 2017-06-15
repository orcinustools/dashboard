import axios from "axios"

import { getToken } from '../utils/AuthService'

const token = getToken()

const ROOT_URL = location.href.indexOf('localhost') > 0 ? `http://localhost:4000/apis` : '/apis'

export function getInfo() {
	const request = axios({
		method: 'get',
		url: `${ ROOT_URL }/info`,
		headers: {
			// 'x-access-token': token
		}
	})

	return {
		type: 'GET_INFO',
		payload: request
	}
}
