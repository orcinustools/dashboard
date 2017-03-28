import React from "react"
import { Link } from "react-router"

export default class Ports extends React.Component {
	render() {
		return (
      <tbody className="table-stack-list">
        <tr>
          <td>80</td>
          <td>TCP</td>
          <td><span className="label label-success">YES</span></td>
          <td>80</td>
        </tr>
      </tbody>
		)
	}
}