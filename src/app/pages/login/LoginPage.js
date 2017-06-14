import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import renderField from './renderField'
import { Link, browserHistory } from 'react-router'

import { signInUser, signInUserFailure, signInUserSuccess } from '../../actions/userActions'

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

class LoginPage extends Component {
  

  _handleSubmit(values, dispatch) {
    return dispatch(signInUser(values))
      .then((result) => {
        if(result.payload && result.payload.response && result.payload.response.status !== 200) {
          dispatch(signInUserFailure(result.payload.response.data));
          throw new SubmissionError(result.payload.response.data);
        }
        
        // console.log(result.value.data.token)
        sessionStorage.setItem('orcinus', result.value.data.token);
        dispatch(signInUserSuccess(result.value.data)); //ps: this is same as dispatching RESET_USER_FIELDS
        browserHistory.push('/')
      }) 
  }

  render() {
    const { handleSubmit } = this.props
    
    return (

      <div>
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
                 label="@username*" />
              <Field
                     name="password"
                     type="password"
                     component={ renderField }
                     label="Password*" />
              <div>
              <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={ false }>
                Submit
              </button>
              <Link
                    to="/"
                    className="btn btn-error"> Cancel
              </Link>
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
})(LoginPage)
