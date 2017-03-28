/**
 * Smart component for Services List Page
 */

import { Link } from "react-router";
import { connect } from "react-redux";

import ServicesList from "../../components/service/ServicesList";

import { fetchServices } from "../../actions/serviceActions";

const mapStateToProps = (state) => {
  return {
    services: state.servicesState.servicesList.services,
    fetching: state.servicesState.servicesList.fetching,
    fetched: state.servicesState.servicesList.fetched,
    error: state.servicesState.servicesList.error
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
