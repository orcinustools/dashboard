import React from "react";
import { Link } from "react-router";

export default class Volumes extends React.Component {
	render() {
		return (
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
		)
	}
}