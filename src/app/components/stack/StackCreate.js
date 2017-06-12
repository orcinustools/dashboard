import React    from "react"
import { Link, browserHistory } from "react-router"
import { Field, reduxForm } from "redux-form"

import ActionButton from "./StackCreate/ActionButton"
import General      from "./StackCreate/General"
import Services     from "./StackCreate/Services"
import Volumes      from "./StackCreate/Volumes"

class StackCreate extends React.Component {

	groupNameInput = ({input, meta: { touched, error }, ...custom}) => (
		<input 
      type="text"
      className="form-control"
      placeholder="Type the group name here" />
	)
		

	onSubmit(values) {
		console.log(values)
		this.props.checkStack(values)
	}

	render() {
		const { handleSubmit } = this.props

		return (
			<form onSubmit={handleSubmit(props => this.onSubmit(props))}>
				<div className="row">
		      <div className="col-xs-12">
		        <div className="panel">
		          <header className="panel-heading">
		            General
		          </header>
		          <div className="panel-body">
		            <div className="form-horizontal">
		              <div className="form-group">
		                <label 
		                		className="col-sm-2 control-label"
		                		htmlFor="name">
		                	PROJECT NAME
		                </label>
		                <div className="col-sm-9">
		                  <Field 
		                  	name="name"
		                  	component="input"
		                  	className="form-control"
		                  	type="text" />
		                </div>
		              </div>
		              <div className="form-group">
		              	<div className="col-sm-3 col-md-offset-2">
											<button 
													type="submit"
													className="btn btn-create"
													className="btn btn-success create-button" >
												Create Project
											</button>
		              	</div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
			</form>
		);
	}
}

StackCreate = reduxForm({
	form: 'stackCreateForm'
})(StackCreate)

export default StackCreate