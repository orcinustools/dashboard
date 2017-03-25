import React from "react";
import cls from "classnames";

import Header from "../../header";


export default class AsideRight extends React.Component {
	render() {
		return (
			<aside className="right-side">
				<Header />
				<section className="content">
					{ this.props.children }
				</section>
			</aside>
		);
	}
}