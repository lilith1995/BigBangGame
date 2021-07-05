import React from "react";
import ReactModal from "react-modal";

import closeButton from "../../assets/x.svg";
import gameRules from "../../assets/image-rules.svg";

import "./Modal.scss";

class Modal extends React.Component {
  render() {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.props.handleCloseModal}
        className="game-modal"
        overlayClassName="Overlay"
      >
        <div className="modal_header">
          <h1>How to play?</h1>
          <button
            onClick={this.props.handleCloseModal}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <img src={closeButton} alt="close" />
          </button>
        </div>
        <img src={gameRules} alt="Game Rules" />
      </ReactModal>
    );
  }
}

export default Modal;
