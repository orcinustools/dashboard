import React from "react";
import { Link } from "react-router";

import ServiceListItem from "./ServiceListItem";

export default class ServicesList extends React.Component {

	componentWillMount() {
		this.props.fetchServices();
	}

	renderServices(services) {
		return services.map((service) => {
			return (
				<ServiceListItem 
					key={service.ID}
					id={service.ID} 
					name={service.Spec.Name}
					image={service.Spec.TaskTemplate.ContainerSpec.Image} />
			);
		}); 
	}

	render() {
		const { services } = this.props;

		return (
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
                  { this.renderServices(services) }
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <Link to="/catalog" className="btn btn-primary btn-block">CREATE NEW SERVICE</Link> 
            </div>
          </div>
        </div>
      </div>
		);
	}
}