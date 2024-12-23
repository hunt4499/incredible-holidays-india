import React, { Component } from "react";

export default class NoItemFound extends Component {
  render() {
    return (
      <div className="row d-flex justify-content-center col-sm-12">
        <div className="col-sm-6 no-result-item">
          <h3 className="text-danger">no result found</h3>
          <p>We can't find what you are looking for</p>
        </div>
      </div>
    );
  }
}
