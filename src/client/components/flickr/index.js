import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../config/config";

export default class Flickr extends Component {
  render() {
    const baseUrl = `${config.serverUrl}:${config.port}`;
    let { tripsList, title } = this.props;
    return (
      <div>
        <div className="advanced-booking-Form">
          <h3 className="sub-heading">{title}</h3>
          <ul className="insta-flickr">
            {tripsList.slice(0, 6).map(item => (
              <li>
                <Link to={`/itinerary-details/${item.slug}`}>
                  <img src={`${baseUrl}${item.featuredImage}`} alt="" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
