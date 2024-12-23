import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import get from "lodash/get";
import { Icon } from "react-icons-kit";
import MainCarousel from "../../components/carousel";
import EnquiryFrom from "../../components/enquiryForm";
import { ic_location_on } from "react-icons-kit/md/ic_location_on";
import { ic_phone_iphone } from "react-icons-kit/md/ic_phone_iphone";
import { ic_email } from "react-icons-kit/md/ic_email";

import { submitQueryForm } from "../../redux/Global/action";

const _ = { get };

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitQueryForm = this.submitQueryForm.bind(this);
  }
  componentDidMount() {
    $(window).scrollTop(0);
  }

  submitQueryForm(data) {
    const formObj = {
      ...data
    };
    this.props.submitQueryForm(formObj);
  }

  render() {
    return (
      <div>
        <div className="carousel-search relative">
          <MainCarousel
            image={"/images/contactbanner.jpg"}
            name={"Contact Us"}
          />
        </div>
        <section className="section-row contact-info">
          <Container>
            <Row>
              <Col sm="4" className="text-center">
                <div className="contact-teaser-icon green">
                  <div className="teaser-icon-wrap">
                    <Icon icon={ic_phone_iphone} className="top_space" />
                  </div>
                </div>
                <h3 className="text-capitalize">call us</h3>
                <h4>
                  <a
                    href={`tel:${_.get(
                      this.props.contactDetails,
                      "mobile",
                      ""
                    )}`}
                  >
                    {_.get(this.props.contactDetails, "mobile", "")}
                  </a>

                </h4>
              </Col>
              <Col sm="4" className="text-center">
                <div className="contact-teaser-icon blue">
                  <div className="teaser-icon-wrap">
                    <Icon icon={ic_email} className="top_space" />
                  </div>
                </div>
                <h3 className="text-capitalize">email</h3>
                <h4>
                  <a
                    href={`mailto:${_.get(
                      this.props.contactDetails,
                      "email",
                      ""
                    )}`}
                  >
                    {_.get(this.props.contactDetails, "email", "")}
                  </a>
                </h4>
              </Col>
              <Col sm="4" className="text-center">
                <div className="contact-teaser-icon orange">
                  <div className="teaser-icon-wrap">
                    <Icon icon={ic_location_on} className="top_space" />
                  </div>
                </div>
                <h3 className="text-capitalize">office address</h3>
                <h4>{_.get(this.props.contactDetails, "address", "")} </h4>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-row light-grey">
          <Container>
            <Row>
              <Col sm="12">
                <h3 className="text-center text-uppercase">send us enquiry</h3>
                <EnquiryFrom submitQueryForm={this.submitQueryForm} />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitQueryForm: payload => {
      dispatch(submitQueryForm(payload));
    }
  };
}

   function mapStateToProps(state) {
  return {
    contactDetails: state.Global.contactDetails
  };
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Contact)
};
