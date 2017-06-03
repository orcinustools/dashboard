/**
 * Smart component for Stack List Page
 */
import React            from "react"
import { Link }         from "react-router"
import { connect }      from "react-redux"

import StackListItem    from "./StackList/StackListItem"

export default class StackList extends React.Component {

	componentDidMount() {
		this.props.fetchStacks()
	}

  _handleDeleteStack(id) {
    this.props.deleteStack(id)
    // console.log(id)
  }

  renderStacks(stacks) {
    if (stacks.length == 0) {
      return (
        <tr>
          <td style={{ textAlign: "center" }} colSpan="7">
            THERE IS NO STACKS NOW
          </td>
        </tr>
      )
    }
    return stacks.map((stack) => {
      return (
        <StackListItem
          key={ stack.Id } 
          id={ stack.Id }
          name={ stack.Name }
          onDelete={ this._handleDeleteStack.bind(this) } />
      )
    })
  }

	render() {
    const { stacks, error, fetching, fetched } = this.props

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
                { error &&
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center", color: "#939393" }}>
                      <h4>GROUPS NOT FOUND</h4>
                    </td>
                  </tr>
                }

                { fetching &&
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center", color: "#939393" }}>
                      <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i>
                    </td>
                  </tr>
                }

                { fetched &&
                  this.renderStacks(stacks)
                }
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <Link to="/stacks/new" className="btn btn-primary btn-block create-button">CREATE NEW GROUP</Link>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
