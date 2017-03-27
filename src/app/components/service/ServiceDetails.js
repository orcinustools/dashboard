import React 		from "react"
import { Link } from "react-router"
import Select 	from "react-select"

import ActionButton 	from "./ServiceDetails/ActionButton"
import General 				from "./ServiceDetails/General"
import Containers 		from "./ServiceDetails/Containers"
import Volumes 				from "./ServiceDetails/Volumes"
import Mountpoints 		from "./ServiceDetails/Mountpoints"
import Ports 					from "./ServiceDetails/Ports"
import Endpoints 			from "./ServiceDetails/Endpoints"
import Environtments 	from "./ServiceDetails/Environtments"

const volOptions = [
  {value: 'wp-vol', label: 'wp-vol'}
]

const mountOptions = [
	{ value: "mysql-data", label: "mysql-data" },
	{ value: "web-logs", label: "web-logs" },
	{ value: "codeBase", label: "codeBase" }
]

const protoOptions = [
	{ value: "tcp", label: "TCP" },
	{ value: "udp", label: "UDP" }
]

export default class ServiceDetails extends React.Component {

	componentWillMount() {
		this.props.fetchService()
	}

	logChange(val) {
		console.log("Selected :", val)
	}	

	render() {
		
		const { service, fetching, fetched, error } = this.props

		return (
			<div>
				<ActionButton />

        {/* General Section */}
				<div className="row">
				  <div className="col-xs-12">
				    <div className="panel">
				      <header className="panel-heading">
				        General
				      </header>
				      <div className="panel-body">
								{ fetching &&
									<div style={{ textAlign: "center", minHeight: "100px" }}>
										<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>
									</div>
								}

								{ fetched && 
									<General 
										name={service.Spec.Name}
										created={service.CreatedAt}
										updated={service.UpatedAt}
										replicated={service.Spec.Mode.Replicated.Replicas} />
								}

								{ error &&
									<h3 style={{ color: "#898989", textAlign: "center", minHeight: "100px" }}>
										SERVICE NOT FOUND
									</h3>
								}
				      </div>
				    </div>
				  </div>
				</div>

       {/* Container List Section */}
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
				              <th>Name</th>
				              <th>Status</th>
				              <th>Image</th>
				              <th>Info</th>
				              <th>Action</th>
				            </tr>
				          </thead>
				          { error &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="5" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<h3>CONTAINERS NOT FOUND</h3>
												</td>
											</tr>			          		
				          	</tbody>
				          }

				          { fetching &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="5" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>	
												</td>
											</tr>			          		
				          	</tbody>
				          }

				          { fetched &&
										<Containers />
				          }
				        </table>
				      </div>
				    </div>
				  </div>
				</div>

				{/* Volumes Section */}
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
				              <th>Status</th>
				              <th>Used</th>
				              <th></th>
				            </tr>
				          </thead>
				          { error &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="5" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<h3>VOLUMES NOT FOUND</h3>
												</td>
											</tr>			          		
				          	</tbody>
				          }

				          { fetching &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="5" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>	
												</td>
											</tr>			          		
				          	</tbody>
				          }

									{ fetched &&
										<Volumes />
									}
				        </table>
				      </div>
				      { fetched && 
					      <div className="panel-footer">
					        <Link
						        	to="#modalAddVolume"
						        	data-toggle="modal"
						        	className="btn btn-success btn-sm list-stack-action">
					        	<i className="fa fa-plus fa-fw" aria-hidden="true"></i>  
						        &nbsp; Add Volume
						      </Link>

					        <div
						        	aria-hidden="true"
						        	aria-labelledby="myModalLabel"
						        	role="dialog"
						        	tabIndex="-1"
						        	id="modalAddVolume"
						        	className="modal fade">
					          <div className="modal-dialog">
					            <div className="modal-content">
					              <div className="modal-header">
					                <button
						                	aria-hidden="true"
						                	data-dismiss="modal"
						                	className="close"
						                	type="button">
					                	×
				                	</button>
					                <h4 className="modal-title">Add Volume</h4>
					              </div>
					              <div className="modal-body">
					                <form className="form-horizontal" role="form">
					                  <div className="form-group">
					                    <label
						                    	htmlFor="inputVolumeName"
						                    	className="col-lg-3 col-sm-3 control-label">
					                      Volume Name
					                    </label>
					                    <div className="col-lg-8">
					                    	<Select
					                    		name="volumeName"
					                    		options={volOptions}
					                    		onChange={this.logChange} />
					                    </div>
					                  </div>
					                  <div className="form-group">
					                    <div className="col-lg-8 col-md-offset-3">
					                      <button
						                      	type="submit"
						                      	className="btn btn-block btn-success">
					                      	Add Volume
					                      </button>
					                    </div>
					                  </div>
					                </form>
					              </div>
					            </div>
					          </div>
					        </div>
					      </div>
				      }
				    </div>
				  </div>
				</div>


				{/* Mountpoints Section */}
				<div className="row">
				  <div className="col-xs-12">
				    <div className="panel">
				      <header className="panel-heading">
				        Mountpoints
				      </header>
				      <div className="panel-body">
				        <table className="table table-hover">
				          <thead>
				            <tr>
				              <th>Name</th>
				              <th>Volume</th>
				              <th>Used</th>
				              <th>Source</th>
				              <th>Target</th>
				              <th></th>
				            </tr>
				          </thead>
				          { error &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="6" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<h3>MOUNTPOINTS NOT FOUND</h3>
												</td>
											</tr>			          		
				          	</tbody>
				          }

				          { fetching &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="6" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>	
												</td>
											</tr>			          		
				          	</tbody>
				          }

				          { fetched &&
										<Mountpoints />
				          }
				        </table>
				      </div>
				      { fetched &&
					      <div className="panel-footer">
					        <Link 
					     				to="#modalAddVolumeMountpoint" 
					        		data-toggle="modal" 
					        		className="btn btn-success btn-sm list-stack-action">
					        	<i className="fa fa-plus fa-fw" aria-hidden="true"></i>
					        	&nbsp; Add Mountpoint
				        	</Link>

					        <div
					        		aria-hidden="true" 
				        			aria-labelledby="myModalLabel" 
				        			role="dialog" tabIndex="-1" 
				        			id="modalAddVolumeMountpoint" 
				        			className="modal fade">
					          <div className="modal-dialog">
					            <div className="modal-content">
					              <div className="modal-header">
					                <button 
					                	aria-hidden="true" 
					                	data-dismiss="modal"
					                	className="close" 
					                	type="button">×</button>
					                <h4 className="modal-title">Add Volume</h4>
					              </div>
					              <div className="modal-body">
					                <form className="form-horizontal" role="form">
					                  <div className="form-group">
					                    <label 
					                    		htmlFor="inputVolumeName"
					                    		className="col-lg-3 col-sm-3 control-label">
					                      Volume
					                    </label>
					                    <div className="col-lg-8">
					                    	<Select
					                    		name="Volume"
					                    		options={volOptions}
					                    		onChange={this.logChange} />
					                    </div>
					                  </div>
					                  <div className="form-group">
					                    <label 
					                    		htmlFor="inputVolumeName"
					                    		className="col-lg-3 col-sm-3 control-label">
					                      Mountpoint
					                    </label>
					                    <div className="col-lg-8 select-container">
					                    	<Select
					                    		name="mountpoints"
					                    		options={mountOptions}
					                    		onChange={this.logChange} />
					                    </div>
					                  </div>
					                  <div className="form-group">
					                    <div className="col-lg-8 col-md-offset-3">
					                      <button 
					                      		type="submit"
					                      		className="btn btn-block btn-success">
					                      	Add Volume
				                      	</button>
					                    </div>
					                  </div>
					                </form>
					              </div>
					            </div>
					          </div>
					        </div>
					      </div>
				      }
				    </div>
				  </div>
				</div>				


				{/* Ports Section */}
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
				          { error &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="4" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<h3>PORTS NOT FOUND</h3>
												</td>
											</tr>			          		
				          	</tbody>
				          }

				          { fetching &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="4" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>	
												</td>
											</tr>			          		
				          	</tbody>
				          }

				          { fetched &&
										<Ports />
				          }
				        </table>
				      </div>
				      { fetched &&
					      <div className="panel-footer">
					        <Link
					        		to="#modalAddPort"
					        		data-toggle="modal"
					        		className="btn btn-sm btn-success">
					          <i className="fa fa-plus fa-fw" aria-hidden="true"></i>
					          	&nbsp; Add New Port
					        </Link>

					        <div 
						       		aria-hidden="true"
						       		aria-labelledby="myModalLabel"
						       		role="dialog"
						       		tabIndex="-1"
						       		id="modalAddPort"
						       		className="modal fade">
					          <div className="modal-dialog">
					            <div className="modal-content">
					              <div className="modal-header">
					                <button
						                	aria-hidden="true"
						                	data-dismiss="modal"
						                	className="close"
						                	type="button">
					                	×
				                	</button>
					                <h4 className="modal-title">Add New Port</h4>
					              </div>
					              <div className="modal-body">
					                <form className="form-horizontal" role="form">
					                  <div className="form-group">
					                    <label 
					                    		htmlFor="inputContainerPort"
					                    		className="col-lg-3 col-sm-3 control-label">
					                      Container Port
					                    </label>
					                    <div className="col-lg-8">
					                      <input
					                      	type="text"
					                      	className="form-control"
					                      	id="inputContainerPort"
					                      	placeholder="Container Port" />
					                    </div>
					                  </div>
					                  <div className="form-group">
					                    <label
						                    	htmlFor="inputContainerPort"
						                    	className="col-lg-3 col-sm-3 control-label">
					                      Protocol
					                    </label>
					                    <div className="col-lg-3">
				                      	<Select
				                      		name="protocol"
				                      		options={protoOptions}
				                      		onChange={this.logChange} />
					                    </div>
					                  </div>
					                  <div className="form-group">
					                    <label
						                    	htmlFor="inputIsPublished"
						                    	className="col-lg-3 col-sm-3 control-label">
					                    	Publish Port
					                    </label>
					                    <div className="col-lg-8">
					                      <div className="checkbox">
					                        <label>
					                          <input
						                          	type="checkbox"
						                          	id="inputIsPublished" />
					                          	&nbsp; Yes
					                        </label>
					                      </div>
					                    </div>
					                  </div>
					                  <div className="form-group">
					                    <label
						                    	htmlFor="inputHostPort"
						                    	className="col-lg-3 col-sm-3 control-label">
						                    Host Port
						                   </label>
					                    <div className="col-lg-8">
					                      <input
					                      	type="text"
					                      	className="form-control"
					                      	id="inputHostPort"
					                      	placeholder="Host Port" />
					                    </div>
					                  </div>
					                  <div className="form-group">
					                    <div className="col-lg-8 col-md-offset-3">
					                      <button
						                      	type="submit"
						                      	className="btn btn-block btn-success">
					                      	Add Port
					                      </button>
					                    </div>
					                  </div>
					                </form>
					              </div>
					            </div>
					          </div>
					        </div>
					      </div>
				      }
				    </div>
				  </div>
				</div>

				{/* Variables Section */}
				<div className="row">
				  <div className="col-xs-12">
				    <div className="panel">
				      <header className="panel-heading">
				        Variables
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
				          { error &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="3" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<h3>VARIABLES NOT FOUND</h3>
												</td>
											</tr>			          		
				          	</tbody>
				          }

				          { fetching &&
				          	<tbody className="table-stack-list">
											<tr>
												<td colSpan="3" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
													<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>	
												</td>
											</tr>			          		
				          	</tbody>
				          }

				          { fetched &&
										<Environtments />
				          }
				        </table>
				      </div>
				    </div>
				  </div>
				</div>

			</div>
		)
	}
}

