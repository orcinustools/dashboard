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

import Notifications from 'react-notification-system-redux'

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

	constructor(props) {
		super(props);
		
		this.handleIncrement = this.handleIncrement.bind(this)
		this.handleDecrement = this.handleDecrement.bind(this)
		this.handleScaling 	 = this.handleScaling.bind(this)
		this.handleOnDeleteService = this.handleOnDeleteService.bind(this)
	}

	componentDidMount() {
		// this.props.fetchService(this.props.id)
		this.props.fetchTaskByService(this.props.id)
	}

	logChange(val) {
		console.log("Selected :", val)
	}

  handleIncrement(serviceId) {
    console.log("Increment : ", serviceId)
    this.props.replicasIncrement(serviceId)
  }

  handleDecrement(serviceId) {
    console.log("Decrement : ", serviceId)
    this.props.replicasDecrement(serviceId)
  }

  handleOnDeleteService(id) {
    console.log(id)
    this.props.deleteService(id)
  }

  handleScaling(props) {
    console.log("Scalling cuy")
    this.props.scaleServiceAPI(props)
  }

	render() {
		
		const { service, fetching, fetched, stacks, error, notifications } = this.props

		return (
			<div>
				<Notifications notifications={notifications} />
        <section className="content-header">
          <h1>
            { fetched && service.Spec.Name.split('-')[2] }
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li className="active">{ fetched && service.Spec.Name.split('-')[2] }</li>
          </ol>
        </section>
        
				<ActionButton
					onDelete={this.handleOnDeleteService}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onScaling={this.handleScaling}
          serviceId={ service.ID } />

        {/* General Section */}
				<div className="row">
				  <div className="col-xs-12">
				    <div className="panel">
				      <header className="panel-heading">
				        Info
				      </header>
				      <div className="panel-body">
								{ fetching &&
									<div style={{ textAlign: "center", minHeight: "100px" }}>
										<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
									</div>
								}

								{ fetched && 
									<General 
										name={service.Spec.Name.split('-')[2]}
										stackName={service.Spec.Name.split('-')[1]}
										created={service.CreatedAt}
										updated={service.UpatedAt}
										image={service.Spec.TaskTemplate.ContainerSpec.Image}
										replicated={service.Spec.Mode.Replicated.Replicas}
										networks={service.Spec.Name.split('-').slice(0, 2).join('-')} />
								}

								{ error &&
									<h4 style={{ color: "#939393", textAlign: "center", minHeight: "100px" }}>
										SERVICE NOT FOUND
									</h4>
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
				      <div className="panel-body">
				      	<div className="table-responsive">
					        <table className="table table-hover">
					          <thead>
					            <tr>
					              <th>Name</th>
					              <th>Status</th>
					              <th>Image</th>
					              <th>Info</th>
					              {/*<th>Action</th>*/}
					            </tr>
					          </thead>
					          { error &&
					          	<tbody className="table-stack-list">
												<tr>
													<td colSpan="5" style={{ textAlign: "center", color: "#939393", padding: "8px" }}>
														<h4>CONTAINERS NOT FOUND</h4>
													</td>
												</tr>			          		
					          	</tbody>
					          }

					          { fetching &&
					          	<tbody className="table-stack-list">
												<tr>
													<td colSpan="5" style={{ textAlign: "center", padding: "8px" }}>
														<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>	
													</td>
												</tr>			          		
					          	</tbody>
					          }

					          { fetched && service.tasks &&
											<Containers tasks={service.tasks} />
					          }
					        </table>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

				{/* Volumes Section 
				<div className="row">
				  <div className="col-xs-12">
				    <div className="panel">
				      <header className="panel-heading">
				        Volumes
				      </header>
				      <div className="panel-body">
				      	<div className="table-responsive">
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
													<td colSpan="5" style={{ textAlign: "center", color: "#939393", padding: "8px" }}>
														<h4>VOLUMES NOT FOUND</h4>
													</td>
												</tr>			          		
					          	</tbody>
					          }

					          { fetching &&
					          	<tbody className="table-stack-list">
												<tr>
													<td colSpan="5" style={{ textAlign: "center", padding: "8px" }}>
														<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>	
													</td>
												</tr>			          		
					          	</tbody>
					          }

										{ fetched &&
											<Volumes />
										}
					        </table>
				        </div>
				      </div>
				      { fetched && 
					      <div className="panel-footer">
					        <Link
						        	to="#modalAddVolume"
						        	data-toggle="modal"
						        	className="btn btn-success btn-sm list-stack-action create-button">
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

				{/* Mountpoints Section 
				<div className="row">
				  <div className="col-xs-12">
				    <div className="panel">
				      <header className="panel-heading">
				        Mountpoints
				      </header>
				      <div className="panel-body">
				      	<div className="table-responsive">
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
													<td colSpan="6" style={{ textAlign: "center", color: "#939393", padding: "8px" }}>
														<h4>MOUNTPOINTS NOT FOUND</h4>
													</td>
												</tr>			          		
					          	</tbody>
					          }

					          { fetching &&
					          	<tbody className="table-stack-list">
												<tr>
													<td colSpan="6" style={{ textAlign: "center", padding: "8px" }}>
														<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>	
													</td>
												</tr>			          		
					          	</tbody>
					          }

					          { fetched &&
											<Mountpoints />
					          }
					        </table>
				        </div>
				      </div>
				      { fetched &&
					      <div className="panel-footer">
					        <Link 
					     				to="#modalAddVolumeMountpoint" 
					        		data-toggle="modal" 
					        		className="btn btn-success btn-sm list-stack-action create-button">
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
					                      		className="btn btn-block btn-success create-button">
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

				 Ports Section 
				<div className="row">
				  <div className="col-xs-12">
				    <div className="panel">
				      <header className="panel-heading">
				        Ports
				      </header>
				      <div className="panel-body">
					      <div className="table-responsive">
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
													<td colSpan="4" style={{ textAlign: "center", color: "#939393", padding: "8px" }}>
														<h4>PORTS NOT FOUND</h4>
													</td>
												</tr>			          		
					          	</tbody>
					          }

					          { fetching &&
					          	<tbody className="table-stack-list">
												<tr>
													<td colSpan="4" style={{ textAlign: "center", padding: "8px" }}>
														<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>	
													</td>
												</tr>			          		
					          	</tbody>
					          }

					          { fetched &&
											<Ports ports={ service.Spec.EndpointSpec.Ports } />
					          }
					        </table>
				        </div>
				      </div>
				      { fetched &&
					      <div className="panel-footer">
					        <Link
					        		to="#modalAddPort"
					        		data-toggle="modal"
					        		className="btn btn-sm btn-success create-button">
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
						                      	className="btn btn-block btn-success create-button">
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

				{/* Variables Section 
				<div className="row">
				  <div className="col-xs-12">
				    <div className="panel">
				      <header className="panel-heading">
				        Variables
				      </header>
				      <div className="panel-body">
					      <div className="table-responsive">
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
													<td colSpan="3" style={{ textAlign: "center", color: "#939393", padding: "8px" }}>
														<h4>VARIABLES NOT FOUND</h4>
													</td>
												</tr>			          		
					          	</tbody>
					          }

					          { fetching &&
					          	<tbody className="table-stack-list">
												<tr>
													<td colSpan="3" style={{ textAlign: "center", padding: "8px" }}>
														<i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>	
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
				</div>*/}

			</div>
		)
	}
}

