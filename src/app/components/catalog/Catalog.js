import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { Link } from "react-router"
import { Field, reduxForm } from "redux-form"
import _ from "lodash"
import Select, { Creatable }   from "react-select"

import "./Catalog.css"

import CatalogSearchBar from "./CatalogSearchBar"
import CatalogItem from "./CatalogItem"
import CatalogItemBoard from "./CatalogItemBoard"

export default class Catalog extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleDissmis = this.handleDissmis.bind(this)
    this.handleAddItemToBoard = this.handleAddItemToBoard.bind(this)
    this.handleCreateService = this.handleCreateService.bind(this)
    this.onChangeStack = this.onChangeStack.bind(this)
    this.selectChange = this.selectChange.bind(this)
    this.updateCustomDomain = this.updateCustomDomain.bind(this)
  }

  onChangeStack(event) {
    // console.log(event.target.value)
    // this.props.changeStackNameInput(event.target.value)
  }

  componentDidMount() {   
    this.props.fetchStacks()
    this.props.fetchCatalog()
	}

  handleDissmis(name) {
    const { removeItemFromBoard } = this.props
    removeItemFromBoard(name)
    // console.log(name)
  }

  handleAddItemToBoard(name, category) {
    const { addItemToBoard } = this.props

    addItemToBoard(name, category)
  }

  handleCreateService(newService) {
    // console.log(newService)
    this.props.deployService(newService)
  }

  renderBoardItem(board) {
    return board.map((b, index) => {
      return (
        <CatalogItemBoard 
          index={ index }
          key={ index }
          serviceName={ Object.keys(b.service)[0] }
          img={ b.manifest.logo }
          title={ b.manifest.title }
          name={ Object.keys(b.service)[0] }
          image={ "b.service" }
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
          desc={ d.description }
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
          desc={ d.description }
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
          desc={ d.description }
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
          desc={ d.description }
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
          desc={ d.description }
          category="languages" />
      )
    }) 
  }

  selectChange(val) {
    console.log("Selected: ", val)
    this.props.setStackName(val.value)
  }

  updateCustomDomain(val) {
    console.log(val.target.value)
    this.props.updateCustomDomain(val.target.value)
  }

	render() {
    const { fetching, fetched, error, catalog, board, newService, info, user } = this.props

    window.board = board
    window.newService = newService
    window.stacks = this.props.stacks
    window.SelectOptions = this.props.options

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

          
        <div className="row">
          <div className="board">
            <div className="col-xs-12">
              <div className="panel">
                <header className="panel-heading">
                  PROJECT WIZARD
                </header>
                <div className="panel-body">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label 
                          className="col-sm-2 control-label"
                          htmlFor="name">
                        PROJECT NAME
                      </label>
                      <div className="col-sm-10">
                        <Creatable
                          name="groupName"
                          value={this.props.newService.opt ? this.props.newService.opt.stack : ''}
                          options={this.props.options}
                          onChange={this.selectChange}
                          clearable={true}
                          allowCreate={true}
                          promptTextCreator ={(label) => `Create New Project "${label}"`}
                          searchable={true}
                          noResultsText="No project found"
                          placeholder="Project Name..." />
                      </div>
                    </div>
                    <div className="form-group">
                      <label 
                          className="col-sm-2 control-label"
                          htmlFor="name">
                        CUSTOM DOMAIN
                      </label>
                      <div className="col-sm-10">
                        <input 
                          name="domain" 
                          className="form-control"
                          placeholder="Type your custom domain here ..."
                          onChange={this.updateCustomDomain}
                          value={ newService && 
                                  newService.opt && 
                                  newService.opt.domain ?
                                  newService.opt.domain : '' } />
                      </div>
                    </div>
                    <div className="form-group">
                      <label 
                          className="col-sm-2 control-label"
                          htmlFor="name">
                        DOMAIN
                      </label>
                      <div className="col-sm-10">
                        <p className="form-control-static" style={{ fontSize: '1.25em'}}>
                        { newService && newService.opt && newService.opt.domain ? newService.opt.domain :(fetched && user && newService && newService.opt && newService.opt.services ? `${user.data.id}-${newService.opt.stack}-${Object.keys(newService.opt.services)[0]}-${info.data.endpoint}`: 'select service and project first') }
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-3 col-md-offset-2">
                    {/* TODO: tambah loading status dan redirect ke halaman stack */}
                      { this.props.newService && 
                        this.props.newService.opt && 
                        this.props.newService.opt.stack ?
                        <button 
                            style={{ border: "1px solid #209687" }}
                            className="btn btn-success create-button"
                            onClick={ () => this.handleCreateService(newService) } >
                          <i className="fa fa-rocket fa-fw" aria-hidden="true"></i>
                          &nbsp; Deploy Service
                        </button> :
                        <button 
                            className="btn btn-default"
                            type="button"
                            disabled={true} >
                          <i className="fa fa-rocket fa-fw" aria-hidden="true"></i>
                          &nbsp; Deploy Service
                        </button>
                      }
                      </div>
                    </div>
                  </div>

                  <div className="well well-lg">
                    {
                      board.length > 0 ? 
                      this.renderBoardItem(board) :
                      <h4 style={{ textAlign: 'center', marginTop: '10px', color: '#c3c3c3' }}>
                        choose services from catalog below
                      </h4> 
                    }
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

				<div>
          {/*<h3 className="category-header">Operating System</h3>
          { fetching &&
            <div className="row">
              <div style={{ textAlign: "center", minHeight: "187px"}}>
                <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
              </div>
            </div>
          }

          <div className="row">
            { fetched && 
              this.renderOperatingSystem(catalog.categories.os)
            }
          </div>*/}
        

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
              this.renderLanguage(catalog.categories.languages)
            }
          </div>

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