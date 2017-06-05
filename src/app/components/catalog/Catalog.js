import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { Link } from "react-router"
import { Field, reduxForm } from "redux-form"
import _ from "lodash"

import "./Catalog.css"

import CatalogSearchBar from "./CatalogSearchBar"
import CatalogItem from "./CatalogItem"
import CatalogItemBoard from "./CatalogItemBoard"

export default class Catalog extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleDissmis = this.handleDissmis.bind(this)
    this.handleAddItemToBoard = this.handleAddItemToBoard.bind(this)
  }

	componentWillMount() {
		this.props.fetchCatalog();
	}

  handleDissmis(index) {
    const { removeItemFromBoard } = this.props
    removeItemFromBoard(index)
    console.log(index)
  }

  handleAddItemToBoard(name, category) {
    const { addItemToBoard } = this.props
    addItemToBoard(name, category)
    console.log(name, category)
  }

  renderBoardItem(board) {
    return board.map((b, index) => {
      return (
        <CatalogItemBoard 
          url="/stacks/new"
          index={ index }
          key={ index }
          img={ b.logo }
          name={ b.Name }
          dismiss={this.handleDissmis} />
      )
    })
  }

  renderOperatingSystem(data) {
    const arrData = _.map(data)

    return arrData.map((d) => {
      return (
        <CatalogItem
          key={ d.name }
          onAdd={this.handleAddItemToBoard}
          img={ d.logo }
          name={ d.name }
          title={ d.title }
          category="os" />
      )
    })
  }

  renderApplication(data) {
    const arrData = _.map(data)

    return arrData.map((d) => {
      return (
        <CatalogItem
          key={ d.name }
          onAdd={this.handleAddItemToBoard}
          img={ d.logo }
          name={ d.name }
          title={ d.title }
          category="applications" />
      )
    })
  }

  renderDatabase(data) {
    const arrData = _.map(data)

    return arrData.map((d) => {
      return (
        <CatalogItem
          key={ d.name }
          onAdd={this.handleAddItemToBoard}
          img={ d.logo }
          name={ d.name }
          title={ d.title }
          category="databases" />
      )
    })   
  }

  renderFramework(data) {
    const arrData = _.map(data)

    return arrData.map((d) => {
      return (
        <CatalogItem
          key={ d.name }
          onAdd={this.handleAddItemToBoard}
          img={ d.logo }
          name={ d.name }
          title={ d.title }
          category="frameworks" />
      )
    }) 
  }

  renderLanguage(data) {
    const arrData = _.map(data)

    return arrData.map((d) => {
      return (
        <CatalogItem
          key={ d.name }
          onAdd={this.handleAddItemToBoard}
          img={ d.logo }
          name={ d.name }
          title={ d.title }
          category="language" />
      )
    }) 
  }

	render() {
    const { fetching, fetched, error, catalog, board } = this.props;
    window.board = board

		return (
			<div>
        <section className="content-header">
          <h1>CATALOG</h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li className="active">CATALOG</li>
          </ol>
        </section>

        {/*<div className="row" style={{ marginBottom: '2em', marginTop: '2em' }}>
					<CatalogSearchBar />
        </div>*/}

          
        { board.length ?
          <div className="row">
            <div className="board">
              <div className="col-xs-12">
                <div className="panel">
                  <header className="panel-heading">
                    New Service
                  </header>
                  <div className="panel-body">
                    <form>
                      <div className="form-horizontal">
                        <div className="form-group">
                          <label 
                              className="col-sm-2 control-label"
                              htmlFor="name">
                            GROUP NAME
                          </label>
                          <div className="col-sm-10">
                            <Field 
                              name="name"
                              component="input"
                              className="form-control"
                              type="text" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-3 col-md-offset-2">
                            <button 
                                type="submit"
                                className="btn btn-create"
                                className="btn btn-success create-button" >
                              <i className="fa fa-rocket fa-fw" aria-hidden="true"></i>
                              &nbsp; Deploy Service
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="well well-lg">
                      {
                        board.length > 0 ? this.renderBoardItem(board) : '' 
                      }
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>:
          ''
        }


        <div className="clearfix"></div>
				<div>
          <h3 className="category-header">Operating System</h3>
          { fetching &&
            <div className="row">
              <div style={{ textAlign: "center", minHeight: "187px"}}>
                <i className="fa fa-refresh fa-spin fa-3x fa-fw" style={{ color: "#939393"}}></i>
              </div>
            </div>
          }

          <div className="row">
            { fetched && 
              this.renderOperatingSystem(catalog.categories.os)
            }
          </div>


          <div className="clearfix"></div>
          <h3 className="category-header">Applications</h3>
          { fetching &&
            <div className="row">
              <div style={{ textAlign: "center", minHeight: "187px"}}>
                <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
              </div>
            </div>
          }
          
          <div className="row">
            { fetched && 
              this.renderApplication(catalog.categories.applications)
            }
          </div>

          <div className="clearfix"></div>
          <h3 className="category-header">Database</h3>
          { fetching &&
          <div className="row">
            <div style={{ textAlign: "center", minHeight: "187px"}}>
              <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
            </div>
          </div>
          }

          <div className="row">
            { fetched &&
              this.renderDatabase(catalog.categories.databases)
            }
          </div>

          <div className="clearfix"></div>
          <h3 className="category-header">Framework</h3>
          { fetching &&
          <div className="row">
            <div style={{ textAlign: "center", minHeight: "187px"}}>
              <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
            </div>
          </div>
          }

          <div className="row">
            { fetched &&
              this.renderFramework(catalog.categories.frameworks)
            }
          </div>

          <h3 className="category-header">Language Stack</h3>
          { fetching &&
          <div className="row">
            <div style={{ textAlign: "center", minHeight: "187px"}}>
              <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
            </div>
          </div>
          }

          <div className="row">
            { fetched &&
              this.renderApplication(catalog.categories.languages)
            }
          </div>

          { error &&
            "error"
          }

          {/*
            <div className="row">
              <div className="col-md-12">
                <button className="btn btn-primary btn-block create-button">BUILD NEW IMAGE</button>
              </div>
            </div>
          */}
        </div>
			</div>
		)
	}
}
Catalog = reduxForm({
  form: 'CatalogForm'
})(Catalog)