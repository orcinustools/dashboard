import React from "react";
import { Link } from "react-router";

const CatalogItem = (props) => {
	return (
    <div className="col-md-2 col-sm-3 col-xs-12">
      <div
          style={{ cursor: 'pointer' }}
          onClick={ () => props.onAdd(props.name, props.category) }>
        <div className="thumbnail">
          <img src={ `http://127.0.0.1:8081/${ props.img }` } alt={ props.name } className="" />
          <div className="caption text-center">
            <h4>{ props.name }</h4> 
            <p>
              { props.children }
            </p>
          </div>
        </div>
      </div>
    </div>
	)
}

export default CatalogItem
