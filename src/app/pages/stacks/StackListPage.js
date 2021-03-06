import React from "react"
import { Link } from "react-router"

import StackListContainer from "../../containers/stacks/StackListContainer"

export default class StackListPage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            PROJECTS
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li className="active">PROJECTS</li>
          </ol>
        </section>

				<StackListContainer />
			</div>
		)
	}
}