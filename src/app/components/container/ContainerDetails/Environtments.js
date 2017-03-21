import React from "react"
import { Link } from "react-router"

export default class Environtments extends React.Component {
	render() {
		return (
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
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                  <tr>
                    <td>WORDPRESS_DB_PASSWORD</td>
                    <td>root</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" placeholder="key" className="form-control"/>
                    </td>
                    <td>
                      <input type="text" placeholder="value" className="form-control"/>
                    </td>
                    <td>
                      <i className="fa fa-plus-square" aria-hidden="true"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
		)
	}
}