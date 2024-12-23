import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import PhoneCode from 'react-phone-code';

export default class AdvancedBookingForm extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      name: "",
      mobile: "",
      email: "",
      query: "",
      isd:""
    };
    this.submitQueryForm = this.submitQueryForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePhoneCode = this.handleChangePhoneCode.bind(this);
    
  }

  submitQueryForm(e) {
    e.preventDefault();
    const formObj = {
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email,
      query: this.state.query,
      isd:this.state.isd
    };
    this.props.submitQueryForm(formObj);
    this.setState({
      name: "",
      email: "",
      query: "",
      phone: "",
      isd:""
    });
  }

  handleChange(e) {
    e.preventDefault();
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  }
  handleChangePhoneCode(e) {
    e.preventDefault();
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="advanced-booking-Form">
        <Nav tabs className="text-uppercase sub-heading text-center add-space">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Booking Form
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Form onSubmit={e => this.submitQueryform(e)}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      required
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      required
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    {/* <PhoneCode
                      onChange={(e)=>this.handleChangePhoneCode(e)} // required
                      showFirst={["US", "IN"]}
                      defaultValue="select county"
                      id="isd"
                      name="isd"
                      className="some class name"
                      optionClassName="some option class name"
                    /> */}
                    <Input
                      type="number"
                      name="mobile"
                      id="phoneNo"
                      placeholder="Enter Contact Number"
                      minLength={10}
                      maxLength={10}
                      required
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      rows="2"
                      type="textarea"
                      name="query"
                      id="query"
                      placeholder="Enter your query here"
                      minLength={20}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <div className="text-center">
                    <Button color="success" block type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
