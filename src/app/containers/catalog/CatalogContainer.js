/**
 * smart component for catalog page
 */
import { connect } from "react-redux";

import *  as actions from "../../actions";
import { Catalog } from "../../scenes";

const mapStateToProps = (state) => {
	return {
		nama: state.userName
	}
}

const mapDispatchToProps = () => {
	return {
		// action: action untuk catalog
	}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Catalog);