import React, { Component } from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

export default class Trip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 4
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;
    return (
      <div className="trip-box relative">
        <div className="relative">
          <div className="trip-thumb relative">
            <Link to="">
              <img
                src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                alt=""
              />
              <div className="tour_price">$5,000</div>
              <div className="dest-overlay">
                <h3 className="text-uppercase">tokyo</h3>
              </div>
              <StarRatingComponent
                className="star"
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
