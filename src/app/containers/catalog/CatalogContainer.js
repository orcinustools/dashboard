/**
 * smart component for catalog page
 */
import { connect } from "react-redux";

import Catalog from "../../components/catalog/Catalog";

import {
	fetchCatalog,
	removeItemFromBoard,
	addItemToBoard
} from "../../actions/catalogActions";

const mapStateToProps = (state) => {
  return {
    catalog: state.catalogsState.imageList,
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);