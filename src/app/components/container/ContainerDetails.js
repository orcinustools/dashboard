import React from "react";
import { Link } from "react-router";
import moment from "moment";

export default class ContainerDetails extends React.Component {

  componentDidMount() {
    this.props.fetchContainer();
  }

	render() {
    const { container, fetching } = this.props;

    if (fetching) {
      return <h1>Fetching</h1>;
    }

    return (
			<div>
        <div className="row">
          <div className="col-md-4 pull-right">
            <div className="btn-group btn-group-justified" style={{ marginBottom: '10px' }} role="group" aria-label="...">

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
                    <label className="col-sm-2 control-label">CONTAINER NAME</label>
                    <div className="col-sm-10">
                      <p className="form-control-static">
                        <i className="fa fa-cube fa-fw" aria-hidden="true"></i> { container.Name }
                      </p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">STACK NAME</label>
                    <div className="col-sm-10">
                      <p className="form-control-static">
                        <i className="fa fa-server fa-fw" aria-hidden="true"></i> 
                        <Link to="/stacks/wordpress-app"> Worpress-app</Link>  
                      </p>
                    </div>
                  </div>
                  <div className="form-group">
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
                         { container.Config && container.Config.Image }
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
                        { container.Mounts && container.Mounts.length } Volume(s)
                      </p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">CREATED AT</label>
                    <div className="col-sm-10">
                      <p className="form-control-static">
                        <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i> 
                        { moment(container.Created).format("dddd, MMMM Do YYYY, h:mm:ss a") }
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
                Volumes
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Type</th>
                      <th>Source</th>
                      <th>Target</th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-vol">wp-vol</Link></td>
                      <td>2GB</td>
                      <td>nfs</td>
                      <td>/data/logs</td>
                      <td>/var/nginx/logs</td>
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
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> <Link to="/volumes/codeBase">codeBase</Link></td>
                      <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-vol">wp-vol</Link></td>
                      <td>150 MB of 2 GB</td>
                      <td>/wp-vol/src/</td>
                      <td>/var/www/wp-app/</td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-logs">wp-logs</Link></td>
                      <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-vol">wp-vol</Link></td>
                      <td>150 MB of 2 GB</td>
                      <td>/wp-vol/wp-logs/</td>
                      <td>/var/log/nginx/</td>
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
                                      <select name="inputProtocol" id="inputProtocol" className="selectpicker" data-width="fit">
                                        <option value="tcp" defaultValue="true">TCP</option>
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
                Environment Variables
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td>WORDPRESS_DB_PASSWORD</td>
                      <td>root</td>
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