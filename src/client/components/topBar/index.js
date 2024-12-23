import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import get from "lodash/get";
import { Icon } from "react-icons-kit";
import { ic_call } from "react-icons-kit/md/ic_call";
import { ic_email } from "react-icons-kit/md/ic_email";
const _ = { get };
export default class TopBar extends Component {
  render() {
    const { contactDetails } = this.props;
    return (
      <div className="topbar">
        <Container fluid>
          <Row>
            <Col sm="12">
              <div className="topbar-nav">
                <ul>
                  <li>
                    <a href="tel:+918800710398">
                      <Icon icon={ic_call} className="v-align-middle" />
                      <span className="v-align-middle">
                        {_.get(contactDetails, "mobile", "")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@incredibleholidaysindia.com">
                      <Icon icon={ic_email} className="v-align-middle" />
                      <span className="v-align-middle">
                        {_.get(contactDetails, "email", "")}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
