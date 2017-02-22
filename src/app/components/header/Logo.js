import React from "react";

import OrcinusLogo from "../../assests/images/logo/OrcinusFix_Logotype_white.svg"

export default class Logo extends React.Component {
	render() {
		return (
		  <a href="#" className="logo">
	      <img src={ OrcinusLogo } className="img-responsive" alt="Orcinus Logo" />
		  </a>
		);
	}
}