import React 		from "react"
import { Link } from "react-router"

import ActionButton from "./ServiceDetails/ActionButton"
import General 			from "./ServiceDetails/General"
import Containers 	from "./ServiceDetails/Containers"
import Volumes 			from "./ServiceDetails/Volumes"
import Mountpoints 	from "./ServiceDetails/Mountpoints"
import Ports 				from "./ServiceDetails/Ports"
import Endpoints 		from "./ServiceDetails/Endpoints"

export default class ServiceDetails extends React.Component {

	componentWillMount() {
		this.props.fetchService()
	}

	render() {
		
		const { service, fetching } = this.props

		if (fetching) {
			return <h1>Fetching coy</h1>
		}
			
		return (
			<div>
				<ActionButton />

				<General 
					name={service.Spec && service.Spec.Name}
					created={service.CreatedAt}
					updated={service.UpatedAt} />

				<Containers />

				<Volumes />
		
				<Mountpoints />

				<Ports 
				 ports={service.Spec && service.Spec.EndpointSpec && service.Spec.EndpointSpec.Ports} />

				<Endpoints />

				<div className="row">
				  <div className="col-xs-12">
				    <div className="panel">
				      <header className="panel-heading">
				        Environment Variables
				      </header>
				      <div className="panel-body">
				        <table className="table table-hover">
				          <thead>
				            <tr>
				              <th>Name</th>
				              <th>Value</th>
				              <th></th>
				            </tr>
				          </thead>
				          <tbody className="table-stack-list">
				            <tr>
				              <td>WORDPRESS_DB_PASSWORD</td>
				              <td>root</td>
				              <td>
				                <i className="fa fa-minus-square" aria-hidden="true"></i>
				              </td>
				            </tr>
				            <tr>
				              <td>
				                <input type="text" className="form-control" />
				              </td>
				              <td>
				                <input type="text" className="form-control" />
				              </td>
				              <td>
				                <i className="fa fa-plus-square fa-2x" aria-hidden="true" onClick={ () => alert("Clicked") }></i>
				              </td>
				            </tr>
				          </tbody>
				        </table>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

