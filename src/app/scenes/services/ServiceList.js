import React from "react";
import { Link } from "react-router";

export default class ServiceList extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            SERVICES
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li className="active">SERVICES</li>
          </ol>
        </section>

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                <i className="fa fa-th-list" aria-hidden="true"></i> List
              </header>
              <div className="panel-body table-responsive">

                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Image</th>
                      <th>Info</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td>asfasdfasd</td>
                      <td><Link to="/services/wp-app">wp-app</Link></td>
                      <td><span className="label label-success">RUNNING</span></td>
                      <td>
                        <i className="fa fa-tag fa-fw" aria-hidden="true"></i> orcinus/wordpress:latest
                      </td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-server fa-fw" aria-hidden="true"></i> Wordpress-app</li>
                          <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 1 Container</li>
                          <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volume</li>
                        </ul>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-success btn-sm list-stack-action"><i className="fa fa-play" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>

                        <div className="dropdown" style={{ display: 'inline-block' }}>
                          <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-bars" aria-hidden="true"></i>
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
                      <td>asfasdfasd</td>
                      <td><Link to="/services/wp-db">wp-db</Link></td>
                      <td><span className="label label-success">RUNNING</span></td>
                      <td>
                        <i className="fa fa-tag fa-fw" aria-hidden="true"></i> orcinus/mysql:latest
                      </td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-server fa-fw" aria-hidden="true"></i> Wordpress-app</li>
                          <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 1 Container</li>
                          <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volume</li>
                        </ul>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-warning btn-sm list-stack-action"><i className="fa fa-pause" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>

                        <div className="dropdown" style={{ display: 'inline-block' }}>
                          <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-bars" aria-hidden="true"></i>
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
                <Link to="/catalog" className="btn btn-primary btn-block">CREATE NEW SERVICE</Link> 
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}