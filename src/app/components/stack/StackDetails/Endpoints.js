import React from "react"
import { Link } from "react-router"

export default class Endpoints extends React.Component {
	render() {
		return (
      <tbody className="table-stack-list">
        <tr>
          <td>
            <i className="fa fa-link fa-fw" aria-hidden="true"></i>
            &nbsp; wp-app
          </td>
          <td>tcp / 80</td>
          <td>
            <Link to="http://wp-app.wordpres-app.12334.app.orcinus.io:80">
              http://wp-app.wordpres-app.12334.app.orcinus.io:80
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <i className="fa fa-link fa-fw" aria-hidden="true"></i>
            &nbsp; wp-db
          </td>
          <td>tcp / 80</td>
          <td>
            <Link to="http://wp-app.wordpres-app.12334.app.orcinus.io:80">
              http://wp-app.wordpres-app.12334.app.orcinus.io:80
            </Link>
          </td>
        </tr>
      </tbody>
		)
	}
}