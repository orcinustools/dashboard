import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router";

export default class ServiceListItem extends React.Component {
	render() {
		return (
      <tr>
        <td>{ this.props.id.substr(0, 6) }</td>
        <td>
          <Link
              to={"/services/" + this.props.id }>
            { this.props.name }
          </Link>
        </td>
        <td><span className="label label-success running-state">RUNNING</span></td>
        <td>
          <i className="fa fa-tag fa-fw" aria-hidden="true"></i>
          &nbsp; { this.props.image.split('@')[0] }
        </td>
        <td>
          <ul className="list-child">
            <li>
              <i
                className="fa fa-server fa-fw"
                aria-hidden="true"></i>
              &nbsp; Wordpress-app
            </li>
            <li>
              <i 
                className="fa fa-cube fa-fw"
                aria-hidden="true"></i>
              &nbsp; {this.props.replicas} Containers
            </li>
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
              className="btn btn-success btn-sm list-stack-action start-button">
            <i className="fa fa-play" aria-hidden="true"></i>
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

          <div className="dropdown" style={{ display: 'inline-block' }}>
            <button
                type="button"
                className="btn btn-default btn-sm dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false">
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