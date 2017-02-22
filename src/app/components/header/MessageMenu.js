import React from "react";

import Avatar from "../../vendors/img/avatar.png"

export default class MessageMenu extends React.Component {
	render() {
		return (
	    <li className="dropdown messages-menu">
	      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
	        <i className="fa fa-envelope"></i>
	        <span className="label label-success">4</span>
	      </a>
	      <ul className="dropdown-menu">
	        <li className="header">You have 4 messages</li>
	        <li>
	          {/* inner menu: contains the actual data */}
	          <ul className="menu">
	            <li>
	              {/* start message */}
	              <a href="#">
	                <div className="pull-left">
	                  <img src={ Avatar } className="img-circle" alt="User Image" />
	                </div>
	                <h4>
	                  Support Team
	                </h4>
	                <p>Why not buy a new awesome theme?</p>
	                <small className="pull-right"><i className="fa fa-clock-o"></i> 5 mins</small>
	              </a>
	            </li>
	            <li>
	              <a href="#">
	                <div className="pull-left">
	                  <img src={ Avatar } className="img-circle" alt="user image" />
	                </div>
	                <h4>
	                  Director Design Team
	                </h4>
	                <p>Why not buy a new awesome theme?</p>
	                <small className="pull-right"><i className="fa fa-clock-o"></i> 2 hours</small>
	              </a>
	            </li>
	            <li>
	              <a href="#">
	                <div className="pull-left">
	                  <img src={ Avatar } className="img-circle" alt="user image" />
	                </div>
	                <h4>
	                  Developers
	                </h4>
	                <p>Why not buy a new awesome theme?</p>
	                <small className="pull-right"><i className="fa fa-clock-o"></i> Today</small>
	              </a>
	            </li>
	            <li>
	              <a href="#">
	                <div className="pull-left">
	                  <img src={ Avatar } className="img-circle" alt="user image" />
	                </div>
	                <h4>
	                  Sales Department
	                </h4>
	                <p>Why not buy a new awesome theme?</p>
	                <small className="pull-right"><i className="fa fa-clock-o"></i> Yesterday</small>
	              </a>
	            </li>
	            <li>
	              <a href="#">
	                <div className="pull-left">
	                  <img src={ Avatar } className="img-circle" alt="user image" />
	                </div>
	                <h4>
	                  Reviewers
	                </h4>
	                <p>Why not buy a new awesome theme?</p>
	                <small className="pull-right"><i className="fa fa-clock-o"></i> 2 days</small>
	              </a>
	            </li>
	          </ul>
	        </li>
	        <li className="footer"><a href="#">See All Messages</a></li>
	      </ul>
	    </li>
		);
	}
}