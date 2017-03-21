import React from "react";
import { Link } from "react-router";

export default class Volumes extends React.Component {
	render() {
		return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel">
            <header className="panel-heading">
              Volumes
            </header>
            <div className="panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Source</th>
                    <th>Target</th>
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                  <tr>
                    <td>
                      <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 
                      <Link to="/volumes/wp-vol">&nbsp; wp-vol</Link>
                    </td>
                    <td>2GB</td>
                    <td>/data/logs</td>
                    <td>/var/nginx/logs</td>
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