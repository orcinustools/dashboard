import React from 'react';
import { Link } from 'react-router';

export default class SidebarMenu extends React.Component {
	render() {
		return (
      <ul className="sidebar-menu">
        <li className="nav-header">Dashboard</li>
        <li className="active">
          <Link to="/overview">
            <i className="fa fa-dashboard fa-fw"></i> <span>&nbsp; Overview</span>
          </Link>
        </li>
        <li className="nav-header">Workspace</li>
        <li>
          <Link to="/stacks">
            <i className="fa fa-server fa-fw"></i> <span>&nbsp; Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <i className="fa fa-cubes fa-fw"></i> <span>&nbsp; Services</span>
          </Link>
        </li>
        <li>
          <Link to="/containers">
            <i className="fa fa-cube fa-fw"></i> <span>&nbsp; Containers</span>
          </Link>
        </li>
        <li>
          <Link to="/volumes">
            <i className="fa fa-hdd-o fa-fw"></i><span>&nbsp; Volumes</span>
          </Link>
        </li>
        <li className="nav-header">Community</li>
        <li>
          <Link to="/catalog">
            <i className="fa fa-book fa-fw"></i> <span>&nbsp; Catalog</span>
          </Link>
        </li>
        <li className="nav-header">Miscellaneous</li>
        <li>
          <Link to="/settings">
            <i className="fa fa-cog fa-fw"></i> <span>&nbsp; Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/docs">
            <i className="fa fa-book fa-fw"></i> <span>&nbsp; Documentation</span>
          </Link>
        </li>
        <li>
          <Link to="/support">
            <i className="fa fa-life-ring fa-fw"></i> <span>&nbsp; Support</span>
          </Link>
        </li>
      </ul>
		);
	}
}