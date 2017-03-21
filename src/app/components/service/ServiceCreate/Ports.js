import React from "react"
import { Link } from "react-router"

export default class Ports extends React.Component {
	render() {
		return (
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
                    <th>Container</th>
                    <th>Protocol</th>
                    <th>Publish</th>
                    <th>Host</th>
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
                                    Container
                                  </label>
                                  <div className="col-lg-8">
                                    <input type="text" className="form-control" id="inputContainerPort" placeholder="Container Port" defaultValue="3306" />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                    Protocol
                                  </label>
                                  <div className="col-lg-3">
                                    <select defaultValue="tcp" name="inputProtocol" id="inputProtocol" className="form-control">
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
                                  <label htmlFor="inputHostPort" className="col-lg-3 col-sm-3 control-label">Host</label>
                                  <div className="col-lg-8">
                                    <input type="text" className="form-control" id="inputHostPort" placeholder="Host Port" defaultValue="3306" />
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
                            Container
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
                            <select name="inputProtocol" id="inputProtocol" className="form-control">
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
                          <label htmlFor="inputHostPort" className="col-lg-3 col-sm-3 control-label">Host</label>
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
		)
	}
}