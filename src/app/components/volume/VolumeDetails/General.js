import React 		from "react"
import { Link } from "react"
import moment 	from "moment"

export default class General extends React.Component {
	render() {
		return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel">
            <header className="panel-heading">
              General
            </header>
            <div className="panel-body">
              <div className="form-horizontal">
                <div className="form-group">
                  <label className="col-sm-2 control-label">VOLUME</label>
			              <p className="form-control-static">
			                { this.props.name }
			              </p>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">SIZE</label>
                  <p className="form-control-static">
                    2 GB
                  </p>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">TYPE</label>
                  <p className="form-control-static">
                    NFS
                  </p>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">MOUNTPOINT</label>
                  <p className="form-control-static">3</p>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">CREATED AT</label>
                  <p className="form-control-static">
                  	Mon Feb 13 2017 17:59:04 GMT+0700 (WIB)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}