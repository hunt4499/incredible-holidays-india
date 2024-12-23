import React, { Component } from "react";
import { connect } from "react-redux";
import config from "../../config/config";
import { Container, Row, Col } from "reactstrap";
import { toast } from "react-toastify";
import get from "lodash/get";
import {
  searchItineraryFilters,
  searchItinerary
} from "../../redux/ItineraryDetails/action";
import { fetchCategories } from "../../redux/Global/action";
import MainCarousel from "../../components/carousel";
import CarouselSearchContainer from "../../components/carouselSearchContainer";
import TripBox from "../../components/tripBox";
import Loader from "../../components/loader";
import ProductFilter from "../../components/productfilter";
import NoItemFound from "../../components/noItemFound";

const _ = { get };

class SearchedItineraryListing extends Component {
  constructor(props) {
    super(props);

    this.onSearchTrips = this.onSearchTrips.bind(this);
    this.toastSuccess = this.toastSuccess.bind(this);
    this.searchItineraryFilters = this.searchItineraryFilters.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  componentDidMount() {
    if (this.props.searchCategories.length === 0) {
      this.props.fetchCategories();
    }
    $("#myDiv").focus();
  }
  onSearchTrips(data) {
    this.props.searchItinerary(data);
  }
  searchItineraryFilters(data) {
    this.props.searchItineraryFilters(data);
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

  render() {
    const baseUrl = `${config.serverUrl}:${config.port}`;
    return (
      <div>
        {/* <div className="carousel-search relative">
          <MainCarousel image={"/images/unnamed.jpg"} name={"Search Results"} />
        </div> */}
        <section className="section-row pt-100">
          <CarouselSearchContainer
            onSearchTrips={this.onSearchTrips}
            searchCategories={this.props.searchCategories}
            toast={this.toastSuccess}
          />
        </section>
        <section>
          <ProductFilter searchItineraryFilters={this.searchItineraryFilters} />
        </section>
        <section
          className="section-row light-grey best-trips-section"
          id="myDiv"
        >
          <Container>
            <Row>
              <Col sm="12" className="d-flex justify-content-center">
                <h1 className="section-heading heading-border-top text-uppercase">
                  Search Results
                </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            {this.props.loadingItineraryList === true ? (
              <Row className="col-sm-12  d-flex justify-content-center text-center">
                <Loader />
              </Row>
            ) : (
              <Row col="12">
                {this.props.searchResults.length != 0 ? (
                  this.props.searchResults.map((data, index) => (
                    <Col className="col-12" sm="6" lg="4" key={index}>
                      <TripBox data={data} baseUrl={baseUrl} />
                    </Col>
                  ))
                ) : (
                  <NoItemFound />
                )}
              </Row>
            )}
          </Container>
        </section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchItinerary: payload => {
      dispatch(searchItinerary(payload));
    },
    fetchCategories: () => {
      dispatch(fetchCategories());
    },
    searchItineraryFilters: payload => {
      dispatch(searchItineraryFilters(payload));
    }
  };
}

function mapStateToProps(state) {
  return {
    loadingItineraryList: state.ItineraryDetails.loadingItineraryList,
    searchResults: state.ItineraryDetails.searchResults,
    searchCategories: state.Global.searchCategories
  };
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchedItineraryListing)
};
