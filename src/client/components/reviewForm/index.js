import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";

const initialSstate = {
  name: "",
  page: "",
  email: "",
  subject: "",
  rating: 5,
  message: ""
};

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialSstate
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmitReview(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.reviewStatus !== null &&
      nextProps.reviewStatus !== this.props.reviewStatus
    ) {
      if (nextProps.reviewStatus.success == true) {
        this.setState({ ...initialSstate });
      }
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={e => this.onChange(e)}
                required
              />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                type="email"
                name="email"
                id="exampleEmail"
                value={this.state.email}
                onChange={e => this.onChange(e)}
                required
              />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="rating">Ratings</Label>
              <div className="position-relative">
                <Input
                  type="select"
                  name="rating"
                  id="rating"
                  value={this.state.rating}
                  onChange={e => this.onChange(e)}
                  required
                >
                  <option value="" disabled selected >Select a rating</option>
                  <option value={5}>Loved it</option>
                  <option value={4}>Liked it</option>
                  <option value={3}>It's OK</option>
                  <option value={2}>Disliked it</option>
                  <option value={1}>Hated it</option>
                </Input>
                <Icon icon={ic_keyboard_arrow_down} className="select-cursor" />
              </div>
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input
                type="text"
                name="subject"
                id="subject"
                value={this.state.subject}
                onChange={e => this.onChange(e)}
                required
              />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label for="review">Your Review</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                value={this.state.message}
                onChange={e => this.onChange(e)}
                required
              />
            </FormGroup>
          </Col>
          <Col className="text-right">
            <Button type="submit" className="btn-color text-uppercase">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
