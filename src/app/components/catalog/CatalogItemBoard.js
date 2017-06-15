import React from "react"
import PropTypes  from "prop-types"
import { Link }   from "react-router"
import Select   from "react-select"

import { ORCINUS_OMURA } from "../../config/environtment"

import "./CatalogItemBoard.css"

const CatalogItemBoard = (props) => {
  // console.log(props)
	return (
    <div
        className="col-md-2 col-sm-3 col-xs-12">
      <div className="thumbnail item">
        <button 
            type="button"
            className="item-close btn btn-default btn-xs pull-right"
            aria-label="Close"
            onClick={ () => props.dismiss(props.name) } >
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        {/*<Link 
            to="#modalEditItem"
            data-toggle="modal"
            className="item-close btn btn-default btn-xs pull-right" >
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </Link>*/}
        <div className="clearfix"></div>
        <img src={ `${ ORCINUS_OMURA }/${ props.img }` }  alt={ props.name } className="item__logo" />
        <div className="caption text-center">
          <h4>{ props.title }</h4> 
        </div>
      </div>
      {/*<div
          aria-hidden="true"
          aria-labelledby="myModalLabel"
          role="dialog"
          tabIndex="-1"
          id="modalEditItem"
          className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div 
                className="modal-header"
                style={{ padding: "10px" }}>
              <button
                  aria-hidden="true"
                  data-dismiss="modal"
                  className="close"
                  type="button">
                ×
              </button>
              <h5 className="modal-title">Edit Item</h5>
            </div>
            <div className="modal-body">
              <form className="form-horizontal" role="form">

                <div className="form-group">
                  <label
                      htmlFor="inputVolumeName"
                      className="col-lg-3 col-sm-3 control-label">
                    Service Name
                  </label>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      id="inputContainerPort"
                      placeholder="Service Name"
                      value={ props.name } />
                  </div>
                </div>

                <div className="form-group">
                  <label
                      htmlFor="inputVolumeName"
                      className="col-lg-3 col-sm-3 control-label">
                    Image
                  </label>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      id="inputContainerPort"
                      placeholder="Service Name"
                      value={ props.image } />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-8 col-md-offset-3">
                    <button
                        type="submit"
                        className="btn btn-success create-button">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
	)
}

export default CatalogItemBoard