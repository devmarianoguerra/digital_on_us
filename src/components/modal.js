import React from "react";
import { Modal, Button } from "react-bootstrap";

class InfoModal extends React.Component {
  render() {
    const { close } = this.props;
    const { show } = this.props;
    const { title } = this.props;
    const { plot } = this.props;
    const { poster } = this.props;
    if (!show) {
      return null;
    } else {
      return (
        <>
          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
              <img src={poster} alt="" />
            </Modal.Header>
            <Modal.Body>
              <span
                className="badge badge-light"
                style={{
                  width: "70px",
                  height: "100px",
                  fontSize: "15px",
                }}
              >
                Plot : {plot}
              </span>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="btn btn-warning"
                style={{
                  backgroundColor: "black",
                  color: "rgb(237, 230, 230)",
                }}
                onClick={close}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
}

export default InfoModal;
