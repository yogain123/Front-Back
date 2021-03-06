import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = { email: "", password: "", name: "" };

  async onSubmit(event) {
    event.preventDefault();
    let { email, password, name } = this.state;
    let response = await axios.post("http://localhost:3009/register", {
      email,
      password,
      name
    });
    response = response.data;
    if (response.status) {
      this.props.history.push("/");
    } else {
      alert("Something went wrong");
    }
  }

  render() {
    return (
      <div id="login">
        <h3 className="text-center text-white pt-5">Register</h3>
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
                    <label htmlFor="email" className="text-info">
                      Email:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      onChange={event =>
                        this.setState({ email: event.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="text-info">
                      Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      onChange={event =>
                        this.setState({ name: event.target.value })
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
