import React from "react"
import { Link } from "react-router"
import moment from "moment"

const General = (props) => {
	return (
    <div className="form-horizontal">
      <div className="form-group">
        <label className="col-sm-2 control-label">NAME</label>
        <div className="col-sm-10">
          <p className="form-control-static">
            <i className="fa fa-cube fa-fw" aria-hidden="true"></i>
            &nbsp; { props.name }
          </p>
        </div>
      </div>
      {/*<div className="form-group">
        {/* TODO:= ganti nama stack sesuai dengan yang didapat dari api
        <label className="col-sm-2 control-label">GROUP</label>
        <div className="col-sm-10">
          <p className="form-control-static">
            <i className="fa fa-server fa-fw" aria-hidden="true"></i>
            <Link to="/stacks/wordpress-app">&nbsp; Worpress-app</Link>  
          </p>
        </div>
      </div>*/}
      <div className="form-group">
        {/* TODO:= ganti nama service sesuai dengan yang didapat dari api*/}
        <label className="col-sm-2 control-label">SERVICE</label>
        <div className="col-sm-10">
          <p className="form-control-static">
            <i className="fa fa-cubes fa-fw" aria-hidden="true"></i>
            { props.serviceName ? 
              <Link to={`/services/${ props.serviceId }`}>&nbsp; { props.serviceName }</Link> :
              <span>&nbsp; No Service</span> 
            }
          </p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">IMAGE</label>
        <div className="col-sm-10">
          <p className="form-control-static">
            <i className="fa fa-tag fa-fw" aria-hidden="true"></i>
             &nbsp; { props.image }
          </p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">STATUS</label>
        <div className="col-sm-10">
          <p className="form-control-static">
            <i className="fa fa-heartbeat fa-fw" aria-hidden="true"></i>
            &nbsp; Healty
          </p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">VOLUMES</label>
        <div className="col-sm-10">
          <p className="form-control-static">
            <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i>
            &nbsp; { props.volumeTotal } Volumes
          </p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">CREATED AT</label>
        <div className="col-sm-10">
          <p className="form-control-static">
            <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i>
            &nbsp; { moment(props.created).format("MMMM Do YYYY, h:mm:ss a") }
          </p>
        </div>
      </div>
    </div>
	)
}

export default General