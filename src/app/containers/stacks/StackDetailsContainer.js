/**
 * Smart component for Stack List Page
 */
import { connect } from "react-redux";

// import * as actions from "../../actions";
import { StackDetails } from "../../pages";

const mapStateToProps = (state) => {
	return {
		images: state.images,
		stacks: state.stacks,
		name: "wordpress-app"
	}
}

const mapDispatchToProps = (action) => {
	return {

	}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(StackDetails);