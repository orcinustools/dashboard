import React from "react"
import { Link } from "react-router"

import OrcinusLogo from "../../../assests/images/logo/OrcinusFix.svg"

export default class Logo extends React.Component {
	render() {
		return (
		  <Link to={ "/" } className="logo">
	      <img src={ OrcinusLogo } className="img-responsive" alt="Orcinus Logo" />
		  </Link>
		)
	}
}