import React from "react"
import { Link } from "react-router"

export default class Mountpoints extends React.Component {
	render() {
		return (
      <tbody className="table-stack-list">
        <tr>
          <td>
            <i className="fa fa-code-fork fa-fw" aria-hidden="true"></i>
            <Link to="/volumes/codeBase">&nbsp;codeBase</Link>
          </td>
          <td>
            <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i>
            <Link to="/volumes/wp-vol">&nbsp; wp-vol</Link>
          </td>
          <td>150 MB of 2 GB</td>
          <td>/wp-vol/src/</td>
          <td>/var/www/wp-app/</td>
        </tr>
        <tr>
          <td>
            <i className="fa fa-code-fork fa-fw" aria-hidden="true"></i>
            <Link to="/volumes/wp-logs">&nbsp; wp-logs</Link>
          </td>
          <td>
            <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i>
            <Link to="/volumes/wp-vol">&nbsp; wp-vol</Link>
          </td>
          <td>150 MB of 2 GB</td>
          <td>/wp-vol/wp-logs/</td>
          <td>/var/log/nginx/</td>
        </tr>
      </tbody>
		)
	}
}