import React from "react";
import { Link } from "react-router";

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
          <div className="col-md-3 col-sm-4 col-xs-12">
            <Link to="stack_wizard.html">
              <div className="thumbnail">
                <img src={ Golang } alt="Golang" className="" />
                <div className="caption text-center">
                  <h4>Golang</h4> 
                  <p>
                    Go (golang) is a general purpose, higher-level, imperative programming language.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3 col-sm-4 col-xs-12">
            <Link to="stack_wizard.html">
              <div className="thumbnail">
                <img src={ PHP } alt="PHP" className="" />
                <div className="caption text-center">
                  <h4>PHP</h4> 
                  <p>
                    While designed for web development, the PHP scripting language also provides general-purpose use.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3 col-sm-4 col-xs-12">
            <Link to="stack_wizard.html">
              <div className="thumbnail">
                <img src={ Node } alt="NodeJS" className="" />
                <div className="caption text-center">
                  <h4>NodeJS</h4> 
                  <p>
                    Node.js is a JavaScript-based platform for server-side and networking applications.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="clearfix"></div>
        <h4>CMS</h4>
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <Link to="stack_wizard.html">
              <div className="thumbnail">
                <img src={ Wordpress } alt="Wordpress" className="" />
                <div className="caption text-center">
                  <h4>Wordpress</h4> 
                  <p>
                    The WordPress rich content management system can utilize plugins, widgets, and themes.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="clearfix"></div>
        <h4>Database</h4>
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <Link to="service_wizard.html">
              <div className="thumbnail">
                <img src={ MySQL } alt="MySQL" className="" />
                <div className="caption text-center">
                  <h4>MySQL 5.6</h4> 
                  <p>
                    MySQL is a widely used, open-source relational database management system (RDBMS).
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3 col-sm-4 col-xs-12">
            <Link to="stack_wizard.html">
              <div className="thumbnail">
                <img src={ Postgres } alt="Postgres" className="" />
                <div className="caption text-center">
                  <h4>Postgres</h4> 
                  <p>
                    The PostgreSQL object-relational database system provides reliability and data integrity.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="clearfix"></div>
        <h4>Framework</h4>
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <Link to="stack_wizard.html">
              <div className="thumbnail">
                <img src={ Rails } alt="Rails" className="" />
                <div className="caption text-center">
                  <h4>Ruby on Rails</h4> 
                  <p>
                    Open-source web application framework written in Ruby.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3 col-sm-4 col-xs-12">
            <Link to="stack_wizard.html">
              <div className="thumbnail">
                <img src={ Laravel } alt="Laravel" className="" />
                <div className="caption text-center">
                  <h4>Laravel</h4> 
                  <p>
                    Web application framework with expressive, elegant syntax.
                  </p>
                </div>
              </div>
            </Link>
          </div>
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