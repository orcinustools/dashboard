import React from "react";
import { Link } from "react-router";
import { Line } from 'react-chartjs-2';

export default class Overview extends React.Component {
	render() {

		const { data } = this.props;

		return (
			<div>
        <div className="row" style={{ marginBottom: '5px' }}>
          
          <Link to="/stacks">
            <div className="col-md-4">
              <div className="sm-st clearfix">
                <span className="sm-st-icon st-red"><i className="fa fa-server"></i></span>
                <div className="sm-st-info">
                  <span>4</span> Stack Running
                </div>
              </div>
            </div>
          </Link>

          <Link to="/services">
            <div className="col-md-4">
              <div className="sm-st clearfix">
                <span className="sm-st-icon st-violet"><i className="fa fa-cubes"></i></span>
                <div className="sm-st-info">
                  <span>2</span> Services Running
                </div>
              </div>
            </div>
          </Link>

          <Link to="/containers">
            <div className="col-md-4">
              <div className="sm-st clearfix">
                <span className="sm-st-icon st-blue"><i className="fa fa-cube"></i></span>
                <div className="sm-st-info">
                  <span>2</span> Containers Running
                </div>
              </div>
            </div>
          </Link>

        </div>

       
        <div className="row">

          <div className="col-md-12">
           
            <section className="panel">
              <header className="panel-heading">
                <i className="fa fa-area-chart fa-fw" aria-hidden="true"></i> Network Usage
              </header>
              <div className="panel-body">
                <div className="chart-container">
                	<Line height={60} data={data} />
                </div>
              </div>
            </section>
           
          </div>

          <div className="col-md-12">
           
            <section className="panel">
              <header className="panel-heading">
                <i className="fa fa-area-chart fa-fw" aria-hidden="true"></i> CPU Usage
              </header>
              <div className="panel-body">
                <div className="chart-container">
                  <Line height={60} data={data} />
                </div>
              </div>
            </section>
           
          </div>

          <div className="col-md-12">
           
            <section className="panel">
              <header className="panel-heading">
                <i className="fa fa-area-chart fa-fw" aria-hidden="true"></i> Memory Usage
              </header>
              <div className="panel-body">
                <div className="chart-container">
                  <Line height={60} data={data} />
                </div>
              </div>
            </section>
           
          </div>

        </div>
			</div>
		)
	}
}












