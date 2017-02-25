import React from "react";
import { Link } from "react-router";

export default class ServiceDetails extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            wp-app
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li className="active">wp-app</li>
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
                    <label className="col-sm-2 control-label">SERVICE NAME</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" name="inputServiceName" defaultValue="wp-app" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">IMAGE TAG</label>
                    <div className="col-sm-10">
                      <p className="form-control-static d-inline-block" style={{ marginRight: '10px' }}>
                        <i className="fa fa-tag fa-fw" aria-hidden="true"></i> orcinus.io/wordpress
                      </p>
                      <select name="imageTag" id="imageTag" className="selectpicker" data-width="fit">
                        <option value="latest">latest</option>
                        <option value="beta">beta</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">STACK NAME</label>
                    <div className="col-sm-10">
                      <select name="selectStackName" id="selectStackName" className="selectpicker" data-width="fit">
                        <option value="wordpress-app" data-icon="fa fa-server fa-fw"> Wordpress-app</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">STATUS</label>
                    <div className="col-sm-1">
                      <p className="form-control-static text-success">RUNNING</p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">REPLICATED</label>
                    <div className="col-sm-1">
                      <input type="number" className="form-control" defaultValue="1" min="1" max="10" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">CONTAINERS</label>
                    <div className="col-sm-10">
                      <p className="form-control-static">
                        <i className="fa fa-cube fa-fw" aria-hidden="true"></i> 1 Container
                      </p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">VOLUMES</label>
                    <div className="col-sm-10">
                      <p className="form-control-static">
                        <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volume
                      </p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">AUTO RESTART</label>
                    <div className="col-sm-4">
                      <label className="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />  Off
                      </label>
                      <label className="radio-inline"> 
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> On Failure
                      </label>
                      <label className="radio-inline"> 
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" /> Always
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">AUTO REDEPLOY</label>
                    <div className="col-sm-4">
                      <label className="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" defaultValue="yes" /> Yes
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">CREATED AT</label>
                    <div className="col-sm-10">
                      <p className="form-control-static">
                        <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i>
                        Mon Feb 13 2017 17:59:04 GMT+0700 (WIB)
                      </p>
                    </div>
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
                Containers
              </header>
              <div className="panel-body table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Container Name</th>
                      <th>Status</th>
                      <th>Image tag</th>
                      <th>Info</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i><Link to="/containers/wp-app-1"> wp-app.1</Link></td>
                      <td><span className="label label-success">RUNNING</span></td>
                      <td>
                        <i className="fa fa-tag fa-fw" aria-hidden="true"></i>orcinus/wordpress-app:latest
                      </td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volumes</li>
                        </ul>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-warning btn-sm list-stack-action"><i className="fa fa-pause" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>
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
                Volumes
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Used</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-vol">wp-vol</Link></td>
                      <td>2GB</td>
                      <td>nfs</td>
                      <td>
                        <span className="label label-success">Mounted</span>
                      </td>
                      <td>150 MB</td>
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
                <Link to="#modalAddVolume" data-toggle="modal" className="btn btn-success btn-sm list-stack-action"><i className="fa fa-plus fa-fw" aria-hidden="true"></i> Add Volume</Link>

                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="modalAddVolume" className="modal fade">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Add Volume</h4>
                      </div>
                      <div className="modal-body">
                        <form className="form-horizontal" role="form">
                          <div className="form-group">
                            <label htmlFor="inputVolumeName" className="col-lg-3 col-sm-3 control-label">
                              Volume Name
                            </label>
                            <div className="col-lg-8">
                              <select name="selectVolumeName" id="selectVolumeName" className="selectpicker" title="Select the volume name">
                                <option value="wp-vol" data-icon="fa fa-hdd-o fa-fw">
                                  wp-vol
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-lg-8 col-md-offset-3">
                              <button type="submit" className="btn btn-block btn-success">Add Volume</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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
                Mountpoint
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Volume Name</th>
                      <th>Used</th>
                      <th>Source</th>
                      <th>Target</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> <Link to="/volumes/codeBase">codeBase</Link></td>
                      <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-vol">wp-vol</Link></td>
                      <td>150 MB of 2 GB</td>
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
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <Link to="#modalAddVolumeMountpoint" data-toggle="modal" className="btn btn-success btn-sm list-stack-action"><i className="fa fa-plus fa-fw" aria-hidden="true"></i> Add Mountpoint</Link>

                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="modalAddVolumeMountpoint" className="modal fade">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Add Volume</h4>
                      </div>
                      <div className="modal-body">
                        <form className="form-horizontal" role="form">
                          <div className="form-group">
                            <label htmlFor="inputVolumeName" className="col-lg-3 col-sm-3 control-label">
                              Volume Name
                            </label>
                            <div className="col-lg-8">
                              <select name="selectVolumeName" id="selectVolumeName" className="selectpicker" title="Select the volume name">
                                <option value="wp-vol" data-icon="fa fa-hdd-o fa-fw">
                                  wp-vol
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputVolumeName" className="col-lg-3 col-sm-3 control-label">
                              Mountpoint
                            </label>
                            <div className="col-lg-8 select-container">
                              <select name="selectMountpoint" id="selectMountpoint" className="selectpicker" title="Select the mount point" >
                                <option value="mysql-data" data-icon="fa fa-code-fork fa-fw">
                                  mysql-data
                                </option>
                                <option value="mysql-data" data-icon="fa fa-code-fork fa-fw">
                                  codeBase
                                </option>
                                <option value="mysql-data" data-icon="fa fa-code-fork fa-fw">
                                  web-logs
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-lg-8 col-md-offset-3">
                              <button type="submit" className="btn btn-block btn-success">Add Volume</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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
                Ports
              </header>
              <div className="panel-body table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Container Port</th>
                      <th>Protocol</th>
                      <th>Publish</th>
                      <th>Host Port</th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td>80</td>
                      <td>TCP</td>
                      <td><span className="label label-success">YES</span></td>
                      <td>80</td>
                      <td>
                        <Link to="#modalEditPort" data-toggle="modal" className="btn btn-default btn-sm list-stack-action"><i className="fa fa-pencil" aria-hidden="true"></i></Link>

                        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="modalEditPort" className="modal fade">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                <h4 className="modal-title">Edit Port</h4>
                              </div>
                              <div className="modal-body">
                                <form className="form-horizontal" role="form">
                                  <div className="form-group">
                                    <label htmlFor="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                      Container Port
                                    </label>
                                    <div className="col-lg-8">
                                      <input type="text" className="form-control" id="inputContainerPort" placeholder="Container Port" defaultValue="80" />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                      Protocol
                                    </label>
                                    <div className="col-lg-3">
                                      <select name="inputProtocol" id="inputProtocol" className="selectpicker" data-width="fit" >
                                        <option value="tcp">TCP</option>
                                        <option value="udp">UDP</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="inputIsPublished" className="col-lg-3 col-sm-3 control-label">Publish Port</label>
                                    <div className="col-lg-8">
                                      <div className="checkbox">
                                        <label>
                                          <input type="checkbox" id="inputIsPublished" defaultChecked="true" /> Yes
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="inputHostPort" className="col-lg-3 col-sm-3 control-label">Host Port</label>
                                    <div className="col-lg-8">
                                      <input type="text" className="form-control" id="inputHostPort" placeholder="Host Port" defaultValue="80" />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="col-lg-8 col-md-offset-3">
                                      <button type="submit" className="btn btn-block btn-success">Edit Port</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <Link to="#modalAddPort" data-toggle="modal" className="btn btn-sm btn-success">
                  <i className="fa fa-plus fa-fw" aria-hidden="true"></i> Add New Port
                </Link>

                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="modalAddPort" className="modal fade">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Add New Port</h4>
                      </div>
                      <div className="modal-body">
                        <form className="form-horizontal" role="form">
                          <div className="form-group">
                            <label htmlFor="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                              Container Port
                            </label>
                            <div className="col-lg-8">
                              <input type="text" className="form-control" id="inputContainerPort" placeholder="Container Port" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                              Protocol
                            </label>
                            <div className="col-lg-3">
                              <select name="inputProtocol" id="inputProtocol" className="selectpicker" data-width="fit">
                                <option value="tcp">TCP</option>
                                <option value="udp">UDP</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputIsPublished" className="col-lg-3 col-sm-3 control-label">Publish Port</label>
                            <div className="col-lg-8">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" id="inputIsPublished" /> Yes
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputHostPort" className="col-lg-3 col-sm-3 control-label">Host Port</label>
                            <div className="col-lg-8">
                              <input type="text" className="form-control" id="inputHostPort" placeholder="Host Port" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-lg-8 col-md-offset-3">
                              <button type="submit" className="btn btn-block btn-success">Add Port</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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
                Environment Variables
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td>WORDPRESS_DB_PASSWORD</td>
                      <td>root</td>
                      <td>
                        <i className="fa fa-minus-square" aria-hidden="true"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-plus-square fa-2x" aria-hidden="true" onClick={ () => alert("Clicked") }></i>
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