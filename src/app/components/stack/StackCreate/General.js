import React    from "react"
import { Link } from "react-router"
import Select   from "react-select"

const imageTagOptions = [
  { value: "latest", label: "latest" },
  { value: "3.6.5-apache", label: "3.6.5-apache" },
  { value: "4.0.0-apache", label: "4.0.0-apache" }
]

export default class General extends React.Component {

  logChange(val) {
    console.log("Select: ", val)
  }

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
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Enter the project name" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">IMAGE</label>
                  <div className="col-sm-9">
                    <p
                        className="form-control-static d-inline-block pull-left"
                        style={{ marginRight: '10px'}}>
                      <i 
                          className="fa fa-tag fa-fw"
                          aria-hidden="true"></i>
                        &nbsp; orcinus.io/wordpress
                    </p>
                    <div className="col-md-3">
                      <Select
                        name="imageTag"
                        options={imageTagOptions}
                        onChange={this.logChange} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">AUTO START</label>
                  <div className="col-sm-4">
                    <label className="radio-inline">
                      <input
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value={"off"} />
                        &nbsp; Off
                    </label>
                    <label className="radio-inline"> 
                      <input
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value={"failure"} />
                        &nbsp; On Failure
                    </label>
                    <label className="radio-inline"> 
                      <input 
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value={"always"}
                          defaultChecked={true} />
                        &nbsp; Always
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">AUTO DEPLOY</label>
                  <div className="col-sm-4">
                    <label className="checkbox-inline">
                      <input
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="yes" />
                        &nbsp; Yes
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