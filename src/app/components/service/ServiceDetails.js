import React 		from "react"
import { Link } from "react-router"

import ActionButton 	from "./ServiceDetails/ActionButton"
import General 				from "./ServiceDetails/General"
import Containers 		from "./ServiceDetails/Containers"
import Volumes 				from "./ServiceDetails/Volumes"
import Mountpoints 		from "./ServiceDetails/Mountpoints"
import Ports 					from "./ServiceDetails/Ports"
import Endpoints 			from "./ServiceDetails/Endpoints"
import Environtments 	from "./ServiceDetails/Environtments"

export default class ServiceDetails extends React.Component {

	componentWillMount() {
		this.props.fetchService()
	}

	render() {
		
		const { service, fetching, fetched, error } = this.props

		if (fetching) {
			return <h1>Fetching coy</h1>
		}
			
		return (
			<div>
				<ActionButton />

				{ fetched && 
					<General 
						name={service.Spec.Name}
						created={service.CreatedAt}
						updated={service.UpatedAt}
						replicated={service.Spec.Mode.Replicated.Replicas} />
				}

						<Containers />

						<Volumes />
				
						<Mountpoints />

						<Ports />

						<Environtments />

			</div>
		)
	}
}

