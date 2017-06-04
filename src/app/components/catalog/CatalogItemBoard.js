import React from "react"
import PropTypes  from "prop-types"
import { Link }   from "react-router"

import "./CatalogItemBoard.css"

const CatalogItemBoard = (props) => {
  console.log(props)
	return (
    <div
        className="col-md-2 col-sm-3 col-xs-12"
        style={{ cursor: "pointer" }}>
      <div onClick={ () => props.dismiss(props.index) }>
        <div className="thumbnail item">
          <img src={ `http://127.0.0.1:8081/${ "wordpress.svg" }` } alt={ props.name } className="item__logo" />
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

export default CatalogItemBoard