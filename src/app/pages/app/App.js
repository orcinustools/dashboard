import React from "react";

import Header from "../../components/header";
import { AsideLeft, AsideRight } from "../../components/aside";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<div className="wrapper row-offcanvas row-offcanvas-left">
					<AsideLeft />
					<AsideRight>
						{ this.props.children }
					</AsideRight>
				</div>
			</div>
		);
	}
}