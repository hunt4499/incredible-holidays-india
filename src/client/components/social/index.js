import React, { Component } from "react";
import "../../assets/css/social.css";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import { youtube } from "react-icons-kit/fa/youtube";
import { pinterest } from "react-icons-kit/fa/pinterest";
import { snapchatGhost } from "react-icons-kit/fa/snapchatGhost";

export default class Social extends Component {
  render() {
    return (
      <div>
        <div className="advanced-booking-Form">
          <h3 className="sub-heading">Connect to us</h3>

          <div className="social_wrapper shortcode light small">
            <ul>
              <li className="facebook">
                <a target="_blank" title="Facebook" href="#">
                  <Icon icon={facebook} className="v-align-middle" />
                </a>
              </li>
              <li className="twitter">
                <a target="_blank" title="Twitter" href="https://twitter.com/#">
                  <Icon icon={twitter} className="v-align-middle" />
                </a>
              </li>
              <li className="youtube">
                <a target="_blank" title="Youtube" href="#">
                  <Icon icon={youtube} className="v-align-middle" />
                </a>
              </li>
              <li className="pinterest">
                <a
                  target="_blank"
                  title="Pinterest"
                  href="https://pinterest.com/#"
                >
                  <Icon icon={pinterest} className="v-align-middle" />
                </a>
              </li>
              <li className="instagram">
                <a
                  target="_blank"
                  title="Instagram"
                  href="https://instagram.com/theplanetd"
                >
                  <Icon icon={snapchatGhost} className="v-align-middle" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
