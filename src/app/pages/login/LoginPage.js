import React from "react"
import { Link } from "react-router"
import GoogleLogin from "react-google-login"

export default class LoginPage extends React.Component {

  responseGoogle(response) {
    console.log(response);
  }

	render() {
		return (
      <div className="col-md-6 col-md-offset-3" style={{ marginTop: "100px" }}>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
		);
	}
}