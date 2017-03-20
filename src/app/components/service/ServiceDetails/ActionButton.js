import React from "react"
import { Link } from "react-router"

export default class ActionButton extends React.Component {
	render() {
		return (
			<div className="row">
			  <div className="col-md-6 pull-right">
			    <div className="btn-group btn-group-justified" style={{ marginBottom: '10px' }} role="group" aria-label="...">

			      <div className="btn-group" role="group">
			        <button type="button" className="btn btn-default">
			          <i className="fa fa-pencil-square-o fa-fw" aria-hidden="true"></i>
			          <span className="visible-lg-inline">Update</span>
			        </button>
			      </div>
			      <div className="btn-group" role="group">
			        <button type="button" className="btn btn-warning">
			          <i className="fa fa-pause fa-fw" aria-hidden="true"></i>
			          <span className="visible-lg-inline">Pause</span>
			        </button>
			      </div>

			      <div className="btn-group" role="group">
			        <button type="button" className="btn btn-info">
			          <i className="fa fa-refresh fa-fw" aria-hidden="true"></i>
			          <span className="visible-lg-inline">Redeploy</span>
			        </button>
			      </div>

			      <div className="btn-group" role="group">
			        <button type="button" className="btn btn-danger">
			          <i className="fa fa-trash-o fa-fw" aria-hidden="true"></i>
			          <span className="visible-lg-inline">Terminate</span>
			        </button>
			      </div>

			    </div>
			  </div>
			</div>
		)
	}
}