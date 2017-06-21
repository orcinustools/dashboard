import React from "react";

import Button from "./Button.js";
import MessageMenu from "./MessageMenu.js";
import TasksMenu from "./TasksMenu.js";
import UserMenu from "./UserMenu.js";

const Header = (props) => {
	return (
		<header className="header">
			<nav className="navbar navbar-static-top">
    		<Button />
	      <div className="navbar-right navbar-right-fix">
	        <ul className="nav navbar-nav">
						{/*<MessageMenu />
						<TasksMenu />*/}
						<UserMenu 
							user={ props.user }
							signOutUser={ props.signOutUser }/>
	        </ul>
	      </div>
			</nav>
		</header>
	)
}

export default Header