/**
 * Smart component for Stack List Page
 */
import { connect } from "react-redux"

import StackList from "../../components/stack/StackList"

import { fetchStacks } from "../../actions/stackActions"

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StackList)