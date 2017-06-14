import React, { Component } from "react";

import Header from "../header";
import { AsideLeft, AsideRight } from "../aside";

export default class App extends Component {

	componentDidMount() {
		this.props.loadUserFromToken()
		this.props.loadInfoFromServer()
	}

	render() {
		return (
			<div>
				<div className="wrapper row-offcanvas row-offcanvas-left">
					<AsideLeft />
					<AsideRight user={this.props.user}>
						{ this.props.children }
					</AsideRight>
				</div>
			</div>
		);
	}
}