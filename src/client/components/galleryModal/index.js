import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import GalleryModalCarousel from '../galleryModalCarousel';

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
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="video-modal"
        >
          <div className="modal-close-icon" onClick={this.toggle}>
            <Icon icon={ic_close} className="close-icon" />
          </div>
          <ModalBody>
            <GalleryModalCarousel />
          </ModalBody>
        </Modal>
    );
  }
}
