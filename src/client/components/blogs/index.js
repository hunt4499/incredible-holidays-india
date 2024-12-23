import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ProgressiveImage from "react-progressive-image-loading";
import { Link } from "react-router-dom";
import moment from "moment";
import { angleRight } from "react-icons-kit/fa/angleRight";
import { Icon } from "react-icons-kit";

export default class Blogs extends Component {
  render() {
    const { blog, baseUrl } = this.props;
    return (
      <div className="trip-box relative">
        <div className="relative">
          <div className="trip-thumb relative">
            <Link to={`/blog-details/${blog.slug}`}>
              <div className="blog-img-box img-object-fit img">
                <ProgressiveImage
                  src={`${baseUrl}${blog.featuredImage}`}
                  transitionTime={1000}
                  key={blog.slug}
                  transitionFunction="ease"
                  render={(src, style, key) => (
                    <img src={src} style={style} key={key} />
                  )}
                />
                {/* <img src={`${baseUrl}${blog.featuredImage}`} alt="" /> */}
              </div>
            </Link>
          </div>
          <div className="trip-info">
            <div className="post_detail single_post">
              <span className="post_info_date">
                <Link to={`/blog-details/${blog.slug}`} title={blog.blogTitle}>
                  {moment().format("MMM DD YYYY")}
                </Link>
              </span>
              <span className="post_info_comment">
                <a href="http://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/#respond">
                  {blog.reviews.length}
                  &nbsp;Comment
                </a>
              </span>
            </div>
            <h5 className="text-capitalize">
              <Link to={`/blog-details/${blog.slug}`}>{blog.blogTitle}</Link>
            </h5>
            {
              <div
                className="blogShortDescription"
                dangerouslySetInnerHTML={{
                  __html: blog.blogSections[0].description
                }}
              />
            }
            <Row>
              <Col sm="7">
                <div className="post_button_wrapper">
                  <Link to={`/blog-details/${blog.slug}`} className="readmore">
                    Read More
                    <span className="ti-angle-right">
                      <Icon icon={angleRight} className="v-align-middle" />
                    </span>
                  </Link>
                </div>
              </Col>
              <Col sm="5" className="v-align-middle text-right" />
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
