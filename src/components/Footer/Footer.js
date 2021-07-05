import React, { Component } from "react";

import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

import "./Footer.scss";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <footer>
        <p>Made with ♥ inspired by Sheldon Cooper</p>
        <Button className="footer-button" onClick={this.handleOpenModal}>
          Game Rules
        </Button>
        <Modal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
      </footer>
    );
  }
}

export default Footer;