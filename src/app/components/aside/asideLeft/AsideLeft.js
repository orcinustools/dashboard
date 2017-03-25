import React from "react";

import CreateButton from "./CreateButton"
import SidebarMenu 	from "./SidebarMenu";
import Logo 				from "./Logo.js";

// import cls from "classnames";

export default class AsideLeft extends React.Component {
	render() {
		return (
			<aside className="left-side sidebar-offcanvas">
				<section className="sidebar">
					<Logo />
					<CreateButton />
					<SidebarMenu />
		      {/*<div className="sidebar-footer">tessdfsdfjsldf</div>*/}
				</section>
			</aside>
		);
	}
}