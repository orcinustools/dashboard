import React from "react";
import { Link } from "react-router";
import {Line} from 'react-chartjs-2';

const data = {
    labels : ["1","2","3","4","5", "6", "7", "8", "9", "10"],
    datasets : [
      {
        label: "Upload",
        backgroundColor : "rgba(249, 245, 6, 0.5)",
        borderColor : "rgba(245, 171, 53,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [65,59,90,81,56,45,30,20,3,37]
      },
      {
        label: "Download",
        fillColor : "rgba(6, 10, 249, 0.5)",
        borderColor : "rgba(68,108,179,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [34,56,12,81,2,45,16,32,1,21]
      }
    ]
}


export default class Overview extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>DASHBOARD</h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li className="active">HOME</li>
          </ol>
        </section>

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
		);
	}
}