import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Icon } from "react-icons-kit";
import {ic_play_arrow} from 'react-icons-kit/md/ic_play_arrow'
import { ic_close } from "react-icons-kit/md/ic_close";

export default class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="fullscreen-carousel-video">
        <Button onClick={this.toggle} className="video-modal-btn">
          <span className="mr-2">How it works</span><Icon icon={ic_play_arrow} className="close-icon" />
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="video-modal"
        >
          <div className="modal-close-icon" onClick={this.toggle}>
            <Icon icon={ic_close} className="close-icon" />
          </div>
          <ModalBody>
            {/* <iframe src="https://www.youtube.com/embed/sbUk5oqJsMs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="true"></iframe> */}
            <iframe
              src="/videos/HowItWorks.mp4"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
