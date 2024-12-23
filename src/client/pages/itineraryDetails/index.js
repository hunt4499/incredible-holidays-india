import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Container, Row, Col, Nav, NavItem, NavLink, Badge, Modal, ModalBody } from "reactstrap";
import OwlCarouselCenter from "../../components/owlCarouselCenter";
import GalleryModalCarousel from '../../components/galleryModalCarousel';
import TripBox from "../../components/tripBox";
import PopularDestionationBox from "../../components/popularDestinationBox";
import Loader from "../../components/loader";
import { toast } from "react-toastify";
import Lightbox from "react-image-lightbox";
import get from "lodash/get";
import config from "../../config/config";
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import {
  fetchItinenaryDetails,
  submitItineraryReview
} from "../../redux/ItineraryDetails/action";
import { submitQueryForm } from "../../redux/Global/action";
import ItineraryDayPlan from "../../components/itineraryDayPlan";
import ItineraryDetailsTabs from "../../components/itineraryDetailsTabs";
import ReviewListing from "../../components/reviewLisitng";
import ReviewForm from "../../components/reviewForm";
import AdvancedBookingForm from "../../components/advancedBookingForm";
import SocialShareIcons from "../../components/socialShareIcons";
const _ = { get };
class ItineraryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isOpen: false,
      imageUrl: ""
    };
    this.onSubmitReview = this.onSubmitReview.bind(this);
    this.submitQueryForm = this.submitQueryForm.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    if (this.props.itineraryDetails !== null) {
      if (this.props.itineraryDetails.slug != this.props.match.params.slug) {
        this.props.fetchItinenaryDetails(this.props.match.params.slug);
      }
    }
    if (this.props.itineraryDetails === null) {
      this.props.fetchItinenaryDetails(this.props.match.params.slug);
    }
    $(window).scrollTop(0);
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.itineraryReviewStatus !== null &&
      nextProps.itineraryReviewStatus !== this.props.itineraryReviewStatus
    ) {
      this.toastSuccess(nextProps.itineraryReviewStatus.message);
    }
  }
  submitQueryForm(data) {
    const formData = {
      itinerary: this.props.itineraryDetails._id,
      ...data
    };
    this.props.submitQueryForm(formData);
  }
  onSubmitReview(data) {
    const ReviewObj = {
      itineraryId: this.props.itineraryDetails._id,
      title: this.props.itineraryDetails.pageTitle,
      url: this.props.history.location.pathname,
      ...data
    };
    this.props.submitItineraryReview(ReviewObj);
  }
  openLIghtBox(url) {
    this.setState({ isOpen: true, imageUrl: url });
  }
  toastSuccess(message) {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 20,
      text:"center"
    });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const baseUrl = `${config.serverUrl}:${config.port}`;
    return (
      <div>
        {this.props.itineraryDetails !== null ? (
          <Helmet>
            <title>{`${
              this.props.itineraryDetails.metaTitle
              } - Incredible Holiday India`}
            </title>
            <meta
              name="description"
              content={this.props.itineraryDetails.metaDescription}
            />
            <meta
              name="keywords"
              content={this.props.itineraryDetails.metaKeywords}
            />
            <meta name="author" content="Holiday Packages In India" />
            <meta name="robots" content="noindex" />
            />
</Helmet>
        ) : null}
        <section className="section-row itinerary-day-section">
          <div class="container">
            <Row className="pb-5 justify-content-between">
              <Col md="5">
                <img class="img-fluid" src="/images/map.jpg" />
              </Col>
              <Col md="6">
                <h3 className="text-uppercase sub-heading">The Golden Triangle</h3>
                <div className="rte-wrapper"
                  dangerouslySetInnerHTML={{
                    __html: this.props.itineraryDetails.description
                  }}
                />
              </Col>
            </Row>
            <div class="itinerary-day-plan">
              <div class="row">
                <div class="col-md-7 d-flex flex-wrap">
                  <div className="itinerary-day col-3"><span>DAY 1</span></div>
                  <div className="itinerary-destination col-9">
                    <div class="entry-title">
                      <h4>Day 1 <span>Arrival in Delhi</span></h4>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <p>Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                        at Hotel. Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                        at Hotel. Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                        at Hotel. Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                      at Hotel. </p>
                      <p>
                        <strong>Hotel :</strong> The Lalit New delhi<br /><br />
                        <span onClick={this.toggle} className="view-gallery-btn"><strong>View Hotel Gallery</strong></span>
                      </p>
                    </div>
                    <div class="itenerary-service-icon mt-4">
                      <ul class="row p-0 d-flex flex-wrap justify-content-left align-items-start">
                        <li>
                          <div class="service-icon">
                            <img src="/images/food.png" />
                          </div>
                          <span>Food</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/room.png" />
                          </div>
                          <span>Rooms</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/wifi.png" />
                          </div>
                          <span>Wifi</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/9163-200.png" />
                          </div>
                          <span>Flight</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/ocean-copy-14113844244g8kn.png" />
                          </div>
                          <span>Ship</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div class="col-md-5 pt-5 pb-5">
                  <img src="/images/golden-triangle-india.jpg" width="100%" alt="" />
                </div>
              </div>
            </div>
            <div class="itinerary-day-plan">
              <div class="row">
                <div class="col-md-7 d-flex flex-wrap">
                  <div className="itinerary-day col-3"><span>DAY 1</span></div>
                  <div className="itinerary-destination col-9">
                    <div class="entry-title">
                      <h4>Day 1 <span>Arrival in Delhi</span></h4>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <p>Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                        at Hotel. Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                        at Hotel. Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                        at Hotel. Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                      at Hotel. </p>

                      <p>
                        <strong>Hotel :</strong> The Lalit New delhi<br /><br />
                        <span onClick={this.toggle} className="view-gallery-btn"><strong>View Hotel Gallery</strong></span>
                      </p></div>
                    <div class="itenerary-service-icon mt-4">
                      <ul class="row p-0 d-flex flex-wrap justify-content-left align-items-start">
                        <li>
                          <div class="service-icon">
                            <img src="/images/food.png" />
                          </div>
                          <span>Food</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/room.png" />
                          </div>
                          <span>Rooms</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/wifi.png" />
                          </div>
                          <span>Wifi</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/9163-200.png" />
                          </div>
                          <span>Flight</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/ocean-copy-14113844244g8kn.png" />
                          </div>
                          <span>Ship</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div class="col-md-5 pt-5 pb-5">
                  <img src="/images/golden-triangle-india.jpg" width="100%" alt="" />
                </div>
              </div>
            </div>

            <div class="itinerary-day-plan">
              <div class="row">
                <div class="col-md-7 d-flex flex-wrap">
                  <div className="itinerary-day col-3"><span>DAY 1</span></div>
                  <div className="itinerary-destination col-9">
                    <div class="entry-title">
                      <h4>Day 1 <span>Arrival in Delhi</span></h4>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <Badge color="warning" className="mt-2 mr-2 mb-2">Primary</Badge>
                      <p>Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                        at Hotel. Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                        at Hotel. Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                        at Hotel. Arive At IGI Airport Meet our representative. Get Drivin to the Hotel and Check-in.Overnight
                      at Hotel. </p>

                      <p>
                        <strong>Hotel :</strong> The Lalit New delhi<br /><br />
                        <span onClick={this.toggle} className="view-gallery-btn"><strong>View Hotel Gallery</strong></span>
                      </p></div>
                    <div class="itenerary-service-icon mt-4">
                      <ul class="row p-0 d-flex flex-wrap justify-content-left align-items-start">
                        <li>
                          <div class="service-icon">
                            <img src="/images/food.png" />
                          </div>
                          <span>Food</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/room.png" />
                          </div>
                          <span>Rooms</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/wifi.png" />
                          </div>
                          <span>Wifi</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/9163-200.png" />
                          </div>
                          <span>Flight</span>
                        </li>
                        <li>
                          <div class="service-icon">
                            <img src="/images/ocean-copy-14113844244g8kn.png" />
                          </div>
                          <span>Ship</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div class="col-md-5 pt-5 pb-5">
                  <img src="/images/golden-triangle-india.jpg" width="100%" alt="" />
                </div>
              </div>
            </div>

            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="itinerary-hotelGallery-modal"
            >
              <div className="modal-close-icon" onClick={this.toggle}>
                <Icon icon={ic_close} className="close-icon" />
              </div>
              <ModalBody>
                <GalleryModalCarousel />
              </ModalBody>
            </Modal>
          </div>
        </section>
        <section className="section-row pt-0">
          {this.props.loadingItineraryDetails === true ||
            this.props.itineraryDetails === null ? (
              <div className="col-sm-12 d-flex justify-content-center text-center">
                <Loader />
              </div>
            ) : (
              <div>
                <Container>
                  <Row className="d-flex justify-content-between">
                    <Col sm="12" md="12" xl="12" className="itinerary-big-container">
                      {/* <section className="itinerary-section">
                        <h3 className="text-uppercase sub-heading">Description</h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: this.props.itineraryDetails.description
                          }}
                        />
                      </section> */}
                      {/* <section className="itinerary-section">
                        <h3 className="text-uppercase sub-heading">
                          itinerary gallery
				</h3>
                        <Row>
                          {this.props.itineraryDetails.gallery.map(
                            (image, index) => (
                              <Col
                                sm="3"
                                key={image}
                                onClick={() =>
                                  this.openLIghtBox(`${baseUrl}${image}`)
                                }
                              >
                                <div className="itinerary-gallery-thumb img-object-fit">
                                  <a href="javascript:void(0)">
                                    <img src={`${baseUrl}${image}`} alt="" />
                                  </a>
                                </div>
                              </Col>
                            )
                          )}
                        </Row>
                      </section>
                      <section className="itinerary-section">

                        <ul className="itinerary-days-plan">
                          {this.props.itineraryDetails.itineraryDays.map(
                            (item, index) => (
                              <ItineraryDayPlan
                                item={item}
                                baseUrl={baseUrl}
                                index={index}
                                key={index}
                              />
                            )
                          )}
                        </ul>
                      </section> */}
                      <Row>
                        <Col sm="8">
                          <ItineraryDetailsTabs
                            tripDetail={this.props.itineraryDetails.tripDetail}
                          />
                        </Col>
                        <Col sm="4">
                          <div id="itinerary-aside">
                            <div className="itinerary-booking-form">
                              <AdvancedBookingForm
                                submitQueryForm={this.submitQueryForm}
                              />
                            </div>
                            <div className="itinerary-share-icons text-center">
                              <Nav>
                                <NavItem>
                                  <Link to="" className="share-btn">
                                    <span>T&C</span>
                                  </Link>
                                </NavItem>
                                <NavItem>

                                  <Link to="" className="share-btn">
                                    <span>FAQ's</span>
                                  </Link>
                                </NavItem>
                                <NavItem>
                                  <Link to="../../../../public/pdfs/ESO13-8 Class and Class Conflict.pdf" target="_blank" className="share-btn">
                                    <span>Download PDF</span>
                                  </Link>
                                </NavItem>
                              </Nav>
                            </div>
                            <SocialShareIcons />
                          </div>
                        </Col>
                      </Row>
                      <div className="review-container">
                      <div className="review-form">
                        <h3 className="text-uppercase sub-heading">leave your review / Query</h3>
                        <ReviewForm
                          onSubmitReview={this.onSubmitReview}
                          reviewStatus={this.props.itineraryReviewStatus}
                        />
                      </div>
                        <h3 className="text-uppercase sub-heading">Reviews</h3>
                        {this.props.itineraryDetails.reviews.length != 0 ? (
                          this.props.itineraryDetails.reviews.map((item, index) => {
                            if (item.status === true) {
                              return <ReviewListing key={index} review={item} />;
                            }
                          })
                        ) : (
                            <strong>No Reviw Posted</strong>
                          )}
                      </div>
                      
                    </Col>
                  </Row>
                </Container>
                <section>
                  <Container>

                  </Container>
                </section>
              </div>
            )}
        </section>
        {this.state.isOpen === true ? (
          <Lightbox
            mainSrc={this.state.imageUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        ) : null}
        <Container fluid>
          <Row>
            <Col sm="12">
              <OwlCarouselCenter
                popularTrips={this.props.popularTrips}
                baseUrl={baseUrl}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchItinenaryDetails: payload => {
      dispatch(fetchItinenaryDetails(payload));
    },
    submitItineraryReview: payload => {
      dispatch(submitItineraryReview(payload));
    },
    submitQueryForm: payload => {
      dispatch(submitQueryForm(payload));
    }
  };
}

function mapStateToProps(state) {
  return {
    loadingItineraryDetails: state.ItineraryDetails.loadingItineraryDetails,
    itineraryDetails: state.ItineraryDetails.itineraryDetails,
    itineraryReviewStatus: state.ItineraryDetails.itineraryReviewStatus,
    popularTrips: state.Home.popularTrips
  };
}
export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItineraryDetails),
  loadData: (store, match) =>
    store.dispatch(fetchItinenaryDetails(match.params.slug))
};