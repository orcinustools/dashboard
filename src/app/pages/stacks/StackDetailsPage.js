import React from "react"
import { Link } from "react-router"

import StackDetailsContainer from "../../containers/stacks/StackDetailsContainer"

export default class StackDetailsPage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            Wordpress-app
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/stacks">STACKS</Link></li>
            <li className="active">Wordpress-app</li>
          </ol>
        </section>

        <StackDetailsContainer />
       </div>
		);
	}
}