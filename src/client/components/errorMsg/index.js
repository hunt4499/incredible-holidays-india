import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ErrorMessage extends Component {
  render() {
    let { message } = this.props;
    return (
      <div className="error-msg">
        <h4>
          <span>{message}</span>
        </h4>
        <Button outline color="danger" onClick={() => this.props.retry()}>
          Try Again
        </Button>
      </div>
    );
  }
}
