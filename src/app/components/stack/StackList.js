/**
 * Smart component for Stack List Page
 */
import React            from "react"
import { Link }         from "react-router"
import { connect }      from "react-redux"

import StackListItem    from "./StackList/StackListItem"

export default class StackList extends React.Component {

	componentWillMount() {
		this.props.fetchStacks()
	}

	render() {
		return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel">
            <header className="panel-heading">
              <i className="fa fa-th-list" aria-hidden="true"></i> List
            </header>
            <div className="panel-body table-responsive">

              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Info</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                  <StackListItem id={ "123" } name="test-app" />
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <Link to="/catalog" className="btn btn-primary btn-block">CREATE NEW PROJECT</Link>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
