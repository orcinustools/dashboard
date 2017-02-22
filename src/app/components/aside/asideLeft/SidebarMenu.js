import React from 'react';

export default class SidebarMenu extends React.Component {
	render() {
		return (
      <ul className="sidebar-menu">
        <li className="active">
          <a href="overview.html">
            <i className="fa fa-dashboard"></i> <span>Overview</span>
          </a>
        </li>
        <li className="nav-header">Projects</li>
        <li>
          <a href="stack_list.html">
            <i className="fa fa-server"></i> <span>Stacks</span>
          </a>
        </li>
        <li>
          <a href="service_list.html">
            <i className="fa fa-cubes"></i> <span>Services</span>
          </a>
        </li>
        <li>
          <a href="container_list.html">
            <i className="fa fa-cube"></i> <span>Containers</span>
          </a>
        </li>
        <li>
          <a href="volume_list.html">
            <i className="fa fa-hdd-o"></i> <span>Volumes</span>
          </a>
        </li>
        <li className="nav-header">Community</li>
        <li>
          <a href="katalog_list.html">
            <i className="fa fa-book"></i> <span>Catalog</span>
          </a>
        </li>
        <li className="nav-header">Settings</li>
        <li>
          <a href="#">
            <i className="fa fa-cog"></i> <span>Cloud Settings</span>
          </a>
        </li>
      </ul>
		);
	}
}