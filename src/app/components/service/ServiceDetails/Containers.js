import React 		from "react"
import { Link } from "react-router"

export default class Containers extends React.Component {
	render() {
		return (
      <tbody className="table-stack-list">
        <tr>
          <td>
          	<i
          		className="fa fa-cubes fa-fw"
          		aria-hidden="true"></i>
          	<Link
          			to="/containers/wp-app-1">
          		&nbsp; wp-app.1
          	</Link>
        	</td>
          <td>
         		<span
         				className="label label-success running-state">
         			RUNNING
       			</span>
       		</td>
          <td>
            <i
            	className="fa fa-tag fa-fw"
            	aria-hidden="true"></i>
            &nbsp; orcinus/wordpress-app:latest
          </td>
          <td>
            <ul className="list-child">
              <li>
              	<i
              		className="fa fa-hdd-o fa-fw"
              		aria-hidden="true"></i>
              	&nbsp; 1 Volumes
              </li>
            </ul>
          </td>
          <td>
            <Link
            		to="#"
            		className="btn btn-warning btn-sm list-stack-action">
            	<i className="fa fa-pause" aria-hidden="true"></i>
          	</Link>
            <Link
            		to="#"
            		className="btn btn-info btn-sm list-stack-action">
            	<i className="fa fa-refresh" aria-hidden="true"></i>
          	</Link>
            <Link
            		to="#"
            		className="btn btn-danger btn-sm list-stack-action">
            	<i className="fa fa-trash-o" aria-hidden="true"></i>
          	</Link>
          </td>
        </tr>
      </tbody>
		)
	}
}