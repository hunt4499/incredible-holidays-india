import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import TopBar from "../topBar";
import NavigationBar from "../navigationBar";
export default class Header extends Component {
  render() {
    const {
      contactDetails,
      searchCategories,
      onSearchTrips,
      history
    } = this.props;
    return (
      <header className="header">
        <TopBar contactDetails={contactDetails} />
        <div className="main-header">
          <Container fluid className="cls">
            <div className="logo">
              <Link to="/">
                <img
                  src="/images/logoIncredibleHolidaywhite.png"
                  alt="Holiday India Tours"
                />
              </Link>
            </div>
            <NavigationBar
              searchCategories={searchCategories}
              onSearchTrips={onSearchTrips}
              history={history}
            />
          </Container>
        </div>
      </header>
    );
  }
}
