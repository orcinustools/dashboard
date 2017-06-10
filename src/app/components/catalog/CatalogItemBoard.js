import React from "react"
import PropTypes  from "prop-types"
import { Link }   from "react-router"

import { OMURA_HOST, OMURA_PORT} from "../../config/environtment"

import "./CatalogItemBoard.css"

const CatalogItemBoard = (props) => {
  // console.log(props)
	return (
    <div
        className="col-md-2 col-sm-3 col-xs-12"
        style={{ cursor: "pointer" }}>
      <div onClick={ () => props.dismiss(props.index) }>
        <div className="thumbnail item">
          <img src={ `http://${ OMURA_HOST }:${ OMURA_PORT}/${ props.img }` }  alt={ props.name } className="item__logo" />
          <div className="caption text-center">
            <h4>{ props.name }</h4> 
          </div>
        </div>
      </div>
    </div>
	)
}

export default CatalogItemBoard