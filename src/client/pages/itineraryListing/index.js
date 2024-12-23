import React, { Component } from "react";
import { connect } from "react-redux";
import config from "../../config/config";
import Helmet from "react-helmet";
import { Container, Row, Col, Button, Alert } from "reactstrap";
import { toast } from "react-toastify";
import { fetchItinenaryList } from "../../redux/ItineraryDetails/action";
import MainCarousel from "../../components/carousel";
import TripBox from "../../components/tripBox";
import Loader from "../../components/loader";

class ItineraryListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNo: 0
    };
    this.toastSuccess = this.toastSuccess.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    if (this.props.itineraryList.length === 0) {
      this.props.fetchItinenaryList(this.state.pageNo);
    }
    $(window).scrollTop(0);
  }
  onSearchTrips(data) {
    this.props.searchItinerary(data);
  }

  loadMore() {
    let pageNo = this.state.pageNo + 1;
    this.props.fetchItinenaryList(pageNo);
    this.setState({ ...this.state, pageNo });
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

  head() {
    return (
      <Helmet>
        <title>
          Holiday Packages to India | Holidays in India, India Travel Holiday
        </title>
        <meta
          name="description"
          content="Incredibleholidayindia offers holidays in India, holiday packages, India travel holiday, golden triangle, religious tour packages at affordable prices."
        />
        <meta
          name="keywords"
          content="holiday packages india, holidays in india, india travel, india travel holidays, affordable holiday packages india, travel tours india, golden triangle holidays"
        />
        <meta name="author" content="Holiday Packages In India" />
        <meta name="robots" content="noindex" />
        />
      </Helmet>
    );
  }

  render() {
    const baseUrl = `${config.serverUrl}:${config.port}`;
    let { itineraryList } = this.props;
    return (
      <div>
        {this.head()}
        <div className="carousel-search relative">
          <MainCarousel
            image={"/images/itinerarylisting.jpg"}
            name={"Itinerary Listing"}
          />
        </div>
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
            {this.props.loadingItineraryList === true &&
            itineraryList.length === 0 ? (
              <Row className="col-sm-12  d-flex justify-content-center text-center">
                <Loader />
              </Row>
            ) : (
              <Row>
                {itineraryList.map((data, index) => (
                  <Col className="col-12" sm="6" lg="4" key={index}>
                    <TripBox data={data} baseUrl={baseUrl} />
                  </Col>
                ))}
              </Row>
            )}

            {this.props.noMoreItineraries === false ? (
              <Col className="col-12 text-center">
                <Button color="success" onClick={() => this.loadMore()}>
                  Load More
                </Button>
              </Col>
            ) : null}
          </Container>
          <Container>
            <Row>
              <Col className="col-12" />
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchItinenaryList: payload => {
      dispatch(fetchItinenaryList(payload));
    }
  };
}

function mapStateToProps(state) {
  return {
    loadingItineraryList: state.ItineraryDetails.loadingItineraryList,
    itineraryList: state.ItineraryDetails.itineraryList,
    noMoreItineraries: state.ItineraryDetails.noMoreItineraries
  };
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItineraryListing),
  loadData: ({ dispatch }) => dispatch(fetchItinenaryList(0))
};
