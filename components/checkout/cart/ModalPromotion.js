import React from "react";

// Third Library
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// Components
import PromotionCode from "./PromotionCode";

const ModalPromotion = ({ modalPromotion, setModalPromotion }) => {
  return (
    <div>
      <Modal
        isOpen={modalPromotion}
        toggle={() => setModalPromotion(!modalPromotion)}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={() => setModalPromotion(!modalPromotion)}>
          <span style={{ color: "#9799a0" }}>Mã giảm giá của tôi</span>
        </ModalHeader>
        <ModalBody>
          <PromotionCode />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setModalPromotion(!modalPromotion)}
          >
            Chọn
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalPromotion;
