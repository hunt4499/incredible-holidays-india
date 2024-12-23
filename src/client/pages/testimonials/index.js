import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import Helmet from "react-helmet";

import MainCarousel from "../../components/carousel";

class Testimonials extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }
  head() {
    return (
      <Helmet>
        <title>
          Holiday Packages to India | Holidays in India, India Travel Holiday
        </title>
        <meta
          name="description"
          content="Incredibleholidayindia offers holidays in India, holiday packages, India travel holiday, golden triangle, religious tour packages at affordable prices."
        />
        <meta
          name="keywords"
          content="holiday packages india, holidays in india, india travel, india travel holidays, affordable holiday packages india, travel tours india, golden triangle holidays"
        />
        <meta name="author" content="Holiday Packages In India" />
        <meta name="robots" content="noindex" />
        />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <div className="carousel-search relative">
          <MainCarousel
            image={"/images/contactbanner.jpg"}
            name={"Testimonials"}
          />
        </div>
        <section className="section-row contact-info">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="media spacing">
                  <img
                    class="d-flex mr-3 rounded-circle"
                    src="/images/user-pic.svg"
                    alt=""
                  />
                  <div class="media-body">
                    <div class="rev-info">
                      <i>
                        {" "}
                        <strong>Akhil Arora</strong> - Oct 31 2018{" "}
                      </i>
                    </div>
                    <StarRatingComponent name="rate1" starCount={5} value={5} />

                    <p class="text-justify">
                      This trip was easily the trip of a lifetime for our family
                      of four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="media spacing">
                  <img
                    class="d-flex mr-3 rounded-circle"
                    src="/images/user-pic.svg"
                    alt=""
                  />
                  <div class="media-body">
                    <div class="rev-info">
                      <i>
                        {" "}
                        <strong>Akhil Arora</strong> - Oct 31 2018{" "}
                      </i>
                    </div>
                    <StarRatingComponent name="rate1" starCount={5} value={5} />

                    <p class="text-justify">
                      This trip was easily the trip of a lifetime for our family
                      of four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="media spacing">
                  <img
                    class="d-flex mr-3 rounded-circle"
                    src="/images/user-pic.svg"
                    alt=""
                  />
                  <div class="media-body">
                    <div class="rev-info">
                      <i>
                        {" "}
                        <strong>Akhil Arora</strong> - Oct 31 2018{" "}
                      </i>
                    </div>
                    <StarRatingComponent name="rate1" starCount={5} value={5} />

                    <p class="text-justify">
                      This trip was easily the trip of a lifetime for our family
                      of four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="media spacing">
                  <img
                    class="d-flex mr-3 rounded-circle"
                    src="/images/user-pic.svg"
                    alt=""
                  />
                  <div class="media-body">
                    <div class="rev-info">
                      <i>
                        {" "}
                        <strong>Akhil Arora</strong> - Oct 31 2018{" "}
                      </i>
                    </div>
                    <StarRatingComponent name="rate1" starCount={5} value={5} />

                    <p class="text-justify">
                      This trip was easily the trip of a lifetime for our family
                      of four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="media spacing">
                  <img
                    class="d-flex mr-3 rounded-circle"
                    src="/images/user-pic.svg"
                    alt=""
                  />
                  <div class="media-body">
                    <div class="rev-info">
                      <i>
                        {" "}
                        <strong>Akhil Arora</strong> - Oct 31 2018{" "}
                      </i>
                    </div>
                    <StarRatingComponent name="rate1" starCount={5} value={5} />

                    <p class="text-justify">
                      This trip was easily the trip of a lifetime for our family
                      of four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="media spacing">
                  <img
                    class="d-flex mr-3 rounded-circle"
                    src="/images/user-pic.svg"
                    alt=""
                  />
                  <div class="media-body">
                    <div class="rev-info">
                      <i>
                        {" "}
                        <strong>Akhil Arora</strong> - Oct 31 2018{" "}
                      </i>
                    </div>
                    <StarRatingComponent name="rate1" starCount={5} value={5} />

                    <p class="text-justify">
                      This trip was easily the trip of a lifetime for our family
                      of four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="media spacing">
                  <img
                    class="d-flex mr-3 rounded-circle"
                    src="/images/user-pic.svg"
                    alt=""
                  />
                  <div class="media-body">
                    <div class="rev-info">
                      <i>
                        {" "}
                        <strong>Akhil Arora</strong> - Oct 31 2018{" "}
                      </i>
                    </div>
                    <StarRatingComponent name="rate1" starCount={5} value={5} />

                    <p class="text-justify">
                      This trip was easily the trip of a lifetime for our family
                      of four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="media spacing">
                  <img
                    class="d-flex mr-3 rounded-circle"
                    src="/images/user-pic.svg"
                    alt=""
                  />
                  <div class="media-body">
                    <div class="rev-info">
                      <i>
                        {" "}
                        <strong>Akhil Arora</strong> - Oct 31 2018{" "}
                      </i>
                    </div>
                    <StarRatingComponent name="rate1" starCount={5} value={5} />

                    <p class="text-justify">
                      This trip was easily the trip of a lifetime for our family
                      of four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.This trip was easily
                      the trip of a lifetime for our family of four, and it will
                      be quite some time before we stop talking about it.This
                      trip was easily the trip of a lifetime for our family of
                      four, and it will be quite some time before we stop
                      talking about it.This trip was easily the trip of a
                      lifetime for our family of four, and it will be quite some
                      time before we stop talking about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default {
  component: Testimonials
};
