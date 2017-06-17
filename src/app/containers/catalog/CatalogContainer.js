/**
 * smart component for catalog page
 */
import { connect } from "react-redux"
import { browserHistory } from "react-router"

import Catalog from "../../components/catalog/Catalog"

import { notificationOpts }   from '../../utils/NotificationUtils'
import Notifications          from 'react-notification-system-redux'

import {
	fetchCatalog,
	removeItemFromBoard,
	addItemToBoard,
  setOptionSelect
} from "../../actions/catalogActions"
import {
  createNewService,
  setStackName,
  createService,
  updateCustomDomain
} from "../../actions/serviceActions"

import { fetchStacks, createStack } from "../../actions/stackActions"

const mapStateToProps = (state) => {
  return {
    catalog: state.catalogsState.imageList,
    options: state.catalogsState.options,

    stacks: state.stacksState.stacksList.stacks,
    stack_fetching: state.stacksState.stacksList.fetching,
    stack_fetched: state.stacksState.stacksList.fetched,
    stack_error: state.stacksState.stacksList.error,

    info: state.appState.appInfo.info,

    user: state.userState.user,
    
    newService: state.servicesState.newService,
    newService_loading: state.servicesState.newService.fetching,
    newService_done: state.servicesState.newService.fetched,
    
    board: state.catalogsState.board,
    fetching: state.catalogsState.fetching,
    fetched: state.catalogsState.fetched,
    error: state.catalogsState.error,

    notifications: state.notifications
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatalog: () => {
      dispatch(fetchCatalog())
    },
    removeItemFromBoard: (index) => {
    	dispatch(removeItemFromBoard(index))
    },
    addItemToBoard: (name, category) => {
    	dispatch(addItemToBoard(name, category))
    },
    createNewService: (data) => {
      dispatch(createNewService(data))
    },
    setStackName: (data) => {
      dispatch(setStackName(data))
    },
    fetchStacks: () => {
      dispatch(fetchStacks()).then((res) => {
        dispatch(setOptionSelect(res.value.data))
      })
    },
    deployService: (domain, newService) => {
      var target = domain
      dispatch(createStack(newService.opt.stack)).then((response) => {
        if(response.value.status !== 200) {
          dispatch(createService(newService)).then((res) => {
            browserHistory.push(`/services/${res.action.payload.data[0].id}`)
            dispatch(Notifications.success(notificationOpts('Success', `Successfully deploy service!`, () => window.open(`http://${domain}`, '_blank'))))
          })
        }
        else {
          dispatch(createService(newService)).then((res) => {
            browserHistory.push(`/services/${res.action.payload.data[0].id}`)
            dispatch(Notifications.success(notificationOpts('Success', `Successfully deploy service!`, () => window.open(`http://${domain}`, '_blank'))))
          })
        }
      }).catch((response) => {
        console.log("Catch ", response)
      })
    },
    updateCustomDomain: (value) => {
      dispatch(updateCustomDomain(value))
    },
    dispatchNotification: (fn, notificationOpts) => {
      dispatch(fn(notificationOpts));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);