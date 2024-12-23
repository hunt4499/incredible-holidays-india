import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const initialState = {
  name: "",
  email: "",
  message: ""
};
export default class ReplyForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.reviewStatus !== null &&
      nextProps.reviewStatus !== this.props.reviewStatus
    ) {
      if (nextProps.reviewStatus.success == true) {
        this.setState({ ...initialState });
      }
    }
  }
  onChange(e) {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submitIBlogReview(this.state);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label for="name">Name*</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={e => this.onChange(e)}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="email">Email*</Label>
                <Input
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  id="exampleEmail"
                  required
                  value={this.state.email}
                  onChange={e => this.onChange(e)}
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="review">Comment</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="review"
                  required
                  value={this.state.message}
                  onChange={e => this.onChange(e)}
                />
              </FormGroup>
            </Col>
            <Col className="text-right">
              <Button type="submit" className="btn-color">
                Post Comment
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
