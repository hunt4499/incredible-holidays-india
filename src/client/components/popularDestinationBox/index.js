import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image-loading";

export default class PopularDestionationBox extends Component {
  render() {
    // const { state, image } = this.props;
    return (
      <div className="dest-box">
        <a href="javascript:void(0)">
          <div className="popular-dest-img-box img-object-fit">
            <ProgressiveImage
              src={`${this.props.baseUrl}${this.props.data.imagePreviewUrl}`}
              transitionTime={1000}
              key={this.props.data.slug}
              transitionFunction="ease"
              render={(src, style, key) => (
                <img src={src} style={style} key={key} />
              )}
            />
            {/* <img
            src={`${this.props.baseUrl}${this.props.data.imagePreviewUrl}`}
            alt=""
          /> */}
          </div>
          <div className="dest-overlay">
            <h3 className="text-uppercase">{this.props.data.state}</h3>
          </div>
        </a>
      </div>
    );
  }
}
