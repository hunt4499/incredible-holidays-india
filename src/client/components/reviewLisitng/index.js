import React, { Component } from "react";
import moment from "moment";
import StarRatingComponent from "react-star-rating-component";

export default class index extends Component {
  render() {
    return (
      <div className="media mb-4">
        <img
          className="d-flex mr-3 rounded-circle"
          src="/images/user-pic.svg"
          alt=""
        />
        <div className="media-body">
          <div className="rev-info">
            <i>
              <strong>{this.props.review.name}</strong> -{" "}
              {moment(this.props.review.date).format("MMM DD YYYY")}
            </i>
          </div>
          <StarRatingComponent
            name="rate1"
            starCount={this.props.review.rating}
            value={this.props.review.rating}
          />
          <p className="text-justify">{this.props.review.message}</p>
        </div>
      </div>
    );
  }
}
