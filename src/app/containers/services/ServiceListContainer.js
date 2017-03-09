/**
 * Smart component for Services List Page
 */

import { Link } from "react-router";
import { connect } from "react-redux";

import ServicesList from "../../components/service/ServicesList";

import { fetchServices } from "../../actions/serviceActions";

const mapStateToProps = (state) => {
  return {
    services: state.serviceState.servicesList.services
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServices: () => {
      dispatch(fetchServices())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
