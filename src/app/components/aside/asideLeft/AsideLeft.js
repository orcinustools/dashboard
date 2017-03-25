import React from "react";

import SidebarMenu from "./SidebarMenu";
import Logo from "./Logo.js";

// import cls from "classnames";

export default class AsideLeft extends React.Component {
	render() {
		return (
			<aside className="left-side sidebar-offcanvas">
				<section className="sidebar">
					<Logo />
					{/*<UserPanel />*/}
					<SidebarMenu />
				</section>
			</aside>
		);
	}
}