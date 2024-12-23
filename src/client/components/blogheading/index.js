import React, { Component } from "react";
import moment from "moment";
export default class BlogHeading extends Component {
  render() {
    const { blogDetails } = this.props;
    return (
      <div id="page_caption">
        <div className="page_title_wrapper">
          <div className="page_title_inner">
            <div className="page_title_content">
              <h1>{blogDetails.blogTitle}</h1>
              <div className="post_detail single_post">
                <span className="post_info_date">
                  <a href="javascript:void(0)" title={blogDetails.blogTitle}>
                    {moment().format("MMM DD YYYY")}
                  </a>
                </span>
                <span className="post_info_comment">
                  <a href="javascript:void(0)">
                    {blogDetails.reviews.length}
                    &nbsp;Comment
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
