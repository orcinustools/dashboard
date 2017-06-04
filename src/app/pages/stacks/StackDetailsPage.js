import React from "react"
import { Link } from "react-router"

import StackDetailsContainer from "../../containers/stacks/StackDetailsContainer"

export default class StackDetailsPage extends React.Component {
	render() {
		return (
      <StackDetailsContainer id={this.props.params.Id} />
		);
	}
}