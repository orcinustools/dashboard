import React from 'react'
import { connect } from 'react-redux'

import Signin from '../../components/signin/Signin'

const mapStateToProps = (state) => {
	return {
		loading: state.userState.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)