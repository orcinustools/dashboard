import React from "react";
import { Link } from "react-router";

export default class StackDetails extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            Wordpress-app
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="index.html">HOME</Link></li>
            <li><Link to="stack_list.html">STACKS</Link></li>
            <li className="active">Wordpress-app</li>
          </ol>
        </section>

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

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                General
              </header>
              <div className="panel-body">
                <div className="form-horizontal">
                  <div className="form-group">
                    <div className="col-sm-2"><b>STACK NAME</b></div>
                    <div className="col-sm-10">Wordpress-app</div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-2"><b>CREATED AT</b></div>
                    <div className="col-sm-10">Mon Feb 13 2017 17:59:04 GMT+0700 (WIB)</div>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <button className="btn btn-primary"><i className="fa fa-download fa-fw" aria-hidden="true"></i>  Download Orcinus File</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Services
              </header>
              <div className="panel-body table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Service Name</th>
                      <th>Status</th>
                      <th>Info</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> 
                        <Link to="service_details.html">wp-app</Link>
                      </td>
                      <td><span className="label label-success">RUNNING</span></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 1 Container</li>
                          <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volumes</li>
                        </ul>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-warning btn-sm list-stack-action"><i className="fa fa-pause" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>

                        <div className="dropdown" style={{ display: 'inline-block' }}>
                          <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                          </button>
                          
                          <ul className="dropdown-menu dropdown-min">
                            <li>
                              <Link to="#">Update</Link></li>
                            <li><Link to="#">Edit</Link></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i>
                        <Link to="service_details.html">wp-db</Link>
                      </td>
                      <td><span className="label label-success">RUNNING</span></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 1 Container</li>
                          <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volumes</li>
                        </ul>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-warning btn-sm list-stack-action"><i className="fa fa-pause" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>

                        <div className="dropdown" style={{ display: 'inline-block' }}>
                          <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                          </button>
                          
                          <ul className="dropdown-menu dropdown-min">
                            <li>
                              <Link to="#">Update</Link></li>
                            <li><Link to="#">Edit</Link></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <Link to="katalog_list.html" className="btn btn-success"><i className="fa fa-plus fa-fw" aria-hidden="true"></i>  Add New Service</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Endpoints
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Protocol/Port</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-link fa-fw" aria-hidden="true"></i> wp-app</td>
                      <td>tcp/80</td>
                      <td><Link to="#">http://wp-app.wordpres-app.12334.app.orcinus.io:80</Link></td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-link fa-fw" aria-hidden="true"></i> wp-db</td>
                      <td>tcp/80</td>
                      <td><Link to="#">http://wp-app.wordpres-app.12334.app.orcinus.io:80</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       </div>
		);
	}
}