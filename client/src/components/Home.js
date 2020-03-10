import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/home_style.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // if user logged in redirect them to the homepage
    if (this.props.user.loggedIn) {
      this.props.history.push("/");
      return false;
    } else {
      this.props.history.push("/login");
      return true;
    }
  }

  logout(){
    // will clear the token and persisted state
    // and redirect to the login page
    this.props.user.loggedIn = false;
    localStorage.clear();
    this.props.history.push("login");
  }

  render() {
    return (
      <div className="bgimg">
        <div className="caption">
          <p className="border">You are logged in now!</p>
          <button type="button" className="btn btn-danger" onClick={ this.logout }>
            Log Out
          </button>
          <footer>&copy; 2020</footer>
        </div>
      </div>
    );
  }
}
