import React from "react"
import { Link } from "react-router"

export default class General extends React.Component {
	render() {
		return (
	    <div className="row">
	      <div className="col-xs-12">
	        <div className="panel">
	          <header className="panel-heading">
	            General
	          </header>
	          <div className="panel-body">
	            <div className="form-horizontal">
	              <div className="form-group">
	                <label className="col-sm-2 control-label">NAME</label>
	                <p className="form-control-static d-inline-block">
	                  Wordpress-app
	                </p>
	              </div>
	              <div className="form-group">
	                <label className="col-sm-2 control-label">CREATED AT</label>
	                <p className="form-control-static d-inline-block">
	                  Mon Feb 13 2017 17:59:04 GMT+0700 (WIB)
	                </p>
	              </div>
	            </div>
	          </div>
	          <div className="panel-footer">
	            <button className="btn btn-primary">
	              <i className="fa fa-download fa-fw" aria-hidden="true"></i>
	              &nbsp; Download Orcinus File
	            </button>
	          </div>
	        </div>
	      </div>
	    </div>
		)
	}
}