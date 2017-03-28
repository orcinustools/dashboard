import React 		from "react"
import { Link } from "react-router"
import Select 	from "react-select"

const mountOptions = [
	{ value: "mysql-data", label: "mysql-data" },
	{ value: "web-logs", label: "web-logs" },
	{ value: "codeBase", label: "codeBase" }
]

const volOptions = [
	{ value: "wp-vol", label: "wp-vol" }
]

export default class Mountpoints extends React.Component {

	logChange(val) {
		console.log("Selected: ", val)
	}

	render() {
		return (
      <tbody className="table-stack-list">
        <tr>
          <td>
          	<i className="fa fa-code-fork fa-fw" aria-hidden="true"></i>
          	<Link to="/volumes/codeBase">&nbsp; codeBase</Link>
          </td>
          <td>
          	<i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i>
          	<Link to="/volumes/wp-vol">&nbsp; wp-vol</Link>
          </td>
          <td>150 MB of 2 GB</td>
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
      </tbody>
		)
	}
}