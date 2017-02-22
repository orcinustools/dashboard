import React from "react";

import UserPanel from "./UserPanel";
import SidebarMenu from "./SidebarMenu";

// import cls from "classnames";

export default class AsideLeft extends React.Component {
	render() {
		return (
			<aside className="left-side sidebar-offcanvas">
				<section className="sidebar">
					<UserPanel />
					<SidebarMenu />
				</section>
			</aside>
		);
	}
}