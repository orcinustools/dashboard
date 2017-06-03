/**
 * Smart component for Overview Page
 */
import { connect } from "react-redux"

import Overview from "../../components/overview/Overview"
import { fetchStacks } from "../../actions/stackActions"
import { fetchServices } from "../../actions/serviceActions"
import { fetchContainers } from "../../actions/containerActions";

const mapStateToProps = (state) => {
	return {
		data: state.overviewState.data,
		containers: state.containerState.containersList.containers,
		stacks: state.stacksState.stacksList.stacks,
		services: state.servicesState.servicesList.services
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    fetchStacks: () => {
      dispatch(fetchStacks())
    },
    fetchContainers: () => {
      dispatch(fetchContainers())
    },
    fetchServices: () => {
      dispatch(fetchServices())
    }
	}
}

export default connect(mapStateToProps,	mapDispatchToProps)(Overview);