/**
 * Smart component for Services List Page
 */
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import ServiceListItem from "../../components/service/ServiceListItem";

import { fetchServices } from "../../actions/serviceActions";

@connect((store) => {
  return {
    services: store.servicesState
  };
})

export default class ServiceList extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchServices());
	}

	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            SERVICES
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li className="active">SERVICES</li>
          </ol>
        </section>

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                <i className="fa fa-th-list" aria-hidden="true"></i> List
              </header>
              <div className="panel-body table-responsive">

                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Image</th>
                      <th>Info</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <ServiceListItem id={ 10 } name="test-service" />
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <Link to="/catalog" className="btn btn-primary btn-block">CREATE NEW SERVICE</Link> 
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}