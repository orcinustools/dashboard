import React    from "react"
import { Link } from "react-router"

const style = {
  height: '100vh'
}

const PageNotFoundPage = () => {
	return (
    <div className="row">
      <div className="col-md-12">
        <div style={ style } className="panel">
          <div className="panel-body text-center">
            <div className="col-md-12 welcome-hello">
              <h1 className="text-center text-bg">Page Not Found</h1>
              <p className="welcome-greet">Sorry page was not found.
              </p>

              <Link to="/overview" className="btn btn-danger 
                btn-create btn-lg">
                  Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
}

export default PageNotFoundPage