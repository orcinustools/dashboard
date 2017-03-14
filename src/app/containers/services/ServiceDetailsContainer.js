/**
 * Smart component for Services Details Page
 */
import { connect } from "react-redux";

import ServiceDetails from "../../components/service/ServiceDetails";

import { fetchService } from "../../actions/serviceActions";

const mapStateToProps = (state, ownProps) => {
	return {
		service: state.servicesState.activeService.service,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchService: () => {
			dispatch(fetchService())
		},
	};
}

export default connect (mapStateToProps, mapDispatchToProps)(ServiceDetails);