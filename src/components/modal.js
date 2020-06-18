import React from "react";
import { Modal, Button } from "react-bootstrap";
import Styled from "styled-components";

class InfoModal extends React.Component {
  render() {
    const { close } = this.props;
    const { show } = this.props;
    const { title } = this.props;
    const { plot } = this.props;
    console.log("title: ", title, "plot: ", plot);
    if (!show) {
      return null;
    } else {
      return (
        <>
          <Modal show={show} style={{}}>
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
              <Modal.Body>
                <span className="badge badge-light"></span>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-warning" onClick={close}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Header>
          </Modal>
        </>
      );
    }
  }
}

export default InfoModal;
