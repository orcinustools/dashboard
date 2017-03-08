/**
 * Smart component for Stack List Page
 */
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import { fetchStack } from "../../actions/stackActions";

@connect((store) => {
  return {
    stacks: store.stackState
  };
})

export default class StackListContainer extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchStack());
	}

	render() {
		return (
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
                    <th>Info</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                  <tr>
                    <td>asfasdfasd</td>
                    <td><Link to="/stacks/wordpress-app">wordpress-app</Link></td>
                    <td><span className="label label-success">RUNNING</span></td>
                    <td>
                      <ul className="list-child">
                        <li><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> 2 Services</li>
                        <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 2 Container</li>
                        <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 2 Volumes</li>
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
                  <tr>
                    <td>asdfqwerqwre</td>
                    <td><Link to="/stacks/rails-app">rails-app</Link></td>
                    <td><span className="label label-warning">IDLE</span></td>
                    <td>
                      <ul className="list-child">
                        <li><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> 2 Services</li>
                        <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 2 Container</li>
                        <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 2 Volumes</li>
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
                    <td>qwerqwerasdfad</td>
                    <td><Link to="/stacks/python-app">python-app</Link></td>
                    <td><span className="label label-danger">TERMINATED</span></td>
                    <td>
                      <ul className="list-child">
                        <li><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> 2 Services</li>
                        <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 2 Container</li>
                        <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 2 Volumes</li>
                      </ul>
                    </td>
                    <td>
                      <Link to="#" className="btn btn-default btn-sm list-stack-action"><i className="fa fa-play" aria-hidden="true"></i></Link>
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
                    <td>183sdfsadfsdfsd</td>
                    <td><Link to="/stacks/node-app">node-app</Link></td>
                    <td><span className="label label-info">CREATED</span></td>
                    <td>
                      <ul className="list-child">
                        <li><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> 2 Services</li>
                        <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 2 Container</li>
                        <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 2 Volumes</li>
                      </ul>
                    </td>
                    <td>
                      <Link to="#" className="btn btn-default btn-sm list-stack-action"><i className="fa fa-play" aria-hidden="true"></i></Link>
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
              <Link to="/catalog" className="btn btn-primary btn-block">CREATE NEW STACK</Link>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
