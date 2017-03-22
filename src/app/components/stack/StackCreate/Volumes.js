import React 		from "react"
import { Link } from "react-router"

export default class Volumes extends React.Component {
	render() {
		return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel">
            <header className="panel-heading">
              Volumes
            </header>
            <div className="panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mountpoint</th>
                    <th>Size</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                  <tr>
                    <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> wp-vol</td>
                    <td>
                      <ul className="list-child">
                        <li><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> mysql-data</li>
                      </ul>
                    </td>
                    <td>2GB</td>
                    <td>
                      <Link to="#modalEditVolume" data-toggle="modal" className="btn btn-default btn-sm list-stack-action"><i className="fa fa-pencil" aria-hidden="true"></i></Link>

                      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="modalEditVolume" className="modal fade">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                              <h4 className="modal-title">Edit Volume</h4>
                            </div>
                            <div className="modal-body">
                              <form className="form-horizontal" role="form">
                                <div className="form-group">
                                  <label htmlFor="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                    Volume Name
                                  </label>
                                  <div className="col-lg-8">
                                    <select defaultValue="wp-vol" name="selectVolumeName" id="selectVolumeName" className="selectpicker">
                                      <option value="wp-vol" data-icon="fa fa-hdd-o fa-fw">
                                        wp-vol
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="inputContainerPort" className="col-lg-3 col-sm-3 control-label">
                                    Mountpoint
                                  </label>
                                  <div className="col-lg-8">
                                    <select defaultValue={["mysql-data"]} name="inputProtocol" id="inputProtocol" className="selectpicker" multiple title="Select the mount point" >
                                      <option value="mysql-data" data-icon="fa fa-code-fork fa-fw">
                                        mysql-data
                                      </option>
                                      <option value="mysql-data" data-icon="fa fa-code-fork fa-fw">
                                        codeBase
                                      </option>
                                      <option value="mysql-data" data-icon="fa fa-code-fork fa-fw">
                                        web-logs
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-lg-8 col-md-offset-3">
                                    <button type="submit" className="btn btn-block btn-success">Edit Volume</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
		)
	}
}