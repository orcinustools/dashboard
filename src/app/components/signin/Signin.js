import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import renderField from './renderField'
import { Link, browserHistory } from 'react-router'

import Notifications from 'react-notification-system-redux'

import OrcinusLogo from '../../assests/images/logo/OrcinusFix_black.svg'

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.username || values.username.trim() === '') {
    errors.username = 'Enter username';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
  return hasErrors && errors;
}

const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Username and/or password invalid',
  // message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};

class Signin extends Component {

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    // this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }

  handleClick() {
    // this.props.dispatchNotification(Notifications.success, 250, notificationOpts);
    this.props.dispatchNotification(Notifications.error, notificationOpts);
    // this.props.dispatchNotification(Notifications.warning, 750, notificationOpts);
    // this.props.dispatchNotification(Notifications.info, 1000, notificationOpts);
  }

  // handleRemoveAll() {
  //   this.context.store.dispatch(Notifications.removeAll());
  // }
  

  _handleSubmit(values) {
    this.props.signInUser(values)
  }

  render() {
    const { handleSubmit, loading, notifications, error } = this.props
    
    return (

      <div>
        <Notifications notifications={notifications} />

        <div className="row">
          <div className="col-md-4 col-md-offset-4 "style={{ textAlign: 'center' }}>
            <Link to="/">
              <img style={{ height: '200px' }} src={OrcinusLogo} />
            </Link>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h3 className="text-center">Signin</h3>
            <p className="text-center">
              Don't have an account? Signup <Link to="/signup">here</Link>
            </p>
          </div>
        </div>

        <div className="row">
          <div className='col-md-4 col-md-offset-4'>
            <form onSubmit={ handleSubmit(this._handleSubmit) }>
              <Field
                 name="username"
                 type="text"
                 component={ renderField }
                 disabled={ loading }
                 label="@username*" />
              <Field
                 name="password"
                 type="password"
                 disabled={ loading }
                 component={ renderField }
                 label="Password*" />
              <div>
              { loading ?
                <button
                        type="submit"
                        className="btn btn-primary btn-block create-button"
                        disabled={ loading }>
                  <i className="fa fa-spinner fa-pulse fa-fw"></i> Signin
                </button> :
                <button
                        type="submit"
                        className="btn btn-primary btn-block create-button"
                        disabled={ loading }>
                  Signin
                </button>
              }
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'SignInForm', // a unique identifier for this form
  validate
})(Signin)
