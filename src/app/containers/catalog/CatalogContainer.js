/**
 * smart component for catalog page
 */
import { connect } from "react-redux";

import Catalog from "../../components/catalog/Catalog"

import {
	fetchCatalog,
	removeItemFromBoard,
	addItemToBoard,
  setOptionSelect
} from "../../actions/catalogActions"
import {
  createNewService,
  setStackName,
  createService
} from "../../actions/serviceActions"
import { fetchStacks } from "../../actions/stackActions"

const mapStateToProps = (state) => {
  return {
    catalog: state.catalogsState.imageList,
    newService: state.servicesState.newService,
    options: state.catalogsState.options,

    stacks: state.stacksState.stacksList.stacks,
    stack_fetching: state.stacksState.stacksList.fetching,
    stack_fetched: state.stacksState.stacksList.fetched,
    stack_error: state.stacksState.stacksList.error,
    
    board: state.catalogsState.board,
    fetching: state.catalogsState.fetching,
    fetched: state.catalogsState.fetched,
    error: state.catalogsState.error
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
    createService: (service) => {
      dispatch(createService(service))
    },
    fetchStacks: () => {
      dispatch(fetchStacks()).then((res) => {
        dispatch(setOptionSelect(res.value.data))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);