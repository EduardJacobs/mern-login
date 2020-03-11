import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/login_style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.loginFormSubmit = this.loginFormSubmit.bind(this);
    this.loginFormClear = this.loginFormClear.bind(this);
  }

  shouldComponentUpdate(nextProps){
    // if server response positive and user logged in
    // clear the form and redirect them to the homepage
    if (nextProps.user.loggedIn) {
      // clear form values
      this.loginFormClear();
      this.props.history.push("/");
      return false;
    } else {
      return true;
    }
  }

  componentDidMount() {
    // on hard refresh redirect them to homepage
    // if user logged in
    if (this.props.user.loggedIn) {
      this.props.history.push("/");
      return false;
    } else {
      return true;
    }
  }

  loginFormSubmit(e) {
    // submit login form values
    e.preventDefault();
    this.props.loginSubmit(
      this.props.login.form.email,
      this.props.login.form.password
    );
  }

  loginFormClear(){
    this.props.loginFormClear();
  }  

  handleUserInput(e) {
    // populate login form with values
    const name = e.target.name;
    const value = e.target.value;
    this.props.loginFormValues(name, value);
  }

  render() {
    return (
      <div id="container" className="text-center">
        <form className="form-signin" onSubmit={this.loginFormSubmit}>
          <img className="mb-4" src={require('../assets/img/logo.png')} alt="" width="72" height="72" />
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            name="email"
            required
            autoFocus
            maxLength="100"
            value={this.props.login.form.email}
            onChange={this.handleUserInput}
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            required
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            title="Length should be 6 characters or more"
            pattern=".{6,}"
            maxLength="100"
            value={this.props.login.form.password}
            onChange={this.handleUserInput}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
          <div className="form-errors">
              { this.props.login.error
                ? this.props.login.errorMessage
                : "" }
            </div>          
          <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
        </form>
      </div>
    );
  }
}

export default Login;
