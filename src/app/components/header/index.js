import React from "react";

import Button from "./Button.js";
import MessageMenu from "./MessageMenu.js";
import TasksMenu from "./TasksMenu.js";
import UserMenu from "./UserMenu.js";

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<nav className="navbar navbar-static-top">
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