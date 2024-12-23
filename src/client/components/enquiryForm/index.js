import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

export default class EnquiryFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      query: "",
      phone:""
    };
    this.handleChange = this.handleChange.bind(this);
    
    
  }
  submitQueryform (e){
    e.preventDefault();
    const formObj = {
      name: this.state.name,
      email: this.state.email,
      query: this.state.query,
      phone:this.state.phone

    };
    this.props.submitQueryForm(formObj);
    this.setState({ 
      name:'',
      email:'', 
      query:'',
      phone:''
  });
  console.log('===============this.state=====================');
  console.log(this.state);
  console.log('================this.state====================');
    
  }
  handleChange(e) {
    e.preventDefault();
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ ...state });
  }

  

  render() {
    return (
      <Form onSubmit={(e) => this.submitQueryform(e)}>
        <Row>
          <Col sm="4">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                placeholder="Enter Your Name"
                required
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                placeholder="Enter Your Email Id"
                required
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
              
                type="number"
                name="phone"
                id="phone"
                value={this.state.phone}
                placeholder="Enter Your Phone Number"
                required
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="query"
                id="message"
                value={this.state.query}
                placeholder="Leave Your Message Here..."
                required
                minLength={20}
                onChange={this.handleChange}
                rows="4"
              />
            </FormGroup>
          </Col>
          <Col sm="12" className="text-right">
            <Button type="submit" color="success">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
