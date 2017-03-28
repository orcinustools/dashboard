import React 		from "react"
import { Link } from "react-router"
import Select 	from "react-select"

import PortItem from "./PortItem"

const protoOptions = [
	{ value: "tcp", label: "TCP" },
	{ value: "udp", label: "UDP" }
]


export default class Ports extends React.Component {

	logChange(val) {
		console.log("Selected :", val)
	}
	
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
      <tbody className="table-stack-list">
	     <tr>
	        <td>80</td>
	        <td>TCP</td>
	        <td>
	        	<ul className="port-publish">
	        		<li>
		        		<span className="label label-success running-state">PRIVATE</span>
	        		</li>
	        		<li>
		        		<span className="label label-success running-state">PUBLIC</span>
	        		</li>
	        	</ul>
	        </td>
	        <td>80</td>
	        <td>
	          <Link
		          	to="#modalEditPort"
		          	data-toggle="modal"
		          	className="btn btn-default btn-sm list-stack-action">
	          	<i className="fa fa-pencil" aria-hidden="true"></i>
	          </Link>

	          <div 
		          	aria-hidden="true"
		          	aria-labelledby="myModalLabel"
		          	role="dialog"
		          	tabIndex="-1"
		          	id="modalEditPort"
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
	                  <h4 className="modal-title">Edit Port</h4>
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
	                       		placeholder="Container Port"
	                       		defaultValue="80" />
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
		                            	id="inputIsPublished"
		                            	defaultChecked="true" /> 
	                            	Yes
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
	                        	placeholder="Host Port"
	                        	defaultValue="80" />
	                      </div>
	                    </div>
	                    <div className="form-group">
	                      <div className="col-lg-8 col-md-offset-3">
	                        <button
		                        	type="submit"
		                        	className="btn btn-block btn-success create-button">
	                        	Edit Port
                        	</button>
	                      </div>
	                    </div>
	                  </form>
	                </div>
	              </div>
	            </div>
	          </div>

	          <Link
		          	to="#"
		          	className="btn btn-danger btn-sm list-stack-action">
	          	<i className="fa fa-trash-o" aria-hidden="true"></i>
          	</Link>
	        </td>
	     </tr>
      </tbody>
		)
	}
}