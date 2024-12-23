import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

export default class Newsletter extends Component {
  render() {
    return (
      <div className="advanced-booking-Form bg">
        <h3 className="sub-heading">Newsletter</h3>
        <p>Don't miss a thing! Sign up to receive daily deals</p>
        <Form>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="Your Email Address"
              className="text-center"
            />
          </FormGroup>
          <div className="text-center">
            <Button color="success" block type="button">
              Subscribe
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
