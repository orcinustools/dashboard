import React from "react";
import { Link } from "react-router";

export default class VolumeListItem extends React.Component {
	render() {
		return (
      <tr>
        <td>asfasdfasd</td>
        <td><Link to={"/volumes/" + this.props.name }>{ this.props.name }</Link></td>
        <td>2GB</td>
        <td>nfs</td>
        <td>
          <button className="btn btn-default btn-sm list-stack-action">
            <i className="fa fa-sliders" aria-hidden="true"></i>
          </button>
          <button className="btn btn-danger btn-sm list-stack-action">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
		)
	}

}