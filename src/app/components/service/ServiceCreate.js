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
        <ActionButton />

        <General />

        <Ports />

        <Volumes />

        <Variables />
			</div>
		);
	}
}