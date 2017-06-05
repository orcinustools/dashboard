import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { Link } from "react-router"
import { Field, reduxForm } from "redux-form"

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
		this.props.fetchImages();
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

	render() {
    const { fetching, imageList, board } = this.props;
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

        <div className="row" style={{ marginBottom: '2em', marginTop: '2em' }}>
					<CatalogSearchBar />
        </div>

          
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

          { !fetching &&
          <div className="row">
            <CatalogItem
                onAdd={this.handleAddItemToBoard}
                img={"ubuntu.svg"}
                name="Ubuntu"
                category={"test"}>
              {/*The leading operating system for PCs, tablets, phones, IoT devices, 
              servers and the cloud*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "centos.svg" }
                name="Centos"
                category={"database"}>
              {/*The CentOS Linux distribution is a stable, predictable, manageable and 
              reproducible platform derived from the sources of Red Hat Enterprise
              Linux (RHEL).*/}
            </CatalogItem>

            <CatalogItem
                onAdd={this.handleAddItemToBoard}
                img={"alpinelinux.svg"}
                name="Alpine Linux"
                category={"test"}>
              {/*The leading operating system for PCs, tablets, phones, IoT devices, 
              servers and the cloud*/}
            </CatalogItem>

            <CatalogItem
                onAdd={this.handleAddItemToBoard}
                img={"coreos.svg"}
                name="Core OS"
                category={"test"}>
              {/*The leading operating system for PCs, tablets, phones, IoT devices, 
              servers and the cloud*/}
            </CatalogItem>
          </div>
          }

          <div className="clearfix"></div>
          <h3 className="category-header">Content Management System</h3>
          { fetching &&
          <div className="row">
            <div style={{ textAlign: "center", minHeight: "187px"}}>
              <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
            </div>
          </div>
          }

          { !fetching &&
            <div className="row">
              <CatalogItem
                  onAdd={ this.handleAddItemToBoard }
                  img={ "wordpress.svg" }
                  name="wordpress"
                  category={"content-management-system"}>
                {/*The WordPress rich content management system can utilize plugins,
                widgets, and themes.*/}
              </CatalogItem>
              <CatalogItem
                  onAdd={ this.handleAddItemToBoard }
                  img={ "joomla.svg" }
                  name="Joomla"
                  category={"content-management-system"}>
                {/*The WordPress rich content management system can utilize plugins,
                widgets, and themes.*/}
              </CatalogItem>
              <CatalogItem
                  onAdd={ this.handleAddItemToBoard }
                  img={ "drupal.svg" }
                  name="Drupal"
                  category={"content-management-system"}>
                {/*The WordPress rich content management system can utilize plugins,
                widgets, and themes.*/}
              </CatalogItem>
            </div>
          }

          <div className="clearfix"></div>
          <h3 className="category-header">Database</h3>
          { fetching &&
          <div className="row">
            <div style={{ textAlign: "center", minHeight: "187px"}}>
              <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
            </div>
          </div>
          }

          { !fetching &&
          <div className="row">
            <CatalogItem 
                onAdd={ this.handleAddItemToBoard }
                img={ "mysql.svg" }
                name="MySQL 5.6">
              {/*MySQL is a widely used, open-source relational database 
              management system (RDBMS).*/}
            </CatalogItem>

            <CatalogItem 
                onAdd={ this.handleAddItemToBoard }
                img={ "mariadb.svg" }
                name="Maria DB">
              {/*MySQL is a widely used, open-source relational database 
              management system (RDBMS).*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "postgresql.svg" }
                name="PostgreSQL">
              {/*The PostgreSQL object-relational database system provides 
              reliability and data integrity.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "redis.svg" } 
                name="Redis">
              {/*The WordPress rich content management system can utilize plugins,
              widgets, and themes.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "memcached.svg" }
                name="Memcached"
                category={"database"}>
              {/*The WordPress rich content management system can utilize plugins,
              widgets, and themes.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "mongodb.svg" }
                name="Mongo DB"
                category={"database"}>
              {/*The WordPress rich content management system can utilize plugins,
              widgets, and themes.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "couchdb.svg" }
                name="Couch DB"
                category={"database"}>
              {/*The WordPress rich content management system can utilize plugins,
              widgets, and themes.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "couchbase.svg" }
                name="Couchbase"
                category={"database"}>
              {/*The WordPress rich content management system can utilize plugins,
              widgets, and themes.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "cassandra.svg" }
                name="Cassandra"
                category={"database"}>
              {/*The WordPress rich content management system can utilize plugins,
              widgets, and themes.*/}
            </CatalogItem>
          </div>
          }

          <div className="clearfix"></div>
          <h3 className="category-header">Framework</h3>
          { fetching &&
          <div className="row">
            <div style={{ textAlign: "center", minHeight: "187px"}}>
              <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
            </div>
          </div>
          }

          { !fetching &&
          <div className="row">
            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "rails.svg" }
                name="Ruby on Rails">
              {/*Open-source web application framework written in Ruby.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "laravel.svg" }
                name="Laravel">
              {/*Web application framework with expressive, elegant syntax.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "flask.svg" }
                name="Flask">
              {/*Web application framework with expressive, elegant syntax.*/}
            </CatalogItem>
          </div>
          }

          <h3 className="category-header">Language Stack</h3>
          { fetching &&
          <div className="row">
            <div style={{ textAlign: "center", minHeight: "187px"}}>
              <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
            </div>
          </div>
          }

          { !fetching &&
          <div className="row">
            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "gopher.svg" }
                name="Golang">
              {/*Go (golang) is a general purpose, higher-level, imperative 
              programming language.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "php.svg" }
                name="PHP">
              {/*While designed for web development, the PHP scripting language 
              also provides general-purpose use.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "nodejs.svg" }
                name="NodeJS">
              {/*Node.js is a JavaScript-based platform for server-side and 
              networking applications.*/}
            </CatalogItem>

            <CatalogItem
                onAdd={ this.handleAddItemToBoard }
                img={ "ruby.svg" }
                name="Ruby">
              {/*Node.js is a JavaScript-based platform for server-side and 
              networking applications.*/}
            </CatalogItem>
          </div>
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