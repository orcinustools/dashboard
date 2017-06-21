import React from "react"

import Header from "../../header"

const AsideRight = (props) => {
	return (
		<aside className="right-side">
			<Header 
				user={ props.user }
				signOutUser={ props.signOutUser } />
			<section className="content">
				{ props.children }
			</section>
		</aside>
	)
}

export default AsideRight