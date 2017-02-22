import React from 'react';
import { Link } from 'react-router';

export default class SidebarMenu extends React.Component {
	render() {
		return (
      <ul className="sidebar-menu">
        <li className="active">
          <Link to="/overview">
            <i className="fa fa-dashboard"></i> <span>Overview</span>
          </Link>
        </li>
        <li className="nav-header">Projects</li>
        <li>
          <Link to="/stacks">
            <i className="fa fa-server"></i> <span>Stacks</span>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <i className="fa fa-cubes"></i> <span>Services</span>
          </Link>
        </li>
        <li>
          <Link to="/containers">
            <i className="fa fa-cube"></i> <span>Containers</span>
          </Link>
        </li>
        <li>
          <Link to="/volumes">
            <i className="fa fa-hdd-o"></i> <span>Volumes</span>
          </Link>
        </li>
        <li className="nav-header">Community</li>
        <li>
          <Link to="/catalog">
            <i className="fa fa-book"></i> <span>Catalog</span>
          </Link>
        </li>
        <li className="nav-header">Settings</li>
        <li>
          <Link to="/settings">
            <i className="fa fa-cog"></i> <span>Cloud Settings</span>
          </Link>
        </li>
      </ul>
		);
	}
}