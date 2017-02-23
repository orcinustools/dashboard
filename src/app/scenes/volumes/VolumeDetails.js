import React from "react";
import { Link } from "react-router";

export default class VolumeDetails extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            wp-vol
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/volumes">VOLUMES</Link></li>
            <li className="active">wp-vol</li>
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
                <button type="button" className="btn btn-info">
                  <i className="fa fa-cloud-download fa-fw" aria-hidden="true"></i>
                  <span className="visible-lg-inline">Backup Volume</span>
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
                    <div className="col-sm-2"><b>VOLUME NAME</b></div>
                    <div className="col-sm-10">wp-vol</div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-2"><b>SIZE</b></div>
                    <div className="col-sm-10">
                      2 GB
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-2"><b>TYPE</b></div>
                    <div className="col-sm-10">
                      NFS
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-2"><b>MOUNTPOINT</b></div>
                    <div className="col-sm-10">3</div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-2"><b>CREATED AT</b></div>
                    <div className="col-sm-10">Mon Feb 13 2017 17:59:04 GMT+0700 (WIB)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Mountpoint List
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Mountpoint Name</th>
                      <th>Used</th>
                      <th>Source</th>
                      <th>Target</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> <Link to="/volumes/codeBase">codeBase</Link></td>
                      <td>2 MB of 2 GB</td>
                      <td>/wp-vol/src/</td>
                      <td>/var/www/wp-app/</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> <Link to="/volumes/web-logs">web-logs</Link></td>
                      <td>2 MB of 2 GB</td>
                      <td>/wp-vol/logs/</td>
                      <td>/var/nginx/logs/</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> <Link to="/volumes/mysql-data">mysql-data</Link></td>
                      <td>2 MB of 2 GB</td>
                      <td>/wp-vol/mysql-data/ </td>
                      <td>/var/lib/mysql/</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <button className="btn btn-success">
                  <i className="fa fa-plus fa-fw" aria-hidden="true"></i>  Add New Mountpoint
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Stack List
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Stack Name</th>
                      <th>Mountpoint</th>
                      <th>Status</th>
                      <th>Used</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td>
                        <i className="fa fa-server fa-fw" aria-hidden="true"></i>
                        <Link to="volume_details.html">Wordpress-app</Link>
                      </td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> codeBase</li>
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> web-logs</li>
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> mysql-data</li>
                        </ul>
                      </td>
                      <td>
                        <span className="label label-success">Mounted</span>
                      </td>
                      <td>300 MB of 2 GB</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Service List
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Stack Name</th>
                      <th>Mountpoint</th>
                      <th>Status</th>
                      <th>Used</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-app"> wp-app</Link></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> codeBase</li>
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> web-logs</li>
                        </ul>
                      </td>
                      <td>
                        <span className="label label-success">Mounted</span>
                      </td>
                      <td>150 MB of 2 GB</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-db">wp-db</Link></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> mysql-data</li>
                        </ul>
                      </td>
                      <td>
                        <span className="label label-success">Mounted</span>
                      </td>
                      <td>150 MB of 2 GB</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Container List
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Container Name</th>
                      <th>Mountpoint</th>
                      <th>Status</th>
                      <th>Used</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-cube fa-fw" aria-hidden="true"></i> <Link to="/containers/wp-app-1">wp-app.1</Link></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> codeBase</li>
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> web-logs</li>
                        </ul>
                      </td>
                      <td>
                        <span className="label label-success">Mounted</span>
                      </td>
                      <td>150 MB of 2 GB</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-cube fa-fw" aria-hidden="true"></i> <Link to="/containers/wp-db-1">wp-db.1</Link></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> mysql-data</li>
                        </ul>
                      </td>
                      <td>
                        <span className="label label-success">Mounted</span>
                      </td>
                      <td>150 MB of 2 GB</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
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