import React 		from "react"
import { Link } from "react-router"

import PortItem from "./PortItem"

export default class Ports extends React.Component {
	
	// renderPorts(ports) {
	// 	return ports.map((port) => {
	// 		<PortItem 
	// 			protocol={port.Protocol}
	// 			publishedPort={port.PublishedPort}
	// 			targetPort={port.TargetPort} />
	// 	})
	// }

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
		)
	}
}