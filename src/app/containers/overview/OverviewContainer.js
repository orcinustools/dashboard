/**
 * Smart component for Overview Page
 */
import { connect } from "react-redux";

import Overview from "../../components/overview/Overview";

const mapStateToProps = (state) => {
	return {
		data: state.overviewState.data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps,	mapDispatchToProps)(Overview);