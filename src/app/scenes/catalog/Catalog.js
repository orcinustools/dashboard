import React from "react";
import { Link } from "react-router";

import CatalogItem from "../../components/catalog/CatalogItem";

import Golang from "../../assests/images/catalog/golang.png";
import PHP from "../../assests/images/catalog/php.png";
import Node from "../../assests/images/catalog/node.png";
import Python from "../../assests/images/catalog/python.png";
import Wordpress from "../../assests/images/catalog/wordpress.png";
import MySQL from "../../assests/images/catalog/mysql.png";
import Postgres from "../../assests/images/catalog/postgres.png";
import Rails from "../../assests/images/catalog/rails.png";
import Ubuntu from "../../assests/images/catalog/ubuntu.png";
import Centos from "../../assests/images/catalog/centos.png";
import Laravel from "../../assests/images/catalog/laravel.png";


export default class Catalog extends React.Component {
	render() {
		return (
			<div>
        <div className="row" style={{ marginBottom: '2em', marginTop: '2em' }}>
          <div className="col-md-12">
            <form action="#" method="get" className="katalog-form">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type='submit' name='seach' id='search-btn' className="btn btn-default"><i className="fa fa-search"></i></button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <h4>Language Stack</h4>
        <div className="row">

          <CatalogItem url="/stacks/new" img={ Golang } name="Golang">
            Go (golang) is a general purpose, higher-level, imperative 
            programming language.
          </CatalogItem>

          <CatalogItem url="/stacks/new" img={ PHP } name="PHP">
            While designed for web development, the PHP scripting language 
            also provides general-purpose use.
          </CatalogItem>

          <CatalogItem url="/stacks/new" img={ Node } name="NodeJS">
            Node.js is a JavaScript-based platform for server-side and 
            networking applications.
          </CatalogItem>

        </div>

        <div className="clearfix"></div>
        <h4>CMS</h4>
        <div className="row">

          <CatalogItem url="/stacks/new" img={ Wordpress } name="Wordpress">
            The WordPress rich content management system can utilize plugins,
            widgets, and themes.
          </CatalogItem>

        </div>

        <div className="clearfix"></div>
        <h4>Database</h4>
        <div className="row">

          <CatalogItem url="/services/new" img={ MySQL } name="MySQL 5.6">
            MySQL is a widely used, open-source relational database 
            management system (RDBMS).
          </CatalogItem>

          <CatalogItem url="/services/new" img={ Postgres } name="PostgreSQL">
            The PostgreSQL object-relational database system provides 
            reliability and data integrity.
          </CatalogItem>

        </div>

        <div className="clearfix"></div>
        <h4>Framework</h4>
        <div className="row">

          <CatalogItem url="/stacks/new" img={ Rails } name="Ruby on Rails">
            Open-source web application framework written in Ruby.
          </CatalogItem>

          <CatalogItem url="/stacks/new" img={ Laravel } name="Laravel">
            Web application framework with expressive, elegant syntax.
          </CatalogItem>
          
        </div>

        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary btn-block">BUILD NEW IMAGE</button>
          </div>
        </div>
			</div>
		);
	}
}