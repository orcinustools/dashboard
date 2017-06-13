import React from "react"
import { Link } from "react-router"

const ActionButton = (props) => {
	return (
		<div className="row">
		  <div
		  		className="col-md-6 pull-right"
		  		style={{ marginBottom: '10px' }}>

		    <div
			    	className="btn-group btn-group-justified"
			    	style={{ marginBottom: '10px' }}
			    	role="group"
			    	aria-label="...">

		      <div className="btn-group" role="group">
		        <button type="button" className="btn btn-default">
		          <i className="fa fa-pencil-square-o fa-fw" aria-hidden="true"></i>
		          <span className="visible-lg-inline">&nbsp; Update</span>
		        </button>
		      </div> 
		      {/*<div className="btn-group" role="group">
		        <button type="button" className="btn btn-warning">
		          <i className="fa fa-pause fa-fw" aria-hidden="true"></i>
		          <span className="visible-lg-inline">&nbsp; Pause</span>
		        </button>
		      </div>

		      <div className="btn-group" role="group">
		        <button type="button" className="btn btn-info">
		          <i className="fa fa-refresh fa-fw" aria-hidden="true"></i>
		          <span className="visible-lg-inline">&nbsp; Redeploy</span>
		        </button>
		      </div>*/}

		      <div className="btn-group" role="group" >
		        <button
		        		type="button"
		        		className="btn btn-danger"
		        		style={{ display: 'inline-block'}}
		        		onClick={ () => props.onDelete(props.serviceId) } >
		          <i className="fa fa-trash-o fa-fw" aria-hidden="true"></i>
		          <span className="visible-lg-inline">&nbsp; Terminate</span>
		        </button>
		      </div>

		    </div>
		  </div>
		</div>
	)
}

export default ActionButton