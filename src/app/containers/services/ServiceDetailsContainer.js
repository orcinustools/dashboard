/**
 * Smart component for Services Details Page
 */
import { connect } 						from 'react-redux'
import { browserHistory } 		from 'react-router'
import { notificationOpts }   from '../../utils/NotificationUtils'
import Notifications          from 'react-notification-system-redux'

import ServiceDetails from "../../components/service/ServiceDetails"

import {
  fetchServices, fetchTaskByService,
  deleteServiceAPI, setDeleteService,
  replicasIncrement, replicasDecrement, scaleServiceAPI
} from "../../actions/serviceActions"

const mapStateToProps = (state, ownProps) => {
	return {
		service: state.servicesState.activeService.service,
		fetching: state.servicesState.activeService.fetching,
		fetched: state.servicesState.activeService.fetched,
		error: state.servicesState.activeService.error,

		notifications: state.notifications
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchService: (id) => {
			dispatch(fetchService(id))
		},
		fetchTaskByService: (id) => {
			dispatch(fetchTaskByService(id))
		},
    deleteService: (id, name) => {
      dispatch(deleteServiceAPI(id)).then(() => {
        dispatch(setDeleteService(id))
        browserHistory.push('/services')
        dispatch(Notifications.success(notificationOpts('Success', `Successfully deleted ${name} services!`, null, null, 2)))
      })
    }
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(ServiceDetails)