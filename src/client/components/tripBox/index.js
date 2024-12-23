import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ProgressiveImage from "react-progressive-image-loading";
import { Link } from "react-router-dom";

export default class TripBox extends Component {
  render() {
    let { data, baseUrl } = this.props;
    return (
      <div className="trip-box relative">
        <div className="relative">
          <Link to={`/itinerary-details/${data.slug}`}>
            <div className="trip-thumb relative">
              <div className="trip-img-box img-object-fit">
                <ProgressiveImage
                  src={`${baseUrl}${data.featuredImage}`}
                  transitionTime={1000}
                  key={data.slug}
                  transitionFunction="ease"
                  render={(src, style, key) => (
                    <img src={src} style={style} key={key} />
                  )}
                />
              </div>
              <h3 className="position-absolute p-3 mb-0 text-center">
                {data.pageTitle.substring(0, 22)}
                {data.pageTitle.length >= 23 ? "..." : null}
              </h3>
            </div>
            <div className="trip-info">
              <Row>
                <Col sm="7">
                  <p>
                    {data.shortDescription.substring(0, 20)}
                    {data.shortDescription.length >= 23 ? "..." : null}
                  </p>
                </Col>
                <Col sm="5">
                  <p className="v-align-middle text-right">
                    {" "}
                    {data.noOfPeople}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm="7">
                  <strong>{data.reviews.length} reviews</strong>
                </Col>
                <Col sm="5" className="v-align-middle text-right">
                  <span className="v-align-middle">
                    {data.itineraryDays.length} Days
                  </span>
                </Col>
              </Row>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
