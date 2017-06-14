/**
 * Smart component for Stack List Page
 */
import { connect } from "react-redux"

import { fetchStack, fetchServices } from "../../actions/stackActions"
import { setStackName } from "../../actions/serviceActions"

import StackDetails from "../../components/stack/StackDetails"

const mapStateToProps = (state) => {
	return {
		stack: state.stacksState.activeStack.stack,
		fetching: state.stacksState.activeStack.fetching,
		fetched: state.stacksState.activeStack.fetched,
		error: state.stacksState.activeStack.error,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchStack: (id) => {
			dispatch(fetchStack(id))
		},
		fetchServices: (stackId) => {
			dispatch(fetchServices(stackId))
		},
    setStackName: (data) => {
      dispatch(setStackName(data))
    }
	}
}

export default connect(mapStateToProps,	mapDispatchToProps)(StackDetails)