import React 		from "react"
import { Link } from "react-router"

export default class Environtments extends React.Component {
	render() {
		return (
	    <tbody className="table-stack-list">
	      <tr>
	        <td>WORDPRESS_DB_PASSWORD</td>
	        <td>root</td>
	        <td>
	          <i className="fa fa-minus-square" aria-hidden="true"></i>
	        </td>
	      </tr>
	      <tr>
	        <td>
	          <input type="text" className="form-control" />
	        </td>
	        <td>
	          <input type="text" className="form-control" />
	        </td>
	        <td>
	          <i 
	          	className="fa fa-plus-square"
	          	aria-hidden="true"
	          	onClick={ () => alert("Clicked") }></i>
	        </td>
	      </tr>
	    </tbody>
		)
	}
}