/**
 * Smart component for Services List Page
 */

import { Link } from "react-router"
import { connect } from "react-redux"
import { browserHistory } from "react-router"
import { notificationOpts }   from '../../utils/NotificationUtils'
import Notifications          from 'react-notification-system-redux'

import ServicesList from "../../components/service/ServicesList"

import {
  fetchServices, 
  deleteServiceAPI, setDeleteService,
  replicasIncrement, replicasDecrement, scaleServiceAPI
} from "../../actions/serviceActions"

const mapStateToProps = (state) => {
  return {
    services: state.servicesState.servicesList.services,
    fetching: state.servicesState.servicesList.fetching,
    fetched: state.servicesState.servicesList.fetched,
    error: state.servicesState.servicesList.error,

    notifications: state.notifications
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServices: () => {
      dispatch(fetchServices()).catch((error) => {
        dispatch(Notifications.error(notificationOpts('Error', error)))
      })
    },
    deleteService: (id, name) => {
      dispatch(deleteServiceAPI(id)).then(() => {
        dispatch(setDeleteService(id))
        dispatch(Notifications.success(notificationOpts('Success', `Successfully deleted ${name} services!`)))
      })
    },
    replicasIncrement: (serviceId, name) => {
      dispatch(replicasIncrement(serviceId))
    },
    replicasDecrement: (serviceId, name) => {
      dispatch(replicasDecrement(serviceId))
    },
    scaleServiceAPI: (props) => {
      dispatch(scaleServiceAPI(props)).then((response) => {
        dispatch(fetchServices())
        dispatch(Notifications.success(notificationOpts('Success', `Successfully scale ${response.value.data.app.split('-')[2]} services!`)))
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
