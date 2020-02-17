import React, { Component } from "react";
import qp from "query-parse";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    let query = qp.toObject(this.props.location.search.substring(1));
    return <div>This is Home Page, Welcome {query.email}</div>;
  }
}

function mapStateToProps(states) {
  return {
    LoginDetails: states.LoginReducer
  };
}

export default connect(mapStateToProps)(Home);
