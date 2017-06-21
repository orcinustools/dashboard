import React    from 'react'
import { Link } from 'react-router'
import cs       from 'classnames'

import { ORCINUS_OMURA } from "../../config/environtment"
import './CatalogItem.css'

const CatalogItem = (props) => {

  const itemStatus = cs({
    'status-false': props.status === false,
    'status-true': props.status === true
  })
  
	return (
    <div className="col-md-2 col-sm-3 col-xs-12">
      <div
          className={ itemStatus }
          onClick={ props.status ? () => props.onAdd(props.name, props.category) : undefined }>
        <div className="thumbnail">
          <img src={ `${ ORCINUS_OMURA }/${ props.img }` } alt={ props.name }  />
          <div className="caption text-center">
            <h4>{ props.title }</h4> 
            {/*<p>
              { props.desc }
            </p>*/}
          </div>
        </div>
      </div>
    </div>
	)
}

export default CatalogItem
