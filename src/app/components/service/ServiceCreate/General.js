import React from "react"
import { Link } from "react-router"
import Select   from "react-select"

const imageTagOptions = [
  { value: "latest", label: "latest" },
  { value: "5.6", label: "5.6" },
  { value: "5.7", label: "5.7" }
]

const stackOptions = [
  { value: "Wordpress-app", label: "Wordpress-app"}
]

export default class General extends React.Component {

  constructor(props) {
    super(props);
  }

  logChange (val) {
    console.log("Selected: ", val)
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
                  <label className="col-sm-2 control-label">SERVICE NAME</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Service Name" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">ADD TO GROUP</label>
                  <div className="col-sm-3">
                    <Select
                      name="stack-name"
                      value="Wordpress-app"
                      options={stackOptions}
                      onChange={this.logChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">IMAGE</label>
                  <div className="col-sm-10">
                    <p 
                      className="form-control-static d-inline-block pull-left"
                      style={{ marginRight: '10px' }}>
                     <i 
                        className="fa fa-tag fa-fw"
                        aria-hidden="true"></i>
                      &nbsp; orcinus.io/mysql
                    </p>
                    <div className="col-md-3">
                      <Select
                        name="image-tag"
                        value="latest"
                        options={imageTagOptions}
                        onChange={this.logChange} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">NUM. OF CONTAINER</label>
                  <div className="col-sm-1">
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      max="10"
                      defaultValue="1" />
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