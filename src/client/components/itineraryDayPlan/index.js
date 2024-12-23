import React, { Component } from "react";
import get from "lodash/get";
import Lightbox from "react-image-lightbox";
import {
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import classnames from "classnames";
const _ = { get };

export default class ItineraryDayPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      imageUrl: "",
      modal: false,
      activeTab: "1"
    };

    this.toggle = this.toggle.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  openLIghtBox(url) {
    this.setState({ isOpen: true, imageUrl: url, modal: false });
  }

  render() {
    return (
      <li>
        <div className="tm_date">
          <time>
            <span>
              <strong>Day</strong>
            </span>
          </time>
          <div className="tm-icon">{parseInt(this.props.index) + 1}</div>
        </div>
        <div className="tm_label d-flex">
          <div className="label-box">
            <h4>{this.props.item.title}</h4>
            {
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.item.dayDes
                }}
              />
            }
            <div>
              {this.props.item.silverId !== null ||
              this.props.item.goldId !== null ||
              this.props.item.platinumId !== null ? (
                <h5 className="hotel-name1" onClick={this.toggle}>
                  View hotel{" "}
                  <Icon
                    icon={ic_keyboard_arrow_right}
                    className="v-align-middle"
                    size={20}
                  />
                </h5>
              ) : null}

              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <ModalHeader toggle={this.toggle} />
                <ModalBody>
                  <Nav tabs>
                    {this.props.item.silverId === null ? null : (
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "1"
                          })}
                          onClick={() => {
                            this.toggleTab("1");
                          }}
                        >
                          Budget
                        </NavLink>
                      </NavItem>
                    )}
                    {this.props.item.goldId === null ? null : (
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "2"
                          })}
                          onClick={() => {
                            this.toggleTab("2");
                          }}
                        >
                          Premium
                        </NavLink>
                      </NavItem>
                    )}
                    {this.props.item.platinumId === null ? null : (
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "3"
                          })}
                          onClick={() => {
                            this.toggleTab("3");
                          }}
                        >
                          Luxury
                        </NavLink>
                      </NavItem>
                    )}
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <div className="row">
                        <div className="table-responsive">
                          <table className="table stripped">
                            <tbody>
                              <tr>
                                <td> Name</td>
                                <td>
                                  {_.get(
                                    this.props.item,
                                    "silverId.hotelName",
                                    ""
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <td>Address</td>
                                <td>
                                  {_.get(
                                    this.props.item,
                                    "silverId.addressLine1",
                                    ""
                                  )}{" "}
                                  {_.get(
                                    this.props.item,
                                    "silverId.addressLine2",
                                    ""
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        {this.props.item.silverId !== null
                          ? this.props.item.silverId.images.map(
                              (image, index) => (
                                <div
                                  className="col-lg-6 col-md-6 col-sm-12 mb-5"
                                  onClick={() =>
                                    this.openLIghtBox(
                                      `${this.props.baseUrl}${image}`
                                    )
                                  }
                                >
                                  <div className="hotel-modal-thumb-img img-object-fit">
                                    <img
                                      key={index}
                                      src={`${this.props.baseUrl}${image}`}
                                      alt="loading"
                                      style={{ width: "100%" }}
                                    />
                                  </div>
                                </div>
                              )
                            )
                          : null}
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="row">
                        <div className="table-responsive">
                          <table className="table stripped">
                            <tbody>
                              <tr>
                                <td> Name</td>
                                <td>
                                  {_.get(
                                    this.props.item,
                                    "goldId.hotelName",
                                    ""
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <td>Address</td>
                                <td>
                                  {_.get(
                                    this.props.item,
                                    "goldId.addressLine1",
                                    ""
                                  )}{" "}
                                  {_.get(
                                    this.props.item,
                                    "goldId.addressLine2",
                                    ""
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        {this.props.item.goldId !== null
                          ? this.props.item.goldId.images.map(
                              (image, index) => (
                                <div
                                  className="col-lg-6 col-md-6 col-sm-12 mb-5"
                                  onClick={() =>
                                    this.openLIghtBox(
                                      `${this.props.baseUrl}${image}`
                                    )
                                  }
                                >
                                  <div className="hotel-modal-thumb-img img-object-fit">
                                    <img
                                      key={index}
                                      src={`${this.props.baseUrl}${image}`}
                                      alt="loading"
                                      style={{ width: "100%" }}
                                    />
                                  </div>
                                </div>
                              )
                            )
                          : null}
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <div className="row">
                        <div className="table-responsive">
                          <table className="table stripped">
                            <tbody>
                              <tr>
                                <td> Name</td>
                                <td>
                                  {_.get(
                                    this.props.item,
                                    "platinumId.hotelName",
                                    ""
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <td>Address</td>
                                <td>
                                  {_.get(
                                    this.props.item,
                                    "platinumId.addressLine1",
                                    ""
                                  )}{" "}
                                  {_.get(
                                    this.props.item,
                                    "platinumId.addressLine2",
                                    ""
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        {this.props.item.platinumId !== null
                          ? this.props.item.platinumId.images.map(
                              (image, index) => (
                                <div
                                  className="col-lg-6 col-md-6 col-sm-12 mb-5"
                                  onClick={() =>
                                    this.openLIghtBox(
                                      `${this.props.baseUrl}${image}`
                                    )
                                  }
                                >
                                  <div className="hotel-modal-thumb-img img-object-fit">
                                    <img
                                      key={index}
                                      src={`${this.props.baseUrl}${image}`}
                                      alt="loading"
                                      style={{ width: "100%" }}
                                    />
                                  </div>
                                </div>
                              )
                            )
                          : null}
                      </div>
                    </TabPane>
                  </TabContent>
                </ModalBody>
              </Modal>
            </div>
          </div>
          <div className="hidden-xs">
            <div className="hotel-thumb-img-box img-object-fit">
              <img
                src={
                  this.props.item.silverId !== null
                    ? `${this.props.baseUrl}${
                        this.props.item.silverId.images[0]
                      }`
                    : this.props.item.goldId !== null
                    ? `${this.props.baseUrl}${this.props.item.goldId.images[0]}`
                    : this.props.item.platinumId !== null
                    ? `${this.props.baseUrl}${
                        this.props.item.platinumId.images[0]
                      }`
                    : null
                }
                alt=""
                className="rounded-circle thumb_visit"
              />
            </div>
          </div>
        </div>
        {this.state.isOpen === true ? (
          <Lightbox
            mainSrc={this.state.imageUrl}
            onCloseRequest={() => this.setState({ isOpen: false, modal: true })}
          />
        ) : null}
      </li>
    );
  }
}
