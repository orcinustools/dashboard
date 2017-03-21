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
                  <label className="col-sm-2 control-label">STACK NAME</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Enter the stack name" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">IMAGE</label>
                  <div className="col-sm-9">
                    <p className="form-control-static d-inline-block pull-left" style={{ marginRight: '10px'}}>
                      <i className="fa fa-tag fa-fw" aria-hidden="true"></i> orcinus.io/wordpress
                    </p>
                    <div className="col-md-3">
                      <select name="image-tag" id="image-tag" className="form-control">
                        <option value="latest">latest</option>
                        <option value="3.6.5-apache">3.6.5-apache</option>
                        <option value="4.0.0-apache">4.0.0-apache</option>
                      </select>
                    </div>
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