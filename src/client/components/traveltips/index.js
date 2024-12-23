import React, { Component } from "react";

export default class Traveltips extends Component {
  render() {
    return (
      <div>
        <div className="advanced-booking-Form">
          <h3 className="sub-heading">Traveltips</h3>
          <ul className="posts blog withthumb">
            <li>
              <div className="post_circle_thumb">
                <a href="http://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/">
                  <img
                    className="alignleft frame post_thumb"
                    src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-150x150.jpg"
                    alt=""
                  />
                </a>
              </div>
              <a href="http://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/">
                Memorial Day to Someone Told Me to Travel
              </a>
              <div className="post_attribute">December 10, 2016</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
