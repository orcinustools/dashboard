/**
 * Smart component for Stack List Page
 */
import { connect } from "react-redux"

import { fetchStack } from "../../actions/stackActions"

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
		fetchStack: () => {
			dispatch(fetchStack())
		}
	}
}

export default connect(mapStateToProps,	mapDispatchToProps)(StackDetails)