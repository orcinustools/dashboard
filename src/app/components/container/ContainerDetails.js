import React from "react"
import { Link } from "react-router"

import ActionButton from "./ContainerDetails/ActionButton"
import General from "./ContainerDetails/General"
import Volumes from "./ContainerDetails/Volumes"
import Mountpoints from "./ContainerDetails/Mountpoints"
import Ports from "./ContainerDetails/Ports"
import Environtments from "./ContainerDetails/Environtments"

export default class ContainerDetails extends React.Component {

  componentDidMount() {
    this.props.fetchContainer()
  }

	render() {
    const { container, fetching, fetched } = this.props;

    if (fetching) {
      return <h1>Fetching</h1>;
    }

    return (
			<div>
        <ActionButton />

        { fetched &&
          <General 
            name={container.Name}
            image={container.Config.Image}
            volumeTotal={container.Mounts.length}
            created={container.Created} />
        }

        <Volumes />

        <Mountpoints />

        <Ports />

        <Environtments />
			</div>
		);
	}
}