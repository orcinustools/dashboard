import React from "react";
import { Link } from "react-router";

export default class CatalogSearchBar extends React.Component {
	render() {
		return (
	    <div className="col-md-12">
	      <form action="#" method="get" className="katalog-form">
	        {/*<div className="input-group">*/}
	          <input 
		          type="text" 
		          name="q" 
		          className="form-control katalog-search" 
		          defaultValue={ this.props.defaultValue } 
		          placeholder="Search..." />
		          
	          {/*<span className="input-group-btn">
	            <button type='submit' name='seach' id='search-btn' className="btn btn-default"><i className="fa fa-search"></i></button>
	          </span>}
	        </div>*/}
	      </form>
	    </div>
		)
	}
}
