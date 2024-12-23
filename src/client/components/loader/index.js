import React, { Component } from "react";
import { RingLoader } from "react-spinners";

export default class Loader extends Component {
  render() {
    return (
      <div
        className="sweet-loading"
        style={{ marginTop: "80px", marginBottom: "40px" }}
      >
        <RingLoader color={"#D81212"} size={70} loading={true} />
        <p>Loading...</p>
      </div>
    );
  }
}
