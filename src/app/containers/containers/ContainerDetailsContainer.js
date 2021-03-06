/**
 * Smart component for Container Details Page
 */
import { connect } from "react-redux";

import ContainerDetails from "../../components/container/ContainerDetails";

import { fetchContainer } from "../../actions/containerActions";

const mapStateToProps = (state) => {
	return {
		container: state.containerState.activeContainer.container,
		fetching: state.containerState.activeContainer.fetching,
		fetched: state.containerState.activeContainer.fetched,
		error: state.containerState.activeContainer.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchContainer: (id) => {
			dispatch(fetchContainer(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerDetails);