import React from "react"
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
			              <th>Size</th>
			              <th>Status</th>
			              <th>Used</th>
			              <th></th>
			            </tr>
			          </thead>
			          <tbody className="table-stack-list">
			            <tr>
			              <td><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> <Link to="/volumes/wp-vol">wp-vol</Link></td>
			              <td>2GB</td>
			              <td>
			                <span className="label label-success">Mounted</span>
			              </td>
			              <td>150 MB</td>
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
			        <Link to="#modalAddVolume" data-toggle="modal" className="btn btn-success btn-sm list-stack-action"><i className="fa fa-plus fa-fw" aria-hidden="true"></i> Add Volume</Link>

			        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="modalAddVolume" className="modal fade">
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