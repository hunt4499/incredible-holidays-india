import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import {instagram} from 'react-icons-kit/fa/instagram'

export default class SocialShareIcons extends Component {
  render() {
    return (
      <div className="itinerary-share-icons text-center">
        <Link to="" className="share-btn fb-share">
          <Icon icon={facebook} className="share-btn-icon" />
          <span>share</span>
        </Link>
        <Link to="" className="share-btn twitter-share">
          <Icon icon={twitter} className="share-btn-icon" />
          <span>share</span>
        </Link>
        <Link to="" className="share-btn linkedin-share">
          <Icon icon={instagram} className="share-btn-icon" />
          <span>share</span>
        </Link>
      </div>
    );
  }
}
