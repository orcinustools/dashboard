import React, { Component } from "react";

import Header from "../header";
import { AsideLeft, AsideRight } from "../aside";

import Notifications from 'react-notification-system-redux'

export default class App extends Component {

	componentWillMount() {
		this.props.loadUserFromToken()
		this.props.loadInfoFromServer()
	}

	render() {

		const { notifications } = this.props

		return (
			<div>
				<Notifications notifications={notifications} />
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