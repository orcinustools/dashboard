import React 									from 'react'
import { connect } 						from 'react-redux'
import { browserHistory } 		from 'react-router'
import Notifications          from 'react-notification-system-redux'
import { notificationOpts }   from '../../utils/NotificationUtils'

import { signInUser, signInUserFailure, signInUserSuccess } from '../../actions/userActions'

import Signin from '../../components/signin/Signin'

const mapStateToProps = (state) => {
	return {
		loading: state.userState.loading,
		error: state.userState.error,

		notifications: state.notifications
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchNotification: (fn, notificationOpts) => {
      dispatch(fn(notificationOpts));
		},
		signInUser: (values) => {
			dispatch(signInUser(values)).then((result) => {
        if(result.payload && result.payload.response && result.payload.response.status !== 200) {
          dispatch(signInUserFailure(result.payload.response.data));
          throw new SubmissionError(result.payload.response.data);
        }
        
        // console.log(result.value.data.token)
        sessionStorage.setItem('orcinus', result.value.data.token);
        dispatch(signInUserSuccess(result.value.data)); //ps: this is same as dispatching RESET_USER_FIELDS
        browserHistory.push('/')
        dispatch(Notifications.success(notificationOpts('Success', `Successfully signin`)))
      }).catch((error) => {
        dispatch(Notifications.error(notificationOpts('Error', error.response.data.message)))
      })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)