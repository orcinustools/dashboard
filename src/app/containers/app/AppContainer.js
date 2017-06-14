import React, { Component } from 'react'
import { connect } 					from 'react-redux'

import App from '../../components/app/App'
import { 
	meFromToken, 
	meFromTokenSuccess, 
	meFromTokenFailure,
	getInfo 
} from '../../actions/userActions'

const mapStateToProps = (state) => {
	return {
		user: state.userState.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadUserFromToken: () => {
			let token = sessionStorage.getItem('orcinus')
			if(!token || token === '') { return }

			dispatch(meFromToken(token))
		},
		loadInfoFromServer: () => {
			dispatch(getInfo())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)