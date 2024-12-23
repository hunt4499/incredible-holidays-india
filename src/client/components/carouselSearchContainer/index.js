import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
// REACT TOOLKIT ICONS
import { Icon } from "react-icons-kit";
import { ic_location_on } from "react-icons-kit/md/ic_location_on";
import { packageIcon } from "react-icons-kit/feather/packageIcon";
import { ic_date_range } from "react-icons-kit/md/ic_date_range";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";

class CarouselSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      category: "",
      month: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  async handleSubmit(e) {
    e.preventDefault();
    let state = this.state;

    if (state.month !== "") {
      let month = await moment(state.month)
        .format("MMMM")
        .toLowerCase();
      state.month = month;
    }
    if (state.location !== "" || state.category !== "" || state.month !== "") {
      this.props.onSearchTrips(state);
      if (this.props.history.pathName !== "itinerary-search-results") {
        this.props.history.push("/itinerary-search-results");
      }
    } else {
      this.props.toast("please select option to search");
    }
  }
  render() {
    return (
      <div className="carousel-search-container">
        <Container>
          <Row>
            <Col sm="12">
              <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col sm="12" className="text-center">
                    <h3 className="text-uppercase">book unique experiences</h3>
                    <p>
                      Explore top rated tours, hotels and restaurants around
                      the world
                    </p>
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col sm="4">
                    <FormGroup className="location-input">
                      <div className="position-relative">
                        <Icon icon={ic_location_on} className="icon" />
                        <Input
                          id="location"
                          name="location"
                          type="select"
                          placeholder="Location"
                          value={this.state.location}
                          onChange={e => this.onChange(e)}
                          >
                            <option>Our Tour Locations/travel destination</option>
                          {this.props.searchLocations.map((item, index) => (
                            <option value={item._id}>
                              {item.categoryName}
                            </option>
                          ))}
                          </Input>
                          <Icon
                          icon={ic_keyboard_arrow_down}
                          className="select-cursor"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="3">
                    <FormGroup className="location-input">
                      <div className="position-relative">
                        <Icon icon={packageIcon} className="icon" />
                        <Input
                          type="select"
                          name="category"
                          placeholder="Category"
                          value={this.state.category}
                          onChange={e => this.onChange(e)}
                        >
                          <option>Category</option>
                          {this.props.searchCategories.map((item, index) => (
                            <option value={item._id}>
                              {item.categoryName}
                            </option>
                          ))}
                        </Input>
                        <Icon
                          icon={ic_keyboard_arrow_down}
                          className="select-cursor"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="3">
                    <FormGroup className="location-input">
                      <div className="position-relative">
                        <Icon icon={ic_date_range} className="icon" />
                        <Input
                          type="date"
                          name="month"
                          min={moment(Date.now()).format('YYYY-MM-DD').toString()}
                          max="2030-02-01"
                          value={this.state.month}
                          onChange={e => this.onChange(e)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="2">
                    <Button
                      type="submit"
                      color="yellow"
                      className="text-capitalize"
                      block
                    >
                      search
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default withRouter(CarouselSearchContainer);
