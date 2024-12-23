import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "react-icons-kit";
import { Link } from "react-router-dom";
import get from "lodash/get";
import { ic_phone_iphone } from "react-icons-kit/md/ic_phone_iphone";
import { ic_email } from "react-icons-kit/md/ic_email";
import { ic_access_time } from "react-icons-kit/md/ic_access_time";
import { ic_location_on } from "react-icons-kit/md/ic_location_on";
const _ = { get };
export default class Footer extends Component {
  render() {
    const { contactDetails } = this.props;
    return (
      <footer>
        <Container fluid className="mb-5">
          <Row>
            <Col sm="12" className="d-flex flex-wrap">
              <Col sm="4">
                <h3 className="text-uppercase">Who we are</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s
                </p>
              </Col>
              <Col sm="4">
                <h3 className="text-uppercase">Contact Info</h3>
                <ul className="footer-info">
                  <li>
                    <Icon icon={ic_phone_iphone} className="icon" />
                    <span>{_.get(contactDetails, "mobile", "")}</span>
                  </li>
                  <li>
                    <Icon icon={ic_email} className="icon" />
                    <span>{_.get(contactDetails, "email", "")}</span>
                  </li>
                  <li>
                    <Icon icon={ic_access_time} className="icon" />
                    <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
                  </li>
                  <li>
                    <Icon icon={ic_location_on} className="icon" />
                    <span>{_.get(contactDetails, "address", "")} </span>
                  </li>
                </ul>
              </Col>
              <Col sm="4">
                <h3 className="text-uppercase">Recent Trips</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s
                </p>
              </Col>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            {/* {this.props.footerCategories.map((category, index) => (
              <Col sm="2" key={index}>
                <h3>{category.categoryName}</h3>
                <ul className="footer-info footer-bottom-menu">
                  {category.list.map((item, subIndex) => (
                    <li key={subIndex}>
                      <Link to={`/itinerary-details/${item.slug}`}>
                        {item.pageTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))} */}
            <Col sm="2">
              <h3>Golden Triangle Tours</h3>
              <ul className="footer-info footer-bottom-menu">
                <li>
                  <Link to="">Delhi Agra Jaipur Tour</Link>
                </li>
                <li>
                  <Link to="">Golden Triangle Including Varanasi</Link>
                </li>
                <li>
                  <Link to="">Golden Triangle Tour with Amritsar</Link>
                </li>
              </ul>
            </Col>
            <Col sm="2">
              <h3>Kerala/Goa Tour Packages</h3>
              <ul className="footer-info footer-bottom-menu">
                <li>
                  <Link to="">Kerala 10 Days Tour</Link>
                </li>
                <li>
                  <Link to="">Beautiful Meadows 5 Days Tour</Link>
                </li>
                <li>
                  <Link to="">Glimpses of Kerala 5 Days Tour</Link>
                </li>
              </ul>
            </Col>
            <Col sm="2">
              <h3>Religious Tour/Yatra</h3>
              <ul className="footer-info footer-bottom-menu">
                <li>
                  <Link to="">12 Days Chardham Yatra</Link>
                </li>
                <li>
                  <Link to="">Sri Amarnath Yatra</Link>
                </li>
                <li>
                  <Link to="">Vaishno Devi Tour</Link>
                </li>
              </ul>
            </Col>
            <Col sm="2">
              <h3>Honeymoon Packages</h3>
              <ul className="footer-info footer-bottom-menu">
                <li>
                  <Link to="">Kerala Honeymoon package</Link>
                </li>
                <li>
                  <Link to="">Goa Honeymoon package</Link>
                </li>
                <li>
                  <Link to="">Rajasthan Honeymoon package</Link>
                </li>
              </ul>
            </Col>
            <Col sm="2">
              <h3>Adventure Tour Packages</h3>
              <ul className="footer-info footer-bottom-menu">
                <li>
                  <Link to="">India Wildlife Tour</Link>
                </li>
                <li>
                  <Link to="">River Rafting tour</Link>
                </li>
                <li>
                  <Link to="">Darjeeling Tour</Link>
                </li>
              </ul>
            </Col>
            <Col sm="2">
              <h3>Adventure Tour Packages</h3>
              <ul className="footer-info footer-bottom-menu">
                <li>
                  <Link to="">India Wildlife Tour</Link>
                </li>
                <li>
                  <Link to="">River Rafting tour</Link>
                </li>
                <li>
                  <Link to="">Darjeeling Tour</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
