import React from 'react'
import { connect } from 'react-redux'

import Signup from '../../components/signup/Signup'

const mapStateToProps = (state) => {
	return {
		loading: state.userState.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)