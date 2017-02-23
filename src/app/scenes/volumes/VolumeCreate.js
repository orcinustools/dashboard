import React from "react";
import { Link } from "react-router";

export default class VolumeCreate extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            CREATE NEW VOLUME
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="index.html">HOME</Link></li>
            <li><Link to="volume_list.html">VOLUMES</Link></li>
            <li className="active">Create new Volume</li>
          </ol>
        </section>

        <div className="row">
          <div className="col-xs-12">
            <section className="panel">
              <header className="panel-heading">
               <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> New Volume
              </header>
              <div className="panel-body">
                <form className="form-horizontal" role="form">

                  <div className="form-group">
                    <label htmlFor="volumeName" className="col-md-2 col-sm-2 control-label">Volume Name</label>
                    <div className="col-md-10">
                      <input type="text" className="form-control" id="volumeName" placeholder="Volume name" />
                      <p className="help-block">Example block-level help text here.</p>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="volumeSize" className="col-md-2 col-sm-2 control-label">Size</label>
                    <div className="col-md-10">
                      <input type="text" className="form-control" id="volumeSize" placeholder="Volume size" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="volumeType" className="col-md-2 col-sm-2 control-label">Type</label>
                    <div className="col-md-10">
                      <select className="selectpicker" id="volumeType">
                        <option value="bind">Bind</option>
                        <option value="nfs">NFS</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-offset-2 col-md-10">
                      <button type="submit" className="btn btn-primary">CREATE VOLUME</button>
                    </div>
                  </div>

                </form>
              </div>
            </section>
          </div>
        </div>
			</div>
		);
	}
}