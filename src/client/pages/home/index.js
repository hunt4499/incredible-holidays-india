import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import config from "../../config/config";
import FullScreenCarousel from "../../components/FullScreenCarousel";
import CarouselSearchContainer from "../../components/carouselSearchContainer";
import OwlCarouselCenter from "../../components/owlCarouselCenter";
import WhyChooseUs from "../../components/whyChooseUs";
import TripBox from "../../components/tripBox";
import PopularDestionationBox from "../../components/popularDestinationBox";
import InsightSection from "../../components/insightSection";
import VideoModal from "../../components/videoModal";
import Loader from "../../components/loader";
import ErrorMessage from "../../components/errorMsg";

import { fetchHomePageData } from "../../redux/home/action";
import { searchItinerary } from "../../redux/ItineraryDetails/action";
import { fetchCategories } from "../../redux/Global/action";
import { fetchLocations } from "../../redux/Global/action"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSearchTrips = this.onSearchTrips.bind(this);
    this.toastSuccess = this.toastSuccess.bind(this);
    this.handlePopularLocation = this.handlePopularLocation.bind(this);
  }

  componentDidMount() {
    if (this.props.loadingHomePageData) {
      this.props.onfetchHomePageData();
    }
    if (this.props.searchCategories.length === 0) {
      this.props.fetchCategories();
    }
    if (this.props.searchLocations.length === 0) {
      this.props.fetchLocations();
    }

    $(window).scrollTop(0);
  }

  onSearchTrips(data) {
    this.props.searchItinerary(data);
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

  handlePopularLocation({ state }) {
    let searchObj = {
      location: state,
      category: "",
      month: ""
    };
    this.props.searchItinerary(searchObj);
    this.props.history.push("/itinerary-search-results");
  }

  head() {
    return (
      <Helmet>
        <title>
          Holiday In India, India Tours, Tour Packages For India, Trip To India,
          Holiday Tours India – Incredible Holiday
        </title>
        <meta
          name="description"
          content="Holiday in India - Incredible Holiday offers online info on India tours, tour packages for India,
          India holiday tours, trip to India luxury tour booking of India, holiday in India, adventure tourism of India,
          honeymoon tours to India."
        />
        <meta
          name="keywords"
          content="holiday india, tour packages for india, india tours, luxury tours in india, incredible Holiday tours,
          budget travels tours in india, vacation package for india, india adventure tour, adventure tourism of india,
          india family holiday tour, holiday honeymoon tours to india, south india holiday package, india temple tour,
          india wildlife tour package"
        />
        <meta name="author" content="Incredible Holiday India" />
        <meta
          name="abstract"
          content="holiday India, luxury tours, golden triangle tour"
        />
        <meta name="key-phrases" content="Holiday India" />
        <meta
          name="topic"
          content="holiday India, tours, tour packages India"
        />
        <meta
          name="classification"
          content="holiday India, adventure tours, trip to india"
        />
        <meta name="distribution" content="Global" />
        <meta name="publisher" content="Incredible Holiday" />
        <meta name="language" content="en-gb" />
        <meta name="copyright" content="2011 incredibleholidayindia.com" />
        <meta name="rating" content="General" />
        <meta name="audience" content="All" />
        <meta name="doc-type" content="Web Page" />
        <meta name="robots" content="noindex" />
      </Helmet>
    );
  }

  render() {
    const baseUrl = `${config.serverUrl}:${config.port}`;
    return (
      <div>
        {this.head()}
        <div className="carousel-search relative no-caption">
          <CarouselSearchContainer
            onSearchTrips={this.onSearchTrips}
            searchCategories={this.props.searchCategories}
            searchLocations = {this.props.searchLocations}
            toast={this.toastSuccess}
          />
          <FullScreenCarousel />
          <VideoModal />
        </div>
        {this.props.errorLoadingHomePageData === false ? (
          <div>
            <section className="section-row light-grey popular-destinations-section">
              <Container>
                <Row>
                  <Col sm="12" className="d-flex justify-content-center">
                    <h1 className="section-heading heading-border-top text-uppercase">
                      Popular Destinations
                    </h1>
                  </Col>
                </Row>
              </Container>
              <Container fluid>
                <div className="ml-15 mr-15">
                  <Row className="no-gutters">
                    {this.props.loadingHomePageData === true ? (
                      <div className="col-sm-12  d-flex justify-content-center text-center">
                        <Loader />
                      </div>
                    ) : (
                      this.props.popularDestinations.map((data, index) => (
                        <Col
                          sm="3"
                          key={index}
                          onClick={() => this.handlePopularLocation(data)}
                        >
                          <PopularDestionationBox
                            data={data}
                            baseUrl={baseUrl}
                          />
                        </Col>
                      ))
                    )}
                  </Row>
                </div>
              </Container>
            </section>
            <section className="section-row why-choose-us-section">
              <Container>
                <Row>
                  <Col sm="12" className="d-flex justify-content-center">
                    <h1 className="section-heading heading-border-top text-uppercase">
                      Why Choose Us
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <WhyChooseUs />
                </Row>
              </Container>
            </section>
            <section className="section-row light-grey best-trips-section">
              <Container>
                <Row>
                  <Col sm="12" className="d-flex justify-content-center">
                    <h1 className="section-heading heading-border-top text-uppercase">
                      Best Value Trips
                    </h1>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  {this.props.loadingHomePageData === true ? (
                    <div className="col-sm-12  d-flex justify-content-center text-center">
                      <Loader />
                    </div>
                  ) : (
                    this.props.bestValueTrips.map((data, index) => (
                      <Col className="col-12" sm="6" lg="4" key={index}>
                        <TripBox data={data} baseUrl={baseUrl} />
                      </Col>
                    ))
                  )}
                </Row>
              </Container>
            </section>
            <section className="section-row popular-trips-section">
              <Container>
                <Row>
                  <Col sm="12" className="d-flex justify-content-center">
                    <h1 className="section-heading heading-border-top text-uppercase">
                      Our Popular Tours
                    </h1>
                  </Col>
                </Row>
              </Container>
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
            </section>
            <section key="A">
              {this.props.loadingHomePageData === true ? (
                <div className="col-sm-12  d-flex justify-content-center text-center">
                  <Loader />
                </div>
              ) : (
                <InsightSection data={this.props.counts} />
              )}
            </section>
          </div>
        ) : (
          <div className="col-12 d-flex justify-content-center text-center">
            <ErrorMessage
              message={"Something Went Wrong"}
              retry={this.props.onfetchHomePageData}
            />
          </div>
        )}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onfetchHomePageData: () => {
      dispatch(fetchHomePageData());
    },
    searchItinerary: payload => {
      dispatch(searchItinerary(payload));
    },
    fetchCategories: () => {
      dispatch(fetchCategories());
    },
    fetchLocations: () => {
      dispatch(fetchLocations());
    }
  };
}
function mapStateToProps(state) {
  return {
    loadingHomePageData: state.Home.loadingHomePageData,
    popularDestinations: state.Home.popularDestinations,
    bestValueTrips: state.Home.bestValueTrips,
    popularTrips: state.Home.popularTrips,
    counts: state.Home.counts,
    searchCategories: state.Global.searchCategories,
    searchLocations: state.Global.searchLocations,
    errorLoadingHomePageData: state.Home.errorLoadingHomePageData
  };
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home),
  loadData: ({ dispatch }) => dispatch(fetchHomePageData())
};
