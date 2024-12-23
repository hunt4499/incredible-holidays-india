import Helmet from "react-helmet";
import React, { Component } from "react";

export class HelmetTag extends React.Component {
  render() {
    const { title, description, keywords } = this.props;
    return (
      <Helmet
        title={title}
        meta={[
          {
            name: "description",
            content: description
          },
          {
            name: "keywords",
            content: keywords ? keywords : "Incredible Holiday India"
          },
          {
            name: "og:title",
            content: title
          },
          {
            name: "og:description",
            content: description
          },
          {
            name: "robots",
            content: "noindex"
          }
        ]}
      />
    );
  }
}
