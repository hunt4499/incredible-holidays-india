import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Page404 extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }
  render() {
    return (
      <div className="container-404">
        <Container>
          <Row>
            <Col sm="5">
              <h2>OOPS!</h2>
              <p>I THINK I AM LOST</p>
              <p className="small">
                Sorry, we can't find the page you're looking for. While we look
                into it...
              </p>
              <Link to="/" className="btn text-uppercase">
                back to home
              </Link>
            </Col>
            <Col sm="7">
              <div className="icon-404">
                <div className="victor" />
                <div className="animation" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default {
  component: Page404
};
