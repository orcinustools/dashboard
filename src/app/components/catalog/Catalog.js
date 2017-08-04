import yaml                   from 'js-yaml'
import React                  from "react"
import { connect }            from "react-redux"
import { bindActionCreators } from 'redux'
import { Link }               from "react-router"
import { Field, reduxForm }   from "redux-form"
import _                      from "lodash"
import Select, { Creatable }  from "react-select"
import Notifications          from 'react-notification-system-redux'
import { notificationOpts }   from '../../utils/NotificationUtils'

import CatalogSearchBar from "./CatalogSearchBar"
import CatalogItem      from "./CatalogItem"
import CatalogItemBoard from "./CatalogItemBoard"

import "./Catalog.css"

export default class Catalog extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleDissmis = this.handleDissmis.bind(this)
    this.handleAddItemToBoard = this.handleAddItemToBoard.bind(this)
    this.handleCreateService = this.handleCreateService.bind(this)
    this.selectChange = this.selectChange.bind(this)
    this.updateCustomDomain = this.updateCustomDomain.bind(this)
    this.handleManifestFile = this.handleManifestFile.bind(this)
  }

  componentDidMount() {
    window.manifestFile = null;
    window.board = [];
    this.props.fetchStacks()
    this.props.fetchCatalog()
  }

  handleDissmis(name) {
    const { removeItemFromBoard, dispatchNotification } = this.props
    if (name) {
      removeItemFromBoard(name)
      dispatchNotification(
        Notifications.success, 
        notificationOpts(
          'Success', 
          `Successfully remove ${ name } from board!`
          )
        )
    } else {
      window.manifestFile = false;
      removeItemFromBoard()
    }
  }

  handleAddItemToBoard(name, category) {
    window.manifestFile = null;
    const { addItemToBoard, info, dispatchNotification } = this.props

    addItemToBoard(name, category)
    dispatchNotification(
      Notifications.success, 
      notificationOpts(
        'Success', 
        `Successfully added ${ name } to board!`,
        () => document.getElementById('#board').scrollIntoView(),
        null, 2
      )
    )
  }

  handleCreateService(domain, newService) {
    if (window.manifestFile) {
      newService = {
        opt : yaml.load(window.manifestFile)
      }
    }
    this.props.deployService(domain, newService)
  }

  handleManifestFile(evt) {
    if (evt.target.files.length < 0) {
      return;
    }

    const { addManifestToBoard, info, dispatchNotification } = this.props

    var file = evt.target.files[0];
    var reader = new FileReader();
    var obj;
    reader.onload = function(e) {
      console.log(e.target);
      console.log(e.target.result);
      try {
        obj = yaml.load(e.target.result);
      } catch(e){
        return window.alert('Not a valid YAML manifest file.');
      }
      if (!obj.services) {
        return window.alert('Not a valid YAML manifest file.');
      }
      // TODO set stack name from manifest
      window.newService.opt = obj.services;
      window.manifestFile = e.target.result;


  
      addManifestToBoard(obj);
      dispatchNotification(
        Notifications.success, 
        notificationOpts(
          'Success', 
          `Successfully parsed the manifest file!`,
          () => document.getElementById('#board').scrollIntoView(),
          null, 2
        )
      )
    }
    reader.readAsText(file);
  }

  renderBoardItem(board) {
    if (window.manifestFile) {
      return (
      <div>
        <button 
            type="button"
            style={{marginLeft:-20}}
            className="item-close btn btn-default btn-xs pull-right"
            aria-label="Close"
            onClick={ () => this.handleDissmis() } >
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <pre>{ window.manifestFile }</pre>
      </div>
      )
    } else {
      const { info } = this.props
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
  }

  renderOperatingSystem(data) {
    const arrData = _.map(data)

    return arrData.map((d) => {
      return (
        <CatalogItem
          key={ d.name }
          onAdd={this.handleAddItemToBoard}
          status={ d.status }
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
          status={ d.status }
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
          status={ d.status }
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
          status={ d.status }
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
          status={ d.status }
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
    const { 
      fetching, fetched, error, catalog, board, info, user,
      newService, newService_loading, newService_done,
    } = this.props

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
                          clearable={false}
                          allowCreate={true}
                          disabled={ newService_loading }
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
                          readOnly={ newService_loading }
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
                        { board && 
                          board.length > 0 &&
                          newService && 
                          newService.opt && 
                          newService.opt.services ? 
                          ( newService && 
                            newService.opt && 
                            newService.opt.domain ? 
                            newService.opt.domain :
                            ( fetched && 
                              user && newService && 
                              newService.opt && 
                              newService.opt.services &&
                              newService.opt.services[Object.keys(newService.opt.services)[0]] &&
                              newService.opt.services[Object.keys(newService.opt.services)[0]].endpoint ? 
                              `${user.data.id}-${newService.opt.stack}-${Object.keys(newService.opt.services)[0]}-${info.endpoint}` : 
                              'no domain provided'
                            )
                          ) : 'select service and project first' }
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-3 col-md-offset-2">
                    {/* TODO: tambah loading status dan redirect ke halaman stack */}
                      { this.props.newService && 
                        this.props.newService.opt && 
                        this.props.newService.opt.stack && 
                        ((board && 
                        board.length > 0) || window.manifestFile) ? 
                        ( newService_loading ? 
                          <button 
                              disabled={ newService_loading }
                              style={{ border: "1px solid #209687" }}
                              className="btn btn-success create-button" >
                            <i className="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
                            &nbsp; Processing
                          </button> :
                          <button 
                            style={{ border: "1px solid #209687" }}
                            className="btn btn-success create-button"
                            onClick={ () => this.handleCreateService(newService && newService.opt && newService.opt.domain ? newService.opt.domain :(fetched && user && newService && newService.opt && newService.opt.services ? `${user.data.id}-${newService.opt.stack}-${Object.keys(newService.opt.services)[0]}-${info.endpoint}`: undefined), newService) } >
                          <i className="fa fa-rocket fa-fw" aria-hidden="true"></i>
                          &nbsp; Deploy Service
                        </button>)
                         :
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

                  <div className="well well-lg" id="#board">
                    {
                      board.length > 0 || window.manifestFile ?
                      this.renderBoardItem(board) : 
                      <h4 style={{ textAlign: 'center', marginTop: '10px', color: '#c3c3c3' }}>
                        Please choose service(s) from catalog below or pick a YAML manifest file
                          <br/>
                          <input type="file" 
                            style={{ border: "1px solid #209687" , margin: "0 auto", marginTop : 10 }}
                            className="btn btn-success create-button"
                            onChange={ this.handleManifestFile } />
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
          <h3 className="category-header">Operating System</h3>
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
              this.renderLanguage(catalog.categories.languages)
            }
          </div>

          {/*<div className="row">
            <div className="col-md-12">
              <button className="btn btn-primary btn-block create-button">BUILD NEW IMAGE</button>
            </div>
          </div>*/}
        </div>
			</div>
		)
	}
}
