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
                  <div className="col-sm-2"><b>VOLUME NAME</b></div>
                  <div className="col-sm-10">{ this.props.name }</div>
                </div>
                <div className="form-group">
                  <div className="col-sm-2"><b>SIZE</b></div>
                  <div className="col-sm-10">
                    2 GB
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-2"><b>TYPE</b></div>
                  <div className="col-sm-10">
                    NFS
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-2"><b>MOUNTPOINT</b></div>
                  <div className="col-sm-10">3</div>
                </div>
                <div className="form-group">
                  <div className="col-sm-2"><b>CREATED AT</b></div>
                  <div className="col-sm-10">Mon Feb 13 2017 17:59:04 GMT+0700 (WIB)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}