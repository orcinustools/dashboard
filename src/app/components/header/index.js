import React from "react";

import Button from "./Button.js";
import MessageMenu from "./MessageMenu.js";
import TasksMenu from "./TasksMenu.js";
import UserMenu from "./UserMenu.js";
import Logo from "./Logo.js";

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-static-top">
					<Logo />
      		<Button />
		      <div className="navbar-right navbar-right-fix">
		        <ul className="nav navbar-nav">
							<MessageMenu />
							<TasksMenu />
							<UserMenu />
		        </ul>
		      </div>
				</nav>
			</header>
		);
	}
}