/**
 * Smart component for Stack List Page
 */
import { connect }            from "react-redux"
import { browserHistory }     from "react-router"
import Notifications          from 'react-notification-system-redux'
import { notificationOpts }   from '../../utils/NotificationUtils'

import StackList from "../../components/stack/StackList"

import { 
  setStackName 
} from "../../actions/serviceActions"
import { 
  fetchStacks, 
  setDeleteStack, 
  deleteStackAPI
} from "../../actions/stackActions"

const mapStateToProps = (state) => {
  return {
    stacks: state.stacksState.stacksList.stacks,
    fetching: state.stacksState.stacksList.fetching,
    fetched: state.stacksState.stacksList.fetched,
    error: state.stacksState.stacksList.error,

    notifications: state.notifications
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStacks: () => {
      dispatch(fetchStacks()).catch((error) => {
        dispatch(Notifications.error(notificationOpts('Error', error)))
      })
    },
    deleteStack: (id, name) => {
      dispatch(deleteStackAPI(id)).then(() => {
        dispatch(setDeleteStack(id))
        dispatch(Notifications.success(notificationOpts('Success', `Successfully delete ${name} stack!`)))
      }).catch((error) => {
        console.log(error)
        dispatch(Notifications.error(notificationOpts('Error', error)))
      })
    },
    setStackName: (data) => {
      dispatch(setStackName(data))
      browserHistory.push('/catalog')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StackList)