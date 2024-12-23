import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import get from "lodash/get";
import Helmet from "react-helmet";
import config from "../../config/config";
import MainCarousel from "../../components/carousel";
import Blogs from "../../components/blogs";
import SocialShareIcons from "../../components/socialShareIcons";
import Flickr from "../../components/flickr";
import Traveltips from "../../components/traveltips";
import Trip from "../../components/trip";
import Newsletter from "../../components/newsletter";
import Loader from "../../components/loader";

import { fetchBlogsList } from "../../redux/Blogs/action";
const _ = { get };

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNo: 0
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    if (this.props.blogsList.length === 0) {
      this.props.fetchBlogsList(0);
    }
    $(window).scrollTop(0);
  }

  loadMore() {
    let pageNo = this.state.pageNo + 1;
    this.props.fetchBlogsList(pageNo);
    this.setState({ ...this.state, pageNo });
  }

  head() {
    return (
      <Helmet>
        <title>Blogs | Holidays in India, India Travel Holiday</title>
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
    const baseUrl = `${config.serverUrl}:${config.port}`;
    let { blogsList } = this.props;
    return (
      <div>
        {this.head()}
        <div className="carousel-search relative">
          <MainCarousel image={"/images/blogbanner.jpg"} name={""} />
        </div>
        <section className="section-row">
          <Container>
            <Row>
              {this.props.loadingBlogList === true && blogsList.length === 0 ? (
                <Col className="col-sm-8  d-flex justify-content-center text-center">
                  <Loader />
                </Col>
              ) : (
                <Col sm="8">
                  {blogsList.map((blog, index) => (
                    <section className="itinerary-section" key={index}>
                      <Blogs blog={blog} baseUrl={baseUrl} />
                    </section>
                  ))}
                </Col>
              )}

              <Col sm="4">
                <div className="newsletter padd">
                  <Newsletter />
                </div>
                <div className="traveltips padd">
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
          {this.props.noMoreBlogs === false ? (
            <Col className="col-12 text-center">
              <Button color="success" onClick={() => this.loadMore()}>
                Load More
              </Button>
            </Col>
          ) : null}
        </section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBlogsList: payload => {
      dispatch(fetchBlogsList(payload));
    }
  };
}

function mapStateToProps(state) {
  return {
    loadingBlogList: state.Blogs.loadingBlogList,
    blogsList: state.Blogs.blogsList,
    noMoreBlogs: state.Blogs.noMoreBlogs,
    bestValueTrips: state.Home.bestValueTrips,
    popularTrips: state.Home.popularTrips
  };
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPage),
  loadData: ({ dispatch }) => dispatch(fetchBlogsList(0))
};
