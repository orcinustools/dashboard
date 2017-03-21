import React, { PropTypes } from "react";
import { Link } from "react-router";

/**
 * Props
 * id, name, status, total (servies, containers, volumes)
 */

export default class StackListItem extends React.Component {
	render() {
		return (
	    <tr>
	      <td>{ this.props.id.substr(0, 6) }</td>
	      <td><Link to="/stacks/wordpress-app">{ this.props.name }</Link></td>
	      <td><span className="label label-success">RUNNING</span></td>
	      <td>
	        <ul className="list-child">
	          <li><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> 2 Services</li>
	          <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 2 Containers</li>
	          <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 2 Volumes</li>
	        </ul>
	      </td>
	      <td>
	        <Link to="#" className="btn btn-warning btn-sm list-stack-action"><i className="fa fa-pause" aria-hidden="true"></i></Link>
	        <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
	        <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>

	        <div className="dropdown" style={{ display: 'inline-block' }}>
	          <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	            <i className="fa fa-bars" aria-hidden="true"></i>
	          </button>
	          
	          <ul className="dropdown-menu dropdown-min">
	            <li>
	              <Link to="#">Update</Link></li>
	            <li><Link to="#">Edit</Link></li>
	          </ul>
	        </div>
	      </td>
	    </tr>
		)
	}
}

StackListItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string
}