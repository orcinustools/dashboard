/**
 * Smart component for Services Details Page
 */
import { connect } from "react-redux"

import ServiceDetails from "../../components/service/ServiceDetails"

import { fetchService, fetchTaskByService } from "../../actions/serviceActions"

const mapStateToProps = (state, ownProps) => {
	return {
		service: state.servicesState.activeService.service,
		fetching: state.servicesState.activeService.fetching,
		fetched: state.servicesState.activeService.fetched,
		error: state.servicesState.activeService.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchService: (id) => {
			dispatch(fetchService(id))
		},
		fetchTaskByService: (id) => {
			dispatch(fetchTaskByService(id))
		}
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(ServiceDetails)