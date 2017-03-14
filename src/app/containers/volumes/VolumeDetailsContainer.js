/**
 * Smart component for Volume Details Page
 */
import { connect } from "react-redux";

import VolumeDetails from "../../components/volume/VolumeDetails";
import { fetchVolume } from "../../actions/volumeActions";

const mapStateToProps = (state) => {
	return {
		activeVolume: state.volumeState.activeVolume,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchVolume: () => {
			dispatch(fetchVolume());
		}
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(VolumeDetails);