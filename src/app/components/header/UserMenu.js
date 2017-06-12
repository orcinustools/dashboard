import React from "react";

import Avatar from "../../vendors/img/avatar.png"

import { logout } from '../../utils/AuthService'

export default class UserMenu extends React.Component {
	render() {
		return (
      <li className="dropdown user user-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          {/*<img src={ Avatar } className="img-circle" alt="User Image" style={{ display: 'inline', height: '25'}} />*/}
          <span>Orciners <i className="caret"></i></span>
        </a>
        <ul className="dropdown-menu dropdown-custom dropdown-menu-right">
          <li className="dropdown-header text-center">Account</li>

          <li>
            <a href="#">
              <i className="fa fa-clock-o fa-fw pull-right"></i>
              <span className="badge badge-success pull-right">10</span> Updates
            </a>
            <a href="#">
              <i className="fa fa-envelope-o fa-fw pull-right"></i>
              <span className="badge badge-danger pull-right">5</span> Messages
            </a>
            <a href="#"><i className="fa fa-magnet fa-fw pull-right"></i>
              <span className="badge badge-info pull-right">3</span> Subscriptions
            </a>
            <a href="#"><i className="fa fa-question fa-fw pull-right"></i> 
              <span className="badge pull-right">11</span> FAQ
            </a>
          </li>

          <li className="divider"></li>

          <li>
            <a href="#">
              <i className="fa fa-user fa-fw pull-right"></i> Profile
            </a>
            <a data-toggle="modal" href="#modal-user-settings">
              <i className="fa fa-cog fa-fw pull-right"></i> Settings
            </a>
          </li>

          <li className="divider"></li>

          <li>
            <a onClick={()=> logout()} style={{ cursor: 'pointer' }}><i className="fa fa-ban fa-fw pull-right"></i> Logout</a>
          </li>
        </ul>
      </li>
		);
	}
}