import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Others extends Component {
  render() {
    return (
      <div className="trip-box relative">
        <div className="relative">
          <div className="trip-thumb relative">
            <Link to="">
              <img
                src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="trip-info">
            <div className="post_detail single_post">
              <span className="post_info_date">
                <a
                  href="http://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
                  title="Memorial Day to Someone Told Me to Travel"
                >
                  December 10, 2016
                </a>
              </span>
            </div>
            <h5 className="text-capitalize">
              <Link to="">Memorial Day to Someone Told Me to Travel</Link>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
