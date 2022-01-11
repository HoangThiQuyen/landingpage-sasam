import React from "react";

// Third Library
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalAddAddress = ({ modalAddress, handleModal }) => {
  return (
    <div>
      <Modal
        isOpen={modalAddress}
        toggle={handleModal}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={handleModal}>Thêm địa chỉ mới</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>
              Họ và tên
              <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Full name ..."
            />
          </div>
          <div className="form-group">
            <label>
              Địa chỉ
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Address ..."
            />
          </div>
          <div className="form-group">
            <label>
              Số điện thoại
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number ..."
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleModal}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={handleModal}>
            Cancel
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalAddAddress;
