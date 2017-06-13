import React from 'react'

import AppContainer from '../../containers/app/AppContainer'

const AppPage = (props) => {
	return (
		<AppContainer>
			{ props.children }
		</AppContainer>
	)
}

export default AppPage