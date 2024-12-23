import React, { Component } from "react";
import { Col, Row } from "reactstrap";

export default class WhyChooseUs extends Component {
  render() {
    return (
      <Col sm="12">
        <Row>
          <Col sm="4" className="text-center">
            <img src="/images/map-marker-300x300.png" alt="Handpicked Hotels" />
            <h3 className="text-capitalize">handpicked hotels</h3>
            <p>
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa
            </p>
          </Col>
          <Col sm="4" className="text-center">
            <img
              src="/images/worldwide-location-300x300.png"
              alt="World Class Service"
            />
            <h3 className="text-capitalize">world class service</h3>
            <p>
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa
            </p>
          </Col>
          <Col sm="4" className="text-center">
            <img
              src="/images/hot-air-balloon-300x300.png"
              alt="Best Price Guarantee"
            />
            <h3 className="text-capitalize">best price guarantee</h3>
            <p>
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa
            </p>
          </Col>
        </Row>
      </Col>
    );
  }
}
