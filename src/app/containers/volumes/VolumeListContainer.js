/**
 * Smart component for Volume List Page
 */

import { connect } from "react-redux";

import VolumeList from "../../components/volume/VolumeList";

import { fetchVolumes } from "../../actions/volumeActions";

const mapStateToProps = (state) => {
  return {
    volumes: state.volumeState.volumesList.volumes,
    fetched: state.volumeState.volumesList.fetched,
    fetching: state.volumeState.volumesList.fetching,
    error: state.volumeState.volumesList.error
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