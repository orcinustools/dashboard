import axios from 'axios'

import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

export function signUpUser(values) {
	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/auth/signup`,
		data: values,
		headers: {
			'Content-Type': 'application/json'
		}
	})

  return {
    type: 'SIGNUP_USER',
    payload: request
  };
}

export function signInUser(values) {
  const request = axios({
  	method: 'post',
  	url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/auth/signin`,
		data: values,
		headers: {
			'Content-Type': 'application/json'
		}
  })

  return {
    type: "SIGNIN_USER",
    payload: request
  };
}