import React 		from "react"
import { Link } from "react-router"

export default class ServiceList extends React.Component {
	render() {
		return (
        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Service List
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Stack Name</th>
                      <th>Mountpoint</th>
                      <th>Status</th>
                      <th>Used</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> <a href="volume_details.html"> wp-app</a></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> codeBase</li>
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> web-logs</li>
                        </ul>
                      </td>
                      <td>
                        <span className="label label-success">Mounted</span>
                      </td>
                      <td>150 MB of 2 GB</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> <a href="volume_details.html">wp-db</a></td>
                      <td>
                        <ul className="list-child">
                          <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> mysql-data</li>
                        </ul>
                      </td>
                      <td>
                        <span className="label label-success">Mounted</span>
                      </td>
                      <td>150 MB of 2 GB</td>
                      <td>
                        <button className="btn btn-default list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
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