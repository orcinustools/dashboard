import React from "react";

import Header from "../../components/header";
import { AsideLeft, AsideRight } from "../../components/aside";

export default class AppPage extends React.Component {
	render() {
		return (
			<div>
				<div className="wrapper row-offcanvas row-offcanvas-left">
				{/*<div id="wrapper" className="">8*/}
					<AsideLeft />
					<AsideRight>
						{ this.props.children }
					</AsideRight>
				</div>
			</div>
		);
	}
}