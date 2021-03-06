import axios from 'axios'

import { 
	ORCINUS_API_HOST, ORCINUS_API_PORT 
} from '../config/environtment'

import { 
	logout 
} from '../utils/AuthService'

const ROOT_URL = location.href.indexOf('localhost') > 0 ? `http://localhost:4000/apis` : '/apis'

/**
 * Signup User
 */
export function signUpUser(values) {
	const request = axios({
		method: 'post',
		url: `${ ROOT_URL }/auth/signup`,
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

export function signUpUserSuccess(user) {
	return {
		type: "SIGNUP_USER_SUCCESS",
		payload: user
	}
}

export function signUpUserFailure(error) {
	return {
		type: "SIGNUP_USER_FAILURE",
		payload: error
	}
}


/**
 * Signin User
 */
export function signInUser(values) {
  const request = axios({
  	method: 'post',
  	url: `${ ROOT_URL }/auth/signin`,
		data: values,
		headers: {
			'Content-Type': 'application/json',
		}
  })

  return {
    type: "SIGNIN_USER",
    payload: request
  };
}

export function signInUserSuccess(user) {
	return {
		type: "SIGNIN_USER_SUCCESS",
		payload: user
	}
}

export function signInUserFailure(error) {
	return {
		type: "SIGNIN_USER_FAILURE",
		payload: error
	}
}

export function meFromToken(tokenFromStorage) {
  //check if the token is still valid, if so, get me from the server
	
	const request = axios({
		method: 'post',
		url: `${ ROOT_URL }/auth/me`,
		data: {},
		headers: {
			'x-access-token': tokenFromStorage
		}
	})

	return {
		type: "ME_FROM_TOKEN",
		payload: request
	}
}

export function signOutUser() {
	logout()
	return {
		type: "SIGNOUT_USER"
	}
}