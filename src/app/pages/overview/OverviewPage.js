import React from "react";

import OverviewContainer from "../../containers/overview/OverviewContainer";

export default class OverviewPage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>DASHBOARD</h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li className="active">HOME</li>
          </ol>
        </section>
        
        <OverviewContainer />
			</div>
		);
	}
}