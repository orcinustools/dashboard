import React, { PropTypes } from "react";
import { Link } from "react-router";

export default class ContainerListItem extends React.Component {
	render() {
		return (
      <tr>
        <td>{ this.props.id }</td>
        <td><Link to={"/containers/" + this.props.id }>{ this.props.name }</Link></td>
        <td><span className="label label-success">{ this.props.state }</span></td>
        <td>
          <i className="fa fa-tag fa-fw" aria-hidden="true"></i> { this.props.image }
        </td>
        <td>
          <ul className="list-child">
            <li><i className="fa fa-server fa-fw" aria-hidden="true"></i> Wordpress-app</li>
            <li><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> wp-app</li>
            <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volume(s)</li>
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