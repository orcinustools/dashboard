import React from "react";
import { Link } from "react-router";

export default class ContentHeader extends React.Component {
	render() {
		return (
	    <section className="content-header">
	      <h1>CATALOG</h1>
	      <ol className="breadcrumb breadcrumb-sm">
	        <li><Link href="index.html">HOME</Link></li>
	        <li className="active">CATALOG</li>
	      </ol>
	    </section>
		);
	}
}