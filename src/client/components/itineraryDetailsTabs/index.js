import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import FreeScrollBar from 'react-free-scrollbar';
import classnames from "classnames";

export default class ItineraryDetailsTabs extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
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
      <div className="itinerary-detail-tabs">
        <Row>
          <Col sm="12">
            <Nav tabs className="d-flex flex-wrap">
              {this.props.tripDetail.map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === index
                    })}
                    onClick={() => {
                      this.toggle(index);
                    }}
                  >
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col sm="12">
            <TabContent activeTab={this.state.activeTab}>
              {this.props.tripDetail.map((item, index) => (
                <TabPane tabId={index} key={index}>
                  <div class="content">
                  <FreeScrollBar className="demo-vertical-track demo-vertical-handler">
                      <Row>
                        <Col sm="12">
                          <ul className="itinerary-inclusions">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.description
                              }}
                            />
                          </ul>
                        </Col>
                      </Row>
                    </FreeScrollBar>
                  </div>
                </TabPane>
              ))}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}
