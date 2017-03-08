/**
 * Smart component for App Page
 */
import { connect } from "react-redux";

// import * as actions from "../../actions";
import { App } from "../../scenes";

const mapStateToProps = (state) => {
	return {
		userName: state.userName,
	}
}

const mapDispatchToProps = (action) => {
	return {

	}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(App);