import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel2";
import { Icon } from "react-icons-kit";
import { ic_access_time } from "react-icons-kit/md/ic_access_time";

export default class OwlCarouselCenter extends Component {
  render() {
    const options = {
      items: 3,
      //nav: true,
      loop: true,
      autoplay: true,
      center: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      margin: 15,
      dots:false,
      responsive: {
        0: {
          items: 1
        },
        // breakpoint from 480 up
        480: {
          items: 1
        },
        // breakpoint from 768 up
        768: {
          items: 3
        }
      }
    };
    return (
      <OwlCarousel options={options}>
        {this.props.popularTrips.map((item, index) => (
          <div key={index}>
            <div className="box_grid">
              <figure>
                <div className="figure-thumb">
                  <Link to={`/itinerary-details/${item.slug}`}>
                    <div className="owl-center-img-box img-object-fit">
                      <img
                        src={`${this.props.baseUrl}${item.featuredImage}`}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    {/* <div className="read_more">
                      <span>Read more</span>
                    </div> */}
                  </Link>
                </div>
                <figcaption>
                  <h3 className="mt-3">
                    <Link to={`/itinerary-details/${item.slug}`}>
                      {item.pageTitle}
                    </Link>
                  </h3>
                  {
                    <div
                      className="carouselShortDescription"
                      dangerouslySetInnerHTML={{
                        __html: item.description
                      }}
                    />
                  }
                </figcaption>
                <div className="mt-4 fig-foot d-flex justify-content-between">
                  <div className="timing">
                    <Icon icon={ic_access_time} className="icon" />
                    <span>{item.itineraryDays.length} days</span>
                  </div>
                  <div className="score">
                    <span>
                      <em>{item.reviews.length} Reviews</em>
                    </span>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        ))}
      </OwlCarousel>
    );
  }
}
