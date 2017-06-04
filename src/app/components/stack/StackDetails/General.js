import React from "react"
import { Link } from "react-router"
import moment   from "moment"

const General = (props) => {
	return (
    <div className="form-horizontal">
      <div className="form-group">
        <label className="col-sm-2 control-label">NAME</label>
        <p className="form-control-static d-inline-block">
          { props.name }
        </p>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">CREATED AT</label>
        <p className="form-control-static d-inline-block">
          { moment(props.created).format("MMMM Do YYYY, h:mm:ss a") }
        </p>
      </div>
    </div>
	)
}

export default General