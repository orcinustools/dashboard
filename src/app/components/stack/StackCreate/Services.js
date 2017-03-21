import React 		from "react"
import { Link } from "react-router"

export default class Services extends React.Component {
	render() {
		return (
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
                      &nbsp; wp-app
                    </td>
                    <td><span className="label label-default">STOPPED</span></td>
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
                      &nbsp; wp-db
                    </td>
                    <td><span className="label label-default">STOPPED</span></td>
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
		)
	}
}