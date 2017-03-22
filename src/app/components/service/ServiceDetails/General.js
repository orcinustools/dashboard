import React 		from "react"
import { Link } from "react-router"
import moment 	from "moment"
import { Tooltip, OverlayTrigger } from "react-bootstrap"

export default class General extends React.Component {
	
	
	render() {
	
		return (
			<div className="row">
			  <div className="col-xs-12">
			    <div className="panel">
			      <header className="panel-heading">
			        General
			      </header>
			      <div className="panel-body">
			        <div className="form-horizontal">
			          <div className="form-group">
			            <label className="col-sm-2 control-label">
								    <OverlayTrigger
								    		trigger={['hover', 'focus']}
								    		placement="right"
								    		overlay={tooltipName}>
								      <span>NAME</span>
								    </OverlayTrigger>
			            </label>
			            <div className="col-sm-10">
			              <input 
			              	type="text"
			              	className="form-control"
			              	name="inputServiceName"
			              	defaultValue={ this.props.name } />
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">
								    <OverlayTrigger
								    		trigger={['hover', 'focus']}
								    		placement="right"
								    		overlay={tooltipTemplate}>
					            <span>TEMPLATE</span>
								    </OverlayTrigger>
							    </label>
			            <div className="col-sm-10">
			              <p className="form-control-static d-inline-block">
			                Wordpress
			              </p>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">IMAGE</label>
			            <div className="col-sm-10">
			              <p 
			              		className="form-control-static d-inline-block pull-left"
			              		style={{ marginRight: '10px' }}>
			                <i className="fa fa-tag fa-fw" aria-hidden="true"></i> 
			                &nbsp; orcinus.io/wordpress
			              </p>
			              <div className="col-md-2">
				              <select 
				              		name="imageTag"
				              		id="imageTag"
				              		className="form-control"
				              		style={{display: 'inline-block'}}
				              		data-width="fit">
				                <option value="latest">latest</option>
				                <option value="beta">beta</option>
				              </select>
			              </div>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">PROJECT</label>
			            <div className="col-sm-5">
			              <select 
			              		name="selectStackName"
			              		id="selectStackName"
			              		className="form-control">
			                <option value="wordpress-app" data-icon="fa fa-server fa-fw">
			                	&nbsp; Wordpress-app
			                </option>
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
			              <input 
			              	type="number"
			              	className="form-control"
			              	defaultValue={ this.props.replicated }
			              	min="1" max="10" />
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">CONTAINERS</label>
			            <div className="col-sm-10">
			              <p className="form-control-static">
			                <i className="fa fa-cube fa-fw" aria-hidden="true"></i>
			                &nbsp; 1 Containers
			              </p>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">VOLUMES</label>
			            <div className="col-sm-10">
			              <p className="form-control-static">
			                <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i>
			                &nbsp; 1 Volumes
			              </p>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">AUTO START</label>
			            <div className="col-sm-4">
			              <label className="radio-inline">
			                <input 
			                	type="radio"
			                	name="inlineRadioOptions"
			                	id="inlineRadio1"
			                	value="option1" />
			                &nbsp; Off
			              </label>
			              <label className="radio-inline"> 
			                <input 
			                	type="radio" 
			                	name="inlineRadioOptions"
			                	id="inlineRadio2"
			                	value="option2" />
			                &nbsp; On Failure
			              </label>
			              <label className="radio-inline"> 
			                <input 
			                	type="radio"
			                	name="inlineRadioOptions"
			                	id="inlineRadio3"
			                	value="option3"
			                	defaultChecked={true}/>
			                &nbsp; Always
			              </label>
			            </div>
			          </div>
			          {/*<div className="form-group">
			            <label className="col-sm-2 control-label">AUTO DEPLOY</label>
			            <div className="col-sm-4">
			              <label className="checkbox-inline">
			                <input type="checkbox" id="inlineCheckbox1" defaultValue="yes" /> Yes
			              </label>
			            </div>
			          </div>*/}
			          <div className="form-group">
			            <label className="col-sm-2 control-label">CREATED AT</label>
			            <div className="col-sm-10">
			              <p className="form-control-static">
			                <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i>
			                &nbsp; { moment(this.props.created).format("MMMM Do YYYY, h:mm:ss a") }
			              </p>
			            </div>
			          </div>
			          <div className="form-group">
			            <label className="col-sm-2 control-label">UPDATED AT</label>
			            <div className="col-sm-10">
			              <p className="form-control-static">
			                <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i>
			                &nbsp; { moment(this.props.updated).format("MMMM Do YYYY, h:mm:ss a") }
			              </p>
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

const tooltipName = (
  <Tooltip id="tooltip">The name of the service.</Tooltip>
)

const tooltipTemplate = (
	<Tooltip id="tooltip">The name of project template choosen from catalog</Tooltip>
)