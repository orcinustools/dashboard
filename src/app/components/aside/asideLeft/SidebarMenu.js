import React from 'react';
import { Link } from 'react-router';

export default class SidebarMenu extends React.Component {
	render() {
		return (
      <ul className="sidebar-menu">
        <li className="nav-header">Dashboard</li>
        <li>
          <Link to="/overview" activeClassName="sidebar-active">
            <i className="fa fa-dashboard fa-fw"></i> <span>&nbsp; Overview</span>
          </Link>
        </li>
        <li className="nav-header">Workspace</li>
        <li>
          <Link to="/services" activeClassName="sidebar-active">
            <i className="fa fa-cubes fa-fw"></i> <span>&nbsp; Services</span>
          </Link>
        </li>
        <li>
          <Link to="/stacks" activeClassName="sidebar-active">
            <i className="fa fa-server fa-fw"></i> <span>&nbsp; Groups</span>
          </Link>
        </li>
        <li>
          <Link to="/containers" activeClassName="sidebar-active">
            <i className="fa fa-cube fa-fw"></i> <span>&nbsp; Containers</span>
          </Link>
        </li>
        <li>
          <Link to="/volumes">
            <i className="fa fa-hdd-o fa-fw"></i><span>&nbsp; Volumes</span>
          </Link>
        </li>
        {/*<li>
          <Link to="/mountpoints">
            <i className="fa fa-code-fork fa-fw"></i><span>&nbsp; Mountpoints</span>
          </Link>
        </li>
        <li>
          <Link to="/firewalls">
            <i className="fa fa-fire fa-fw"></i><span>&nbsp; Security</span>
          </Link>
        </li>*/}
        <li className="nav-header">Community</li>
        <li>
          <Link to="/catalog" activeClassName="sidebar-active">
            <i className="fa fa-book fa-fw"></i> <span>&nbsp; Catalog</span>
          </Link>
        </li>
        <li className="nav-header">Miscellaneous</li>
        <li>
          <Link to="/settings" activeClassName="sidebar-active">
            <i className="fa fa-cog fa-fw"></i> <span>&nbsp; Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/docs" activeClassName="sidebar-active">
            <i className="fa fa-book fa-fw"></i> <span>&nbsp; Documentation</span>
          </Link>
        </li>
        <li>
          <Link to="/support" activeClassName="sidebar-active">
            <i className="fa fa-life-ring fa-fw"></i> <span>&nbsp; Support</span>
          </Link>
        </li>
      </ul>
		);
	}
}