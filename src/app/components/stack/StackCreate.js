import React    from "react";
import { Link } from "react-router";

import ActionButton from "./StackCreate/ActionButton"
import General      from "./StackCreate/General"
import Services     from "./StackCreate/Services"
import Volumes      from "./StackCreate/Volumes"

export default class StackCreate extends React.Component {
	render() {
		return (
			<div>
        <ActionButton />

        <General />

        <Services />

        <Volumes />
			</div>
		);
	}
}