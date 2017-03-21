import React from "react"
import { Link } from "react-router"

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
                  <label className="col-sm-2 control-label">IMAGE</label>
                  <div className="col-sm-10">
                    <p className="form-control-static d-inline-block pull-left" style={{ marginRight: '10px' }}>
                     <i className="fa fa-tag fa-fw" aria-hidden="true"></i> orcinus.io/mysql
                    </p>
                    <div className="col-md-3">
	                    <select name="image-tag" id="image-tag" className="form-control">
	                      <option value="latest">latest</option>
	                      <option value="5.6">5.6</option>
	                      <option value="5.7">5.7</option>
	                    </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">SERVICE NAME</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Service Name" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">ADD TO STACK</label>
                  <div className="col-sm-3">
                    <select name="stack" id="stack" className="form-control">
                      <option value="wordpress-app" data-icon="fa fa-server fa-fw"> Wordpress-app</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">NUM. OF CONTAINER</label>
                  <div className="col-sm-1">
                    <input type="number" className="form-control" min="1" max="10" defaultValue="1" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">AUTO START</label>
                  <div className="col-sm-4">
                    <label className="radio-inline">
                      <input type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />  Off
                    </label>
                    <label className="radio-inline"> 
                      <input type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" /> On Failure
                    </label>
                    <label className="radio-inline"> 
                      <input type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" /> Always
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">AUTO DEPLOY</label>
                  <div className="col-sm-4">
                    <label className="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox1" defaultValue="yes" /> Yes
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}