import React from "react"
import { Link } from "react-router"

export default class Mountpoints extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel">
            <header className="panel-heading">
              Mountpoint List
            </header>
            <div className="panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Used</th>
                    <th>Source</th>
                    <th>Target</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                  <tr>
                    <td>
                      <i className="fa fa-code-fork fa-fw" aria-hidden="true"></i>
                      <Link to="/volumes/codeBase">&nbsp; codeBase</Link>
                    </td>
                    <td>2 MB of 2 GB</td>
                    <td>/wp-vol/src/</td>
                    <td>/var/www/wp-app/</td>
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
                    <td>
                      <i className="fa fa-code-fork fa-fw" aria-hidden="true"></i>
                      <Link to="/volumes/web-logs">&nbsp; web-logs</Link>
                    </td>
                    <td>2 MB of 2 GB</td>
                    <td>/wp-vol/logs/</td>
                    <td>/var/nginx/logs/</td>
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
                    <td>
                      <i className="fa fa-code-fork fa-fw" aria-hidden="true"></i>
                      <Link to="/volumes/mysql-data">&nbsp; mysql-data</Link>
                    </td>
                    <td>2 MB of 2 GB</td>
                    <td>/wp-vol/mysql-data/ </td>
                    <td>/var/lib/mysql/</td>
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
            <div className="panel-footer">
              <button className="btn btn-success">
                <i className="fa fa-plus fa-fw" aria-hidden="true"></i>  Add New Mountpoint
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}