import React    from "react"
import { Link } from "react-router"
import Select   from "react-select"

const imageTagOptions = [
  { value: "latest", label: "latest" },
  { value: "3.6.5-apache", label: "3.6.5-apache" },
  { value: "4.0.0-apache", label: "4.0.0-apache" }
]

const General = (props) => {
  
  const logChange = (val) => (
    console.log("Select: ", val.target.value)
  )

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
                <label className="col-sm-2 control-label">GROUP NAME</label>
                <div className="col-sm-9">
                  <input 
                    type="text"
                    className="form-control"
                    placeholder="Type the group name here"
                    onChange={(e) => logChange(e)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default General