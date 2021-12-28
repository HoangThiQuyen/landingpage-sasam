import React, { useState } from "react";
import { X } from "react-feather";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Input,
  Label,
  Form,
} from "reactstrap";

const ModalPromotion = ({ setShowModal, showModal }) => {
  // ** Custom close btn
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setShowModal(!showModal)}
    />
  );
  return (
    <div>
      <Modal
        isOpen={showModal}
        toggle={() => setShowModal(!showModal)}
        className="modal-lg"
      >
        <ModalHeader close={CloseBtn} toggle={() => setShowModal(!showModal)}>
          <span style={{ color: "#1EAC52", fontWeight: "bolder" }}>
            Đăng ký ngay
          </span>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="mb-4">
              <Label style={{ fontSize: 15 }}>Họ tên</Label>
              <Input type="text" placeholder="Nhập họ tên ..." />
            </div>
            <div className="mb-4">
              <Label style={{ fontSize: 15 }}>Điện thoại</Label>
              <Input type="tel" placeholder="Nhập số điện thoại ..." />
            </div>
            <div className="mb-4">
              <Label style={{ fontSize: 15 }}>Email</Label>
              <Input type="email" placeholder="Nhập email ..." />
            </div>

            <div className="mt-5 d-flex justify-content-center">
              <div className="form-check cursor-pointer">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault2"
                  style={{ fontSize: 17 }}
                >
                  Lấy mã giảm giá
                </label>
              </div>
              <div className="form-check mb-2 ml-10">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault1"
                  style={{ fontSize: 17 }}
                >
                  Đăng kí mua
                </label>
              </div>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setShowModal(!showModal)}>
            Gửi
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalPromotion;
