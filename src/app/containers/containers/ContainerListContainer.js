/**
 * Smart component for Container List Page
 */

import { connect } from "react-redux";

import ContainerList from "../../components/container/ContainerList";

import {
  fetchContainers, pauseContainer
} from "../../actions/containerActions";

const mapStateToProps = (state) => {
  return {
    containers: state.containerState.containersList.containers,
    fetching: state.containerState.containersList.fetching,
    fetched: state.containerState.containersList.fetched,
    error: state.containerState.containersList.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContainers: () => {
      dispatch(fetchContainers());
    },
    pauseContainer: (id) => {
      dispatch(pauseContainer(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerList);