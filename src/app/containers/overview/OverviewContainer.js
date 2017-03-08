/**
 * Smart component for Overview Page
 */
import { connect } from "react-redux";

// import * as actions from "../../actions";
import { Overview } from "../../scenes";

const mapStateToProps = (state) => {
	return {
		images: state.images,
		stacks: state.stacks,
	}
}

const mapDispatchToProps = (action) => {
	return {

	}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Overview);