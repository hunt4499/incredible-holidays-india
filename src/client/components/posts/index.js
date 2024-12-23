import React, { Component } from "react";
import "../../assets/css/posts.css";

export default class Posts extends Component {
  render() {
    return (
      <div>
        <div id="about_the_author">
          <div className="gravatar">
            <img
              src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/me.jpg"
              alt="Anna Kornikova"
              className="avatar avatar-200 wp-user-avatar wp-user-avatar-200 alignnone photo"
            />
          </div>
          <div className="author_detail">
            <div className="author_content">
              <div className="author_label">Posted By</div>
              <h4>Anna Kornikova</h4>
              Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus
              viverra quis at felis. Sed do.Lorem ipsum dolor sit amet,
              consectetur Nulla fringilla purus Lorem ipsum dosectetur
              adipisicing elit at leo dignissim congue.
            </div>
          </div>
          <br className="clear" />
        </div>
      </div>
    );
  }
}
