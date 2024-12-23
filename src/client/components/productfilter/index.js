import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  CustomInput,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const budget = ["normal", "premium", "luxury"];

class ProductFilter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdown1Open: false,
      dropdown2Open: false,
      dropdown3Open: false,
      value: 100000,
      range: 0,
      checked: false,
      budget: [],
      duration: 60,
      priceEnabled: false,
      budgetEnabled: false,
      durationEnabled: false
    };
  }

  toggle(count) {
    if (count === "1") {
      this.setState({
        ...this.state,
        dropdown1Open: !this.state.dropdown1Open
      });
    } else if (count === "2") {
      this.setState({
        ...this.state,
        dropdown2Open: !this.state.dropdown2Open
      });
    } else if (count === "3") {
      this.setState({
        ...this.state,
        dropdown3Open: !this.state.dropdown3Open
      });
    }
  }
  handlePriceFilter(value) {
    let state = this.state;
    state.value = value;
    this.setState({ ...state });
  }

  handleBudgetFilter(e) {
    let budget = this.state.budget;
    if (e.target.checked === true) {
      budget.push(e.target.name);
    } else {
      for (let i = 0; i < budget.length; i++) {
        if (budget[i] === e.target.name) {
          budget.splice(i, 1);
        }
      }
    }
    this.setState({ ...this.state, budget });
  }

  handleDurationFilter(days) {
    let state = this.state;
    state.duration = days;
    this.setState({ ...state });
  }
  clearBudgetFilter() {
    let state = this.state;
    state.budget = [];
    state.budgetEnabled = false;
    this.setState({ ...state });
    this.props.searchItineraryFilters(state);
  }
  clearPriceFilter() {
    let state = this.state;
    state.value = 10000;
    state.priceEnabled = false;
    this.setState({ ...state });
    this.props.searchItineraryFilters(state);
  }
  clearDurationFilter() {
    let state = this.state;
    state.duration = 60;
    state.durationEnabled = false;
    this.setState({ ...state });
    this.props.searchItineraryFilters(state);
  }
  searchItineraryFilters(name) {
    let state = this.state;
    state[name] = true;
    this.setState({ ...state });
    this.props.searchItineraryFilters(state);
  }

  render() {
    return (
      <div className="container-fluid filter-arya">
      <div className="row justify-content-between">
        <div className="container">
        <div className="row justify-content-center">
                <div className="col-4 col-lg-4 col-sm-4">
                  <ButtonDropdown
                    className="btn-block"
                    isOpen={this.state.dropdown1Open}
                    toggle={() => this.toggle("1")}
                  >
                    <DropdownToggle caret>
                      Price <i />
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className="range-slider">
                        <input
                          className="range-slider__range"
                          type="range"
                          defaultValue={100000}
                          min="0"
                          onChange={e => this.handlePriceFilter(e.target.value)}
                          max="100000"
                        />
                        <span className="range-slider__value">0</span>
                        <span className="placeH">{this.state.value}</span>
                      </div>
                      <div className="btn-ar">
                        <button
                          className="btn"
                          onClick={() => {
                            this.toggle("1");
                            this.clearPriceFilter();
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className="btn"
                          onClick={() => {
                            this.toggle("1");
                            this.searchItineraryFilters("priceEnabled");
                          }}
                        >
                          Apply
                        </button>
                      </div>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
                <div className="col-4 col-lg-4 col-sm-4">
                  <ButtonDropdown
                    className="btn-block"
                    isOpen={this.state.dropdown2Open}
                    toggle={() => this.toggle("2")}
                  >
                    <DropdownToggle caret>
                      Budget <i />
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className="checkArya">
                        {budget.map(budget => (
                          <CustomInput
                            key={budget}
                            onChange={e => this.handleBudgetFilter(e)}
                            checked={this.state.budget.includes(budget)}
                            type="checkbox"
                            name={budget}
                            id={budget}
                            label={budget}
                          />
                        ))}
                      </div>
                      <div className="btn-ar">
                        <button
                          className="btn"
                          onClick={() => {
                            this.toggle("2");
                            this.clearBudgetFilter();
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className="btn"
                          onClick={() => {
                            this.toggle("2");
                            this.searchItineraryFilters("budgetEnabled");
                          }}
                        >
                          Apply
                        </button>
                      </div>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
                <div className="col-4 col-lg-4 col-sm-4">
                  <ButtonDropdown
                    className="btn-block"
                    isOpen={this.state.dropdown3Open}
                    toggle={() => this.toggle("3")}
                  >
                    <DropdownToggle caret>
                      Duration <i />
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className="checkArya">
                        <FormGroup tag="fieldset">
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onChange={() => this.handleDurationFilter(7)}
                              />{" "}
                              Upto 7 Days
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onChange={() => this.handleDurationFilter(15)}
                              />{" "}
                              Upto 15 Days
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onChange={() => this.handleDurationFilter(30)}
                              />{" "}
                              Upto 30 Days
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio1"
                                onChange={() => this.handleDurationFilter(60)}
                              />{" "}
                              More than 30 Days
                            </Label>
                          </FormGroup>
                        </FormGroup>
                      </div>
                      <div className="btn-ar">
                        <button
                          className="btn"
                          onClick={() => {
                            this.toggle("3");
                            this.clearDurationFilter();
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className="btn"
                          onClick={() => {
                            this.toggle("3");
                            this.searchItineraryFilters("durationEnabled");
                          }}
                        >
                          Apply
                        </button>
                      </div>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default ProductFilter;
