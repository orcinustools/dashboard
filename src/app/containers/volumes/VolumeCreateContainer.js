/**
 * Smart component for Volume Create Page
 */
import { connect } from "react-redux";

import VolumeCreate from "../../components/volume/VolumeCreate";

const mapStateToProps = (state) => {
	return {
		newVolume: state.volumeState.newVolume.volume
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps,	mapDispatchToProps)(VolumeCreate);