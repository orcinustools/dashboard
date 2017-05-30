import React from "react";
import { Link } from "react-router";

import ServiceListItem from "./ServiceList/ServiceListItem";

export default class ServicesList extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleOnDeleteService = this.handleOnDeleteService.bind(this)

    this.state = {
      counter: 10
    }
  }

	componentDidMount() {
		this.props.fetchServices();
	}

  handleIncrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  handleDecrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  handleOnDeleteService(id) {
    console.log(id)
    this.props.deleteService(id)
  }

	renderServices(services) {
    if (services.length == 0) {
      return (
        <tr>
          <td style={{ textAlign: "center" }} colSpan="7">
            THERE IS NO SERVICE NOW
          </td>
        </tr>
      )
    }

		return services.map((service) => {
			return (
				<ServiceListItem 
					key={service.ID}
					id={service.ID} 
					name={service.Spec.Name}
					image={service.Spec.TaskTemplate.ContainerSpec.Image}
          replicas={service.Spec.Mode.Replicated.Replicas}
          click={this.handleOnDeleteService}
          counter={this.state.counter} />
			);
		}); 
	}

	render() {
		const { services, fetching, fetched, error } = this.props;

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
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <i className="fa fa-th-list" aria-hidden="true"></i>
                &nbsp; List
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Image</th>
                        <th>Info</th>
                      </tr>
                    </thead>
                    <tbody className="table-stack-list">
                      { fetching &&
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
                          </td>
                        </tr>
                      }

                      { fetched &&
                        this.renderServices(services)
                      }

                      { error &&
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center", color: "#939393" }}>
                            <h4>SERVICES NOT FOUND</h4>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="panel-footer">
                <Link
                    to="/catalog"
                    className="btn btn-primary btn-block create-button">
                  CREATE NEW SERVICE
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}