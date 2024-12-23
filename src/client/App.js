import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { renderRoutes } from "react-router-config";
import Header from "./components/header";
import Footer from "./components/footer";

import { fetchContactDetails } from "./redux/Global/action";
import { fetchHomePageData } from "./redux/home/action";
import { searchItinerary } from "./redux/ItineraryDetails/action";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onSearchTrips = this.onSearchTrips.bind(this);
  }

  componentDidMount() {
    if (this.props.contactDetails === null) {
      this.props.fetchContactDetails();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.querySubmitStatus !== null &&
      nextProps.querySubmitStatus !== this.props.querySubmitStatus
    ) {
      this.toastSuccess(nextProps.querySubmitStatus.message);
    }
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
  render() {
    return (
      <div id="mainComponent">
        <Header
          contactDetails={this.props.contactDetails}
          searchCategories={this.props.searchCategories}
          searchLocations = {this.props.searchLocations}
          onSearchTrips={this.onSearchTrips}
          history={this.props.history}
        />
        {renderRoutes(this.props.route.routes)}
        <Footer contactDetails={this.props.contactDetails} />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFooterData: () => {
      dispatch(fetchFooterData());
    },
    fetchContactDetails: () => {
      dispatch(fetchContactDetails());
    },
    searchItinerary: payload => {
      dispatch(searchItinerary(payload));
    }
  };
}

function mapStateToProps(state) {
  return {
    footerCategories: state.Global.footerCategories,
    contactDetails: state.Global.contactDetails,
    querySubmitStatus: state.Global.querySubmitStatus,
    contactDetails: state.Global.contactDetails,
    searchCategories: state.Global.searchCategories,
    searchLocations: state.Global.searchLocations
  };
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(App),
  loadData: ({ dispatch }) => {
    dispatch(fetchContactDetails());
    dispatch(fetchHomePageData());
  }
};
