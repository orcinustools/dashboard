import React 		from "react"
import { Link } from "react-router"

import ActionButton from "./ServiceCreate/ActionButton"
import General      from "./ServiceCreate/General"
import Ports        from "./ServiceCreate/Ports"
import Volumes      from "./ServiceCreate/Volumes"
import Variables    from "./ServiceCreate/Variables"

export default class ServiceCreate extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            SERVICE WIZARD
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><a href="/">HOME</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li className="active">WIZARD</li>
          </ol>
        </section>

        <General />

        <Ports />

        <Volumes />

        {/*<Variables />*/}
        
        <ActionButton />
			</div>
		);
	}
}