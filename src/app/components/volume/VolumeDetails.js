import React from "react"
import { Link } from "react-router"

import ActionButton from "./VolumeDetails/ActionButton"
import General      from "./VolumeDetails/General"
import Mountpoints  from "./VolumeDetails/Mountpoints"
import StackList    from "./VolumeDetails/StackList"
import ServiceList  from "./VolumeDetails/ServiceList"
import ContainerList from "./VolumeDetails/ContainerList"

export default class VolumeDetails extends React.Component {

  componentWillMount() {
    this.props.fetchVolume();
  }

	render() {

    const { volume, fetching, fetched } = this.props;

    if(fetching) {
      return <h1>Fetching ...</h1>
    }

		return (
			<div>
        <ActionButton />

        { fetched && 
          <General
            name={volume.Name}
            created={volume.Created} />
        }

        <Mountpoints />

        <StackList />

        <ServiceList />

        <ContainerList />

			</div>
		);
	}
}