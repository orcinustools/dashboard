/**
 * Smart component for Stack List Page
 */
import { connect } from "react-redux"
import { browserHistory } from "react-router"

import StackList from "../../components/stack/StackList"

import { setStackName }              from "../../actions/serviceActions"
import { fetchStacks, deleteStack }  from "../../actions/stackActions"

const mapStateToProps = (state) => {
  return {
    stacks: state.stacksState.stacksList.stacks,
    fetching: state.stacksState.stacksList.fetching,
    fetched: state.stacksState.stacksList.fetched,
    error: state.stacksState.stacksList.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStacks: () => {
      dispatch(fetchStacks())
    },
    deleteStack: (id) => {
      dispatch(deleteStack(id))
    },
    setStackName: (data) => {
      dispatch(setStackName(data))
      browserHistory.push('/catalog')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StackList)