import React from "react";
import { Link } from "react-router";

export default class StackCreate extends React.Component {
	render() {
		return (
			<div>
        <div className="row">
          <div className="col-md-6 pull-right">
            <div className="btn-group btn-group-justified" style={{ marginBottom: '10px' }} role="group" aria-label="...">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default">
                  <i className="fa fa-check fa-fw" aria-hidden="true"></i>
                  <span className="visible-lg-inline">Create</span>
                </button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-info">
                  <i className="fa fa-rocket fa-fw" aria-hidden="true"></i> 
                  <span className="visible-lg-inline">Create &amp; Deploy</span>
                </button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-danger">
                  <i className="fa fa-times fa-fw" aria-hidden="true"></i>
                  <span className="visible-lg-inline">Cancel</span>
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
                    <label className="col-sm-2 control-label">STACK NAME</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" placeholder="Enter the stack name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">IMAGE</label>
                    <div className="col-sm-9">
                      <p className="form-control-static d-inline-block" style={{ marginRight: '10px'}}>
                        <i className="fa fa-tag fa-fw" aria-hidden="true"></i> orcinus.io/wordpress
                      </p>
                      <select name="image-tag" id="image-tag" className="selectpicker" data-width="fit">
                        <option value="latest">latest</option>
                        <option value="3.6.5-apache">3.6.5-apache</option>
                        <option value="4.0.0-apache">4.0.0-apache</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">AUTO RESTART</label>
                    <div className="col-sm-4">
                      <label className="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />  Off
                      </label>
                      <label className="radio-inline"> 
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" /> On Failure
                      </label>
                      <label className="radio-inline"> 
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" /> Always
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
                </div>
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
                        <Link to="/services/wp-app">wp-app</Link>
                      </td>
                      <td><span className="label label-default">NOT RUNNING</span></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 1 Container</li>
                          <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volumes</li>
                        </ul>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-default btn-sm list-stack-action"><i className="fa fa-play" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
                        <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>

                        <div className="dropdown" style={{ display: 'inline-block' }}>
                          <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                          </button>
                          
                          <ul className="dropdown-menu dropdown-min">
                            <li><Link to="#">Edit</Link></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i>
                        <Link to="/services/wp-db">wp-db</Link>
                      </td>
                      <td><span className="label label-default">NOT RUNNING</span></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-cube fa-fw" aria-hidden="true"></i> 1 Container</li>
                          <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volumes</li>
                        </ul>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-default btn-sm list-stack-action"><i className="fa fa-play" aria-hidden="true"></i></Link>
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
                <Link to="#modalAddService" data-toggle="modal" className="btn btn-success btn-sm list-stack-action"><i className="fa fa-plus fa-fw" aria-hidden="true"></i> Add Service</Link>

                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="modalAddService" className="modal fade">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Add Service</h4>
                      </div>
                      <div className="modal-body">
                        <form className="form-horizontal" role="form">
                          <h4 className="form-group-header" style={{ marginTop: '10px' }}>Service Section</h4>
                          <hr width="90%" className="hr-small" />
                          <div className="form-group">
                            <label htmlFor="inputServiceName" className="col-lg-3 control-label">Service Name</label>
                            <div className="col-lg-8">
                              <input type="text" className="form-control" placeholder="Enter the service name" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputVolumeName" className="col-lg-3 col-sm-3 control-label">
                              Image
                            </label>
                            <div className="col-lg-8">
                              <select name="selectServiceImage" id="selectServiceImage" className="selectpicker" title="Select the image" data-width="fit">
                                <optgroup label="CMS">
                                  <option value="orcinus.io/wordpress" data-icon="fa fa-tag fa-fw">
                                    orcinus.io/wordpress
                                  </option>
                                  <option value="orcinus.io/joomla" data-icon="fa fa-tag fa-fw">
                                    orcinus.io/joomla
                                  </option>
                                  <option value="orcinus.io/drupal" data-icon="fa fa-tag fa-fw">
                                    orcinus.io/drupal
                                  </option>
                                </optgroup>
                                <optgroup label="Language Stack">
                                  <option value="orcinus.io" data-icon="fa fa-tag fa-fw">
                                    orcinus.io/php
                                  </option>
                                </optgroup>
                                <optgroup label="Database">
                                  <option value="orcinus.io/mysql" data-icon="fa fa-tag fa-fw">
                                    orcinus.io/mysql
                                  </option>
                                  <option value="orcinus.io/postgresql" data-icon="fa fa-tag fa-fw">
                                    orcinus.io/postgresql
                                  </option>
                                  <option value="orcinus.io/redis" data-icon="fa fa-tag fa-fw">
                                    orcinus.io/redis
                                  </option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="selectServiceImageTag" className="col-lg-3 control-label">tag</label>
                            <div className="col-lg-8">
                              <select defaultValue="latest" name="selectServiceImageTag" id="selectServiceImageTag" className="selectpicker" data-width="fit">
                                <option value="latest">
                                  latest
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-3 control-label">NUM. OF CONTAINER</label>
                            <div className="col-sm-2">
                              <input type="number" className="form-control" min="1" max="10" defaultValue="1" />
                            </div>
                          </div>
                          <h4 className="form-group-header">Volume Section</h4>
                          <hr width="90%" className="hr-small" />
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
                              <select defaultValue={[]} name="selectMountpoint" id="selectMountpoint" className="selectpicker" multiple title="Select the mount point" >
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
                              <button type="submit" className="btn btn-block btn-success">Add Service</button>
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
                Volumes
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Volume Name</th>
                      <th>Mountpoint</th>
                      <th>Type</th>
                      <th>Size</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> wp-vol</td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> mysql-data</li>
                        </ul>
                      </td>
                      <td>NFS</td>
                      <td>2GB</td>
                      <td>
                        <Link to="#modalEditVolume" data-toggle="modal" className="btn btn-default btn-sm list-stack-action"><i className="fa fa-pencil" aria-hidden="true"></i></Link>

                        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="modalEditVolume" className="modal fade">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                <h4 className="modal-title">Edit Volume</h4>
                              </div>
                              <div className="modal-body">
                                <form className="form-horizontal" role="form">
                                  <div className="form-group">
                                    <label htmlFor="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                      Volume Name
                                    </label>
                                    <div className="col-lg-8">
                                      <select defaultValue="wp-vol" name="selectVolumeName" id="selectVolumeName" className="selectpicker">
                                        <option value="wp-vol" data-icon="fa fa-hdd-o fa-fw">
                                          wp-vol
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                      Mountpoint
                                    </label>
                                    <div className="col-lg-8">
                                      <select defaultValue={["mysql-data"]} name="inputProtocol" id="inputProtocol" className="selectpicker" multiple title="Select the mount point" >
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
                                      <button type="submit" className="btn btn-block btn-success">Edit Volume</button>
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
                            <label htmlFor="inputVolumeName" className="col-lg-3 col-sm-3 control-label">
                              Mountpoint
                            </label>
                            <div className="col-lg-8 select-container">
                              <select defaultValue={["mysql-data"]} name="selectMountpoint" id="selectMountpoint" className="selectpicker" multiple title="Select the mount point" >
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
			</div>
		);
	}
}