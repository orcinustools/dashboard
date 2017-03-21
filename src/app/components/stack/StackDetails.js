import React from "react"
import { Link } from "react-router"

import ActionButton from "./StackDetails/ActionButton"
import General      from "./StackDetails/General"
import Services      from "./StackDetails/Services"
import Endpoints     from "./StackDetails/Endpoints"

export default class StackDetails extends React.Component {
	render() {
		return (
      <div>
        <ActionButton />

        <General />

        <Services />

        <Endpoints />
      </div>
		)
	}
}