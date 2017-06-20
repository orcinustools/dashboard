import React 								from 'react'
import { connect } 					from 'react-redux'
import { SubmissionError } from 'redux-form'
import Notifications 				from 'react-notification-system-redux'
import { notificationOpts } from '../../utils/NotificationUtils'

import Signup from '../../components/signup/Signup'

import { signUpUser } from '../../actions/userActions'

const mapStateToProps = (state) => {
	return {
		loading: state.userState.loading,
		notifications: state.notifications
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signUpUser: (values) => {
			return dispatch(signUpUser(values))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)