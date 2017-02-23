import React from "react";
import { Link } from "react-router";

export default class ServiceCreate extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            SERVICE WIZARD
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><a href="/">HOME</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li className="active">WIZARD</li>
          </ol>
        </section>

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
                    <label className="col-sm-2 control-label">IMAGE</label>
                    <div className="col-sm-10">
                      <p className="form-control-static d-inline-block" style={{ marginRight: '10px' }}>
                       <i className="fa fa-tag fa-fw" aria-hidden="true"></i> orcinus.io/mysql
                      </p>
                      <select name="image-tag" id="image-tag" className="selectpicker" data-width="fit">
                        <option value="latest">latest</option>
                        <option value="5.6">5.6</option>
                        <option value="5.7">5.7</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">SERVICE NAME</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder="Service Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">ADD TO STACK</label>
                    <div className="col-sm-10">
                      <select name="stack" id="stack" className="selectpicker" title="Select a Stack">
                        <option value="wordpress-app" data-icon="fa fa-server fa-fw"> Wordpress-app</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">NUM. OF CONTAINER</label>
                    <div className="col-sm-1">
                      <input type="number" className="form-control" min="1" max="10" value="1" />
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
                        <input type="checkbox" id="inlineCheckbox1" value="yes" /> Yes
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
                      <td>3306</td>
                      <td>TCP</td>
                      <td><span className="label label-success">YES</span></td>
                      <td>3306</td>
                      <td>
                        <a href="#modalEditPort" data-toggle="modal" className="btn btn-default btn-sm list-stack-action"><i className="fa fa-pencil" aria-hidden="true"></i></a>

                        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="modalEditPort" className="modal fade">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                <h4 className="modal-title">Edit Port</h4>
                              </div>
                              <div className="modal-body">
                                <form className="form-horizontal" role="form">
                                  <div className="form-group">
                                    <label for="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                      Container Port
                                    </label>
                                    <div className="col-lg-8">
                                      <input type="text" className="form-control" id="inputContainerPort" placeholder="Container Port" value="3306" />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label for="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                      Protocol
                                    </label>
                                    <div className="col-lg-3">
                                      <select name="inputProtocol" id="inputProtocol" className="selectpicker" data-width="fit">
                                        <option value="tcp" selected="true">TCP</option>
                                        <option value="udp">UDP</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label for="inputIsPublished" className="col-lg-3 col-sm-3 control-label">Publish Port</label>
                                    <div className="col-lg-8">
                                      <div className="checkbox">
                                        <label>
                                          <input type="checkbox" id="inputIsPublished" checked="true" /> Yes
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label for="inputHostPort" className="col-lg-3 col-sm-3 control-label">Host Port</label>
                                    <div className="col-lg-8">
                                      <input type="text" className="form-control" id="inputHostPort" placeholder="Host Port" value="3306" />
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

                        <a href="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <a href="#modalAddPort" data-toggle="modal" className="btn btn-sm btn-success">
                  Add New Port
                </a>

                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="modalAddPort" className="modal fade">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Add New Port</h4>
                      </div>
                      <div className="modal-body">
                        <form className="form-horizontal" role="form">
                          <div className="form-group">
                            <label for="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                              Container Port
                            </label>
                            <div className="col-lg-8">
                              <input type="text" className="form-control" id="inputContainerPort" placeholder="Container Port" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label for="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
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
                            <label for="inputIsPublished" className="col-lg-3 col-sm-3 control-label">Publish Port</label>
                            <div className="col-lg-8">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" id="inputIsPublished" /> Yes
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label for="inputHostPort" className="col-lg-3 col-sm-3 control-label">Host Port</label>
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
                        <a href="#modalEditVolume" data-toggle="modal" className="btn btn-default btn-sm list-stack-action"><i className="fa fa-pencil" aria-hidden="true"></i></a>

                        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="modalEditVolume" className="modal fade">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                <h4 className="modal-title">Edit Volume</h4>
                              </div>
                              <div className="modal-body">
                                <form className="form-horizontal" role="form">
                                  <div className="form-group">
                                    <label for="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                      Volume Name
                                    </label>
                                    <div className="col-lg-8">
                                      <select name="selectVolumeName" id="selectVolumeName" className="selectpicker">
                                        <option value="wp-vol" selected="true" data-icon="fa fa-hdd-o fa-fw">
                                          wp-vol
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label for="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                      Mountpoint
                                    </label>
                                    <div className="col-lg-8">
                                      <select name="inputProtocol" id="inputProtocol" className="selectpicker" multiple title="Select the mount point" >
                                        <option value="mysql-data" selected="true" data-icon="fa fa-code-fork fa-fw">
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

                        <a href="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <a href="#modalAddVolume" data-toggle="modal" className="btn btn-success btn-sm list-stack-action"><i className="fa fa-plus fa-fw" aria-hidden="true"></i> Add Volume</a>

                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="modalAddVolume" className="modal fade">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Add Volume</h4>
                      </div>
                      <div className="modal-body">
                        <form className="form-horizontal" role="form">
                          <div className="form-group">
                            <label for="inputVolumeName" className="col-lg-3 col-sm-3 control-label">
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
                            <label for="inputVolumeName" className="col-lg-3 col-sm-3 control-label">
                              Mountpoint
                            </label>
                            <div className="col-lg-8 select-container">
                              <select name="selectMountpoint" id="selectMountpoint" className="selectpicker" multiple title="Select the mount point" >
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
                      <td>ROOT_DB_PASSWORD **</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info">MYSQL_DATABASE</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info">MYSQL_USER</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info">MYSQL_PASSWORD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>     
                    <tr>
                      <td className="text-info">MYSQL_ALLOW_EMPTY_PASSWORD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info">MYSQL_RANDOM_ROOT_PASSWORD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info">MYSQL_ONETIME_PASSWORD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
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
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <span>** REQUIRED</span>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}