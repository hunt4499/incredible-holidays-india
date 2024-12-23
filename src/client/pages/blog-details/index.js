import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import {  toast } from "react-toastify";
import Lightbox from "react-image-lightbox";
import Helmet from "react-helmet";
import get from "lodash/get";
import config from "../../config/config";
import BlogHeading from "../../components/blogheading";
import MainCarousel from "../../components/carousel";
import ReplyForm from "../../components/replyForm";
import SocialShareIcons from "../../components/socialShareIcons";
import Flickr from "../../components/flickr";
import Trip from "../../components/trip";
import Newsletter from "../../components/newsletter";
import ReviewListing from "../../components/reviewLisitng";
import Loader from "../../components/loader";

const _ = { get };

import {
  fetchBlogDetails,
  submitIBlogReview,
  fetchBlogsList
} from "../../redux/Blogs/action";

class BlogDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      imageUrl: ""
    };
    this.submitIBlogReview = this.submitIBlogReview.bind(this);
  }

  componentDidMount() {
    if (this.props.blogDetails === null) {
      this.props.fetchBlogDetails(this.props.match.params.slug);
    }
    if (this.props.blogDetails !== null) {
      if (this.props.blogDetails.slug !== this.props.match.params.slug) {
        this.props.fetchBlogDetails(this.props.match.params.slug);
      }
    }
    $(window).scrollTop(0);
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.postReviewStatus !== null &&
      nextProps.postReviewStatus !== this.props.postReviewStatus
    ) {
      this.toastSuccess(nextProps.postReviewStatus.message);
    }
  }
  submitIBlogReview(data) {
    const resObj = {
      ...data,
      blogId: this.props.blogDetails._id,
      title: this.props.blogDetails.blogTitle,
      url: this.props.history.location.pathname
    };
    this.props.submitIBlogReview(resObj);
  }
  toastSuccess(message) {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 20,
      text:"center"
    });
  }

  openLIghtBox(url) {
    this.setState({ isOpen: true, imageUrl: url });
  }

  render() {
    const baseUrl = `${config.serverUrl}:${config.port}`;
    return (
      <div>
        {this.props.blogDetails !== null ? (
          <Helmet>
            <title>{`${
              this.props.blogDetails.metaTitle
            } - Incredible Holiday India`}</title>
            <meta
              name="description"
              content={this.props.blogDetails.metaDescription}
            />
            <meta
              name="keywords"
              content={this.props.blogDetails.metaKeywords}
            />
            <meta name="author" content="Holiday Packages In India" />
            <meta name="robots" content="noindex" />
            />
          </Helmet>
        ) : null}
        <div className="carousel-search relative">
          <MainCarousel
            image={
              this.props.blogDetails !== null
                ? `${baseUrl}${this.props.blogDetails.featuredImage}`
                : "/images/blogbanner.jpg"
            }
            name={_.get(this.props.blogDetails, "blogTitle", "")}
          />
          {this.props.blogDetails !== null ? (
            <BlogHeading blogDetails={this.props.blogDetails} />
          ) : null}
        </div>
        <section className="section-row">
          <Container>
            <Row>
              {this.props.blogDetails !== null ? (
                <Col sm="8">
                  {this.props.blogDetails.blogSections.map((item, index) => (
                    <div>
                      <div
                        className="images spacing"
                        onClick={() =>
                          this.openLIghtBox(`${baseUrl}${item.image}`)
                        }
                      >
                        <div className="blog-img-box img-object-fit">
                          <img src={`${baseUrl}${item.image}`} alt="" />
                        </div>
                      </div>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.description
                        }}
                      />
                    </div>
                  ))}
                  {/* <div className="tags">
                    <Tags />
                  </div> */}
                  <div className="clear" />
                  {/* <div className="others">
                    <h5 className="heading">You might also like</h5>
                    <div className="col-sm-4 one_third">
                      <Others />
                    </div>
                    <div className="col-sm-4 one_third">
                      <Others />
                    </div>
                    <div className="col-sm-4 one_third">
                      <Others />
                    </div>
                  </div> */}
                  <div className="reply">
                    <h5 className="reply-heading">Leave A Reply</h5>
                    <div className="farm">
                      <ReplyForm
                        submitIBlogReview={this.submitIBlogReview}
                        reviewStatus={this.props.postReviewStatus}
                      />
                    </div>
                  </div>
                  <div className="review_listings">
                    {this.props.blogDetails !== null
                      ? this.props.blogDetails.reviews.map((item, index) => (
                          <ReviewListing key={index} review={item} />
                        ))
                      : null}
                  </div>
                </Col>
              ) : (
                <Col className="col-sm-8  d-flex justify-content-center text-center">
                  <Loader />
                </Col>
              )}

              <Col sm="4">
                <div className="newsletter padd">
                  <Newsletter />
                </div>
                <div className="traveltips padd">
                  {/* <Traveltips /> */}
                  <Flickr
                    title="Best Value Trips"
                    tripsList={this.props.bestValueTrips}
                  />
                </div>
                <div className="flickr padd">
                  <Flickr
                    title="Our Popular Trips"
                    tripsList={this.props.popularTrips}
                  />
                </div>
                <div className="social padd">
                  <SocialShareIcons />
                </div>
                <div className="trip padd">
                  <Trip />
                </div>
                <div className="trip">
                  <Trip />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {this.state.isOpen === true ? (
          <Lightbox
            mainSrc={this.state.imageUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        ) : null}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBlogDetails: payload => {
      dispatch(fetchBlogDetails(payload));
    },
    submitIBlogReview: payload => {
      dispatch(submitIBlogReview(payload));
    },
    fetchBlogsList: () => {
      dispatch(fetchBlogsList());
    }
  };
}

function mapStateToProps(state) {
  return {
    blogsList: state.Blogs.blogsList,
    blogDetails: state.Blogs.blogDetails,
    postReviewStatus: state.Blogs.postReviewStatus,
    bestValueTrips: state.Home.bestValueTrips,
    popularTrips: state.Home.popularTrips
  };
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogDetails),
  loadData: (store, match) =>
    store.dispatch(fetchBlogDetails(match.params.slug))
};
