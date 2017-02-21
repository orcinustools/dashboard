import React from "react";

export default class Button extends React.Component {
	render() {
		return (
      <a href="#" className="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </a>
		);
	}
}