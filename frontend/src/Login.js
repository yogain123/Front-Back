import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { LoginAction } from "./Redux/LoginAction";
import { connect } from "react-redux";

class Login extends Component {
  state = { email: "", password: "" };

  async onSubmit(event) {
    event.preventDefault();
    this.props.LoginAction(this.state.email, this.state.password);
    if (!this.props.LoginDetails.isLoggedIn) {
      alert("please login Register First");
    }
    if (this.props.LoginDetails.isLoggedIn) {
      this.props.history.push(`/home?email=${this.state.email}`);
    }
  }

  render() {
    return (
      <div id="login">
        <h3 className="text-center text-white pt-5">Login</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form">
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      onChange={event =>
                        this.setState({ email: event.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={event =>
                        this.setState({ password: event.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                    </label>
                    <br />
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="submit"
                      onClick={event => this.onSubmit(event)}
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <Link to="/Register" className="text-info">
                      Register here
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(states) {
  return {
    LoginDetails: states.LoginReducer
  };
}

export default connect(mapStateToProps, { LoginAction })(Login);
