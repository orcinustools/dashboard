import React from "react";
import { Link } from "react-router";

export default class WelcomePage extends React.Component {
	render() {
		return (
    <div className="row">
      <div className="col-md-12">
        <div className="panel">
          <div className="panel-body text-center">
            <div className="col-md-12 welcome-hello">
              <h1 className="text-center text-bg">Welcome to Orcinus Dashboard</h1>
              <p className="welcome-greet">There is no application in your project. Let's create your first stack.</p>

              <Link to="/catalog" className="btn btn-info btn-create btn-lg create-button">CREATE PROJECT</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
		);
	}
}