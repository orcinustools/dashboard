import { browserHistory } from 'react-router'
import decode from 'jwt-decode'

const TOKEN_KEY = 'orcinus'

export function getToken() {
	return sessionStorage.getItem(TOKEN_KEY)
}

export function requireAuth(nextState, replace) {
	if(!isLoggedIn()){
		replace({
			pathname: '/signin'
		})
	}
}

export function isLoggedIn() {
	const token = getToken()
	console.log(!!token && !isTokenExpired(token))
	return !!token && !isTokenExpired(token)
}

export function logout() {
	clearToken()
	browserHistory.push('/signin')
}

export function clearToken() {
	sessionStorage.removeItem(TOKEN_KEY)
}

export function getTokenExpirationDate(encodedToken) {
	const token = decode(encodedToken)
	if(!token.exp) { return null }

	const date = new Date(0)
	date.setUTCSeconds(token.exp)
	return date
}

export function isTokenExpired(token) {
	const expirationDate = getTokenExpirationDate(token)
	return expirationDate < new Date()
}

