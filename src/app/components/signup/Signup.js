import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import renderField from './renderField'
import { Link, browserHistory } from 'react-router'

import Notifications from 'react-notification-system-redux'
import { notificationOpts } from '../../utils/NotificationUtils'

import OrcinusLogo from '../../assests/images/logo/OrcinusFix_black.svg'

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;

  if (!values.name || values.name.trim() === '') {
    errors.name = 'Enter a name';
    hasErrors = true;
  }
  if (!values.username || values.username.trim() === '') {
    errors.username = 'Enter username';
    hasErrors = true;
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter email';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
  if (!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = 'Enter Confirm Password';
    hasErrors = true;
  }

  if (values.confirmPassword && values.confirmPassword.trim() !== '' && values.password && values.password.trim() !== '' && values.password !== values.confirmPassword) {
    errors.password = 'Password And Confirm Password don\'t match';
    errors.password = 'Password And Confirm Password don\'t match';
    hasErrors = true;
  }
  return hasErrors && errors;
}


class Signup extends Component {
  constructor(props) {
    super(props);
    
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(values, dispatch) {
    return this.props.signUpUser(values)
      .then(() => {
        dispatch(Notifications.success(notificationOpts('Success', `Successfully Signup`)))
        browserHistory.push('/signin')
      })
      .catch((error) => {
        console.log(error.response.data.code)
        console.log(values)
        if(error.response.data.code === 11000) {
          throw new SubmissionError({
            email: 'Username or email already exists',
            username: 'Username or email already exists'
          })
        }
      })
  }

  render() {

    const { handleSubmit, loading, notifications } = this.props

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
            <h3 className="text-center">Signup</h3>
            <p className="text-center">
              Already signup? Signin <Link to="/signin">here</Link>
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
                     label="@username*" />
              <Field
                     name="email"
                     type="email"
                     component={ renderField }
                     label="Email*" />
              <Field
                     name="password"
                     type="password"
                     component={ renderField }
                     label="Password*" />
              <Field
                     name="confirmPassword"
                     type="password"
                     component={ renderField }
                     label="Confirm Password*" />
              <div>
              { loading ?
                <button
                        type="submit"
                        className="btn btn-primary btn-block create-button"
                        disabled={ loading }>
                  <i className="fa fa-spinner fa-pulse fa-fw"></i> Signup
                </button> :
                <button
                        type="submit"
                        className="btn btn-primary btn-block create-button"
                        disabled={ loading }>
                  Signup
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
  form: 'SignupForm', // a unique identifier for this form
  validate
})(Signup)
