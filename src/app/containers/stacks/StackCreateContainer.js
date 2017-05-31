/**
 * Smart component for Stack List Page
 */
import { connect } 				from "react-redux"
import { browserHistory } from "react-router"

import { createStack } from "../../actions/stackActions"
import StackCreate from "../../components/stack/StackCreate"

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		createStack: (props) => {
			dispatch(createStack(props)).then(() => {
				browserHistory.push('/stacks')
			})
		}
	}
}

export default connect(mapStateToProps,	mapDispatchToProps)(StackCreate)