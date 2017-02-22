import React from "react";
import cls from "classnames";

import Footer from "../../footer/Footer";

export default class AsideRight extends React.Component {
	render() {
		return (
			<aside className="right-side">
				<section className="content">
					{ this.props.children }
				</section>
				<Footer />
			</aside>
		);
	}
}