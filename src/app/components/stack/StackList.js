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

  _handleDeleteStack(id, name) {
    this.props.deleteStack(id, name)
    // console.log(id)
  }

  renderStacks(stacks) {
    if (stacks !== undefined && stacks.length == 0) {
      return (
        <tr>
          <td style={{ textAlign: "center" }} colSpan="7">
            <h4>THERE IS NO PROJECTS NOW</h4>
          </td>
        </tr>
      )
    }
    else if(stacks === undefined) {
      return (
        <tr>
          <td style={{ textAlign: "center" }} colSpan="7">
            <h4>PROJECTS NOT FOUND</h4>
          </td>
        </tr>
      )
    }
    return stacks.map((stack) => {
      
      return (
        <StackListItem
          key={ stack.Id } 
          id={ stack.Id }
          link={ stack.Id }
          name={ stack.Name.split('-')[1] }
          onDelete={ this._handleDeleteStack.bind(this) } 
          created={ stack.created }
          onAddService={ this.props.setStackName }/>
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
                    <th width="20%">Name</th>
                    <th width="20%">Created at</th>
                    <th width="20%"></th>
                    <th width="10%"></th>
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                {/* error &&
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center", color: "#939393" }}>
                      <h4>PROJECTS NOT FOUND</h4>
                    </td>
                  </tr>*/
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
            {/*<div className="panel-footer">
              <Link 
                  to="/projects/new"
                  className="btn btn-primary btn-block create-button">
                CREATE NEW PROJECT
              </Link>
            </div>*/}
          </div>
        </div>
      </div>
		);
	}
}
