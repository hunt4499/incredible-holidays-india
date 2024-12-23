import React, { Component } from "react";
import { Row, Col, Progress } from "reactstrap";

export default class ReviewsSummary extends Component {
  render() {
    return (
      <Row className="mb-4">
        <Col sm="3">
          <div className="review_summary">
            <strong>{this.calculateRating(this.props.reviews)}</strong>
            {/* <em>Superb</em> */}
            <small>
              Based on {this.props.reviews ? this.props.reviews.length : 0}{" "}
              reviews
            </small>
          </div>
        </Col>
        <Col sm="9" className="reviews-rating">
          <Row>
            <Col sm="8">
              <Progress value={this.props.counts.rate5} />
            </Col>
            <Col sm="4">
              <span>5 Starts</span>
            </Col>
          </Row>
          <Row>
            <Col sm="8">
              <Progress value={this.props.counts.rate4} />
            </Col>
            <Col sm="4">
              <span>4 Starts</span>
            </Col>
          </Row>
          <Row>
            <Col sm="8">
              <Progress value={this.props.counts.rate3} />
            </Col>
            <Col sm="4">
              <span>3 Starts</span>
            </Col>
          </Row>
          <Row>
            <Col sm="8">
              <Progress value={this.props.counts.rate2} />
            </Col>
            <Col sm="4">
              <span>2 Starts</span>
            </Col>
          </Row>
          <Row>
            <Col sm="8">
              <Progress value={this.props.counts.rate1} />
            </Col>
            <Col sm="4">
              <span>1 Starts</span>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
