import React from "react"
import { Link } from "react-router"

export default class Mountpoints extends React.Component {
	render() {
		return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel">
            <header className="panel-heading">
              Mountpoint
            </header>
            <div className="panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Volume Name</th>
                    <th>Used</th>
                    <th>Source</th>
                    <th>Target</th>
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                  <tr>
                    <td><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> <Link to="/volumes/codeBase">codeBase</Link></td>
                    <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-vol">wp-vol</Link></td>
                    <td>150 MB of 2 GB</td>
                    <td>/wp-vol/src/</td>
                    <td>/var/www/wp-app/</td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-logs">wp-logs</Link></td>
                    <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-vol">wp-vol</Link></td>
                    <td>150 MB of 2 GB</td>
                    <td>/wp-vol/wp-logs/</td>
                    <td>/var/log/nginx/</td>
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