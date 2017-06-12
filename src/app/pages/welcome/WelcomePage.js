import React from "react";
import { Link } from "react-router";

const WelcomePage = () => {
	return (
  <div className="row">
    <div className="col-md-12">
      <div className="panel">
        <div className="panel-body text-center">
          <div className="col-md-12 welcome-hello">
            <h1 className="text-center text-bg">Welcome to Orcinus Dashboard</h1>
            <p className="welcome-greet">There is no project in your workspace. Let's create your first project.</p>

            <Link to="/projects/new" className="btn btn-info btn-create btn-lg create-button">CREATE PROJECTS</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
	)
}

export default WelcomePage