import React from "react"
import { Link } from "react-router"

import OrcinusLogo from "../../../assests/images/logo/OrcinusFix.svg"

const style = {
	button: {
		marginBottom: 20
	}
}

const Logo = (props) => {
	return (
	  <Link to={ "/" } className="logo">
      <img 
      	style={ style.button }
      	src={ OrcinusLogo }
      	className="img-responsive"
      	alt="Orcinus Logo" />
	  </Link>
	)
}

export default Logo