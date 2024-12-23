import React, { Component } from "react";
import get from "lodash/get";
import ProgressiveImage from "react-progressive-image-loading";

const _ = { get };
export default class index extends Component {
  render() {
    let { image, name } = this.props;
    return (
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousel-caption d-none d-md-block">
                <h3>{name}</h3>
                <p />
              </div>
              <div className="carousel-img-box img-object-fit">
                <ProgressiveImage
                  src={image}
                  transitionTime={1000}
                  key={image}
                  transitionFunction="ease"
                  render={(src, style, key) => (
                    <img
                      src={src}
                      style={style}
                      key={key}
                      className="item desk-block"
                    />
                  )}
                />
                {/* <img src={image} className="item desk-block" alt="" /> */}
                <img
                  src="/images/unnamed.jpg"
                  className="item mob-block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
