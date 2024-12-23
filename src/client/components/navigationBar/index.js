import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Container,
  Row,
  Col
} from "reactstrap";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.onSelectCategory = this.onSelectCategory.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onSelectCategory(selected) {
    const item = {
      location: "",
      category: selected._id,
      month: ""
    };
    this.setState({
      isOpen: false
    });
    this.props.onSearchTrips(item);
    if (this.props.history.pathName !== "itinerary-search-results") {
      this.props.history.push("/itinerary-search-results");
    }
  }

  render() {
    return (
      <div className="navigation-bar">
        <Navbar light expand="lg">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar className="mega-dropdown">
                <DropdownToggle nav caret>
                  holiday packages
                </DropdownToggle>
                <DropdownMenu>
                  <Container>
                    <Row>
                      <ul>
                        {this.props.searchCategories.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => this.onSelectCategory(item)}
                          >
                            <span>{item.categoryName}</span>
                          </li>
                        ))}
                      </ul>
                    </Row>
                  </Container>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <NavLink>holiday booking</NavLink>
              </NavItem> */}
              <NavItem>
                <Link to="/itinerary-listing" className="nav-link">
                  tours
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/testimonials" className="nav-link">
                  testimonials
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/blogs" className="nav-link">
                  travel blog
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact-us" className="nav-link">
                  contact us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
