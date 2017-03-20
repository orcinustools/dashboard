import React 		from "react"
import { Link } from "react-router"

export default class Mountpoints extends React.Component {
	render() {
		return (
			<div className="row">
			  <div className="col-xs-12">
			    <div className="panel">
			      <header className="panel-heading">
			        Mountpoints
			      </header>
			      <div className="panel-body">
			        <table className="table table-hover">
			          <thead>
			            <tr>
			              <th>Name</th>
			              <th>Volume Name</th>
			              <th>Used</th>
			              <th>Source</th>
			              <th>Target</th>
			              <th></th>
			            </tr>
			          </thead>
			          <tbody className="table-stack-list">
			            <tr>
			              <td><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i> <Link to="/volumes/codeBase">codeBase</Link></td>
			              <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-vol">wp-vol</Link></td>
			              <td>150 MB of 2 GB</td>
			              <td>/wp-vol/src/</td>
			              <td>/var/www/wp-app/</td>
			              <td>
			                <button className="btn btn-default list-stack-action">
			                  <i className="fa fa-sliders" aria-hidden="true"></i>
			                </button>
			                <button className="btn btn-danger list-stack-action">
			                  <i className="fa fa-trash" aria-hidden="true"></i>
			                </button>
			              </td>
			            </tr>
			          </tbody>
			        </table>
			      </div>
			      <div className="panel-footer">
			        <Link to="#modalAddVolumeMountpoint" data-toggle="modal" className="btn btn-success btn-sm list-stack-action"><i className="fa fa-plus fa-fw" aria-hidden="true"></i> Add Mountpoint</Link>

			        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="modalAddVolumeMountpoint" className="modal fade">
			          <div className="modal-dialog">
			            <div className="modal-content">
			              <div className="modal-header">
			                <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
			                <h4 className="modal-title">Add Volume</h4>
			              </div>
			              <div className="modal-body">
			                <form className="form-horizontal" role="form">
			                  <div className="form-group">
			                    <label htmlFor="inputVolumeName" className="col-lg-3 col-sm-3 control-label">
			                      Volume Name
			                    </label>
			                    <div className="col-lg-8">
			                      <select name="selectVolumeName" id="selectVolumeName" className="selectpicker" title="Select the volume name">
			                        <option value="wp-vol" data-icon="fa fa-hdd-o fa-fw">
			                          wp-vol
			                        </option>
			                      </select>
			                    </div>
			                  </div>
			                  <div className="form-group">
			                    <label htmlFor="inputVolumeName" className="col-lg-3 col-sm-3 control-label">
			                      Mountpoint
			                    </label>
			                    <div className="col-lg-8 select-container">
			                      <select name="selectMountpoint" id="selectMountpoint" className="selectpicker" title="Select the mount point" >
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
			                      <button type="submit" className="btn btn-block btn-success">Add Volume</button>
			                    </div>
			                  </div>
			                </form>
			              </div>
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