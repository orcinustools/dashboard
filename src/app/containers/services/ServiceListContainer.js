/**
 * Smart component for Services List Page
 */

import { Link } from "react-router"
import { connect } from "react-redux"
import { browserHistory } from "react-router"

import ServicesList from "../../components/service/ServicesList"

import {
  fetchServices, 
  deleteService,
  replicasIncrement, replicasDecrement, scaleServiceAPI
} from "../../actions/serviceActions"

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
    },
    deleteService: (id) => {
      dispatch(deleteService(id))
    },
    replicasIncrement: (serviceId) => {
      dispatch(replicasIncrement(serviceId))
    },
    replicasDecrement: (serviceId) => {
      dispatch(replicasDecrement(serviceId))
    },
    scaleServiceAPI: (props) => {
      dispatch(scaleServiceAPI(props)).then((response) => {
        dispatch(fetchServices())
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
