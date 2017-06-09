/**
 * Smart component for Stack List Page
 */
import { connect } 				from "react-redux"

import { checkStack } from "../../actions/stackActions"

import StackCreate from "../../components/stack/StackCreate"

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		checkStack: (props) => {
			dispatch(checkStack(props))
		}
	}
}

export default connect(mapStateToProps,	mapDispatchToProps)(StackCreate)