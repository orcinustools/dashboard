import React 		from "react"
import { Link } from "react-router"

export default class Volumes extends React.Component {

  logChange (val) {
    console.log("Selected: ", val)
  }

	render() {
		return (
      <tbody className="table-stack-list">
        <tr>
          <td>
          	<i
          		className="fa fa-hdd-o fa-fw"
          		aria-hidden="true"></i>
        		<Link to="/volumes/wp-vol">wp-vol</Link></td>
          <td>2GB</td>
          <td>
            <span className="label label-success running-state">Mounted</span>
          </td>
          <td>150 MB</td>
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