import React from "react";
import { Link } from "react-router";

export default class CatalogItem extends React.Component {
	render() {
		return (
	    <div className="col-md-2 col-sm-3 col-xs-12">
	      <Link to={ this.props.url }>
	        <div className="thumbnail">
	          <img src={ this.props.img } alt={ this.props.name } className="" />
	          <div className="caption text-center">
	            <h4>{ this.props.name }</h4> 
	            <p>
	              { this.props.children }
	            </p>
	          </div>
	        </div>
	      </Link>
	    </div>
		);
	}
}