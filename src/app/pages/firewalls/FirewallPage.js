import React from "react";
import { Link } from "react-router";

export default class FirewallPage extends React.Component {
	render() {
		return (
    <div className="row">
      <div className="col-md-12">
        <div className="panel">
          <div className="panel-body text-center">
            <div className="col-md-12 welcome-hello">
              <h1 className="text-center text-bg">Welcome to Firewall</h1>
              <p className="welcome-greet">There is a fire in your wall.</p>
              <ul>
                <li>Endpoints</li>
                <li>Ports</li>
              </ul>

              <Link to="/catalog" className="btn btn-info btn-create btn-lg">CREATE PROJECT</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
		);
	}
}