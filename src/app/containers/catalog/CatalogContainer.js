/**
 * smart component for catalog page
 */
import { connect } from "react-redux";

import Catalog from "../../components/catalog/Catalog";

import { fetchImages } from "../../actions/imageActions";

const mapStateToProps = (state) => {
  return {
    catalog: state.imagesState.imageList,
    fetching: state.imagesState.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => {
      dispatch(fetchImages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);