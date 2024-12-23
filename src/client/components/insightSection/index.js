import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class InsightSection extends Component {
  render() {
    return (
      <div className="insights-section">
        <Container>
          <Row>
            <Col sm="12" className="d-flex justify-content-center">
              <h1 className="section-heading heading-border-top text-uppercase">
                Popular Destinations
              </h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm="3">
              <div className="insight-col text-center">
                <h3 className="counts">{this.props.data.years}</h3>
                <p>Years of exp</p>
              </div>
            </Col>
            <Col sm="3">
              <div className="insight-col text-center">
                <h3 className="counts">{this.props.data.trips}</h3>
                <p>Trips</p>
              </div>
            </Col>
            <Col sm="3">
              <div className="insight-col text-center">
                <h3 className="counts">{this.props.data.travellers}</h3>
                <p>Happy Travelers</p>
              </div>
            </Col>
            <Col sm="3">
              <div className="insight-col text-center">
                <h3 className="counts">{this.props.data.destinations}</h3>
                <p>Destinations Available</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
