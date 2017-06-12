import React from "react"

import { Link } from "react-router"

import StackCreateContainer from "../../containers/stacks/StackCreateContainer"

export default class StackCreatePage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            PROJECT WIZARD
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li className="active">WIZARD</li>
          </ol>
        </section>

        <StackCreateContainer />
			</div>
		);
	}
}