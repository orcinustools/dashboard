/**
 * Smart component for Volume List Page
 */

import { connect } from "react-redux";

import VolumeList from "../../components/volume/VolumeList";

import { fetchVolumes } from "../../actions/volumeActions";

const mapStateToProps = (state) => {
  return {
    volumes: state.volumeState.volumesList.volumes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVolumes: () => {
      dispatch(fetchVolumes());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeList);