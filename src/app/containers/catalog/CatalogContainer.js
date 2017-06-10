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
    stacks: state.stacksState.stacksList.stacks,
    newService: state.servicesState.newService,
    options: state.catalogsState.options,
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
    addItemToBoard: (name, category, props) => {
    	dispatch(addItemToBoard(name, category, props))
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
      dispatch(fetchStacks())
    },
    setOptionSelect: (options) => {
      dispatch(setOptionSelect(options))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);