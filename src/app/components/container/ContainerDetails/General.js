import React from "react";
import { Link } from "react-router";
import moment from "moment"

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
                  <label className="col-sm-2 control-label">CONTAINER NAME</label>
                  <div className="col-sm-10">
                    <p className="form-control-static">
                      <i className="fa fa-cube fa-fw" aria-hidden="true"></i> { this.props.name }
                    </p>
                  </div>
                </div>
                <div className="form-group">
                	{/* TODO:= ganti nama stack sesuai dengan yang didapat dari api*/}
                  <label className="col-sm-2 control-label">STACK NAME</label>
                  <div className="col-sm-10">
                    <p className="form-control-static">
                      <i className="fa fa-server fa-fw" aria-hidden="true"></i> 
                      <Link to="/stacks/wordpress-app"> Worpress-app</Link>  
                    </p>
                  </div>
                </div>
                <div className="form-group">
              		{/* TODO:= ganti nama service sesuai dengan yang didapat dari api*/}
                  <label className="col-sm-2 control-label">SERVICE NAME</label>
                  <div className="col-sm-10">
                    <p className="form-control-static">
                      <i className="fa fa-cubes fa-fw" aria-hidden="true"></i> 
                      <Link to="/services/wp-app"> wp-app</Link>
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">IMAGE TAG</label>
                  <div className="col-sm-10">
                    <p className="form-control-static">
                      <i className="fa fa-tag fa-fw" aria-hidden="true"></i>
                       { this.props.image }
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">STATUS</label>
                  <div className="col-sm-10">
                    <p className="form-control-static">
                      <i className="fa fa-heartbeat fa-fw" aria-hidden="true"></i> Healty
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">NUM OF VOLUMES</label>
                  <div className="col-sm-10">
                    <p className="form-control-static">
                      <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 
                      { this.props.volumeTotal } Volume(s)
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">CREATED AT</label>
                  <div className="col-sm-10">
                    <p className="form-control-static">
                      <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i> 
                      { moment(this.props.created).format("dddd, MMMM Do YYYY, h:mm:ss a") }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}