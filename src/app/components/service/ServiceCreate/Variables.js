import React from "react"
import { Link } from "react-router"

export default class Variables extends React.Component {
	render() {
		return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel">
            <header className="panel-heading">
              Variables
            </header>
            <div className="panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                  <tr>
                    <td>ROOT_DB_PASSWORD **</td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                    </td>
                  </tr>
                  <div className="collapse">
                    <tr>
                      <td className="text-info">MYSQL_DATABASE</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info">MYSQL_USER</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info">MYSQL_PASSWORD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>     
                    <tr>
                      <td className="text-info">MYSQL_ALLOW_EMPTY_PASSWORD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info">MYSQL_RANDOM_ROOT_PASSWORD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info">MYSQL_ONETIME_PASSWORD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                      </td>
                    </tr>
                  </div>
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <span>** REQUIRED</span>
            </div>
          </div>
        </div>
      </div>
		)
	}
}