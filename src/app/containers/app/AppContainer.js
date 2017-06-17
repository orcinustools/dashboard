import React, { Component } from 'react'
import { connect } 					from 'react-redux'

import App from '../../components/app/App'

import { 
	meFromToken, 
	meFromTokenSuccess, 
	meFromTokenFailure,
} from '../../actions/userActions'
import { getInfo } from '../../actions/appActions'

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,

		notifications: state.notifications
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