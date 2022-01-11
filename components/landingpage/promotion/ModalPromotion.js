import Image from "next/image";
import React from "react";

// UI
import { X } from "react-feather";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  Row,
  Col,
} from "reactstrap";

// scss
import styles from "./Promotion.module.css";

// images
import fly from "../../../public/image/fly-promotion.png";
import modalPromotion from "../../../public/image/modal-promotion.png";
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
    <div className={styles.modalPromotion}>
      <Modal
        isOpen={showModal}
        toggle={() => setShowModal(!showModal)}
        className="modal-xl modal-dialog-centered"
      >
        <ModalHeader close={CloseBtn} toggle={() => setShowModal(!showModal)}>
          <span style={{ color: "#1EAC52", fontWeight: "bolder" }}>
            Đăng ký ngay
          </span>
        </ModalHeader>
        <ModalBody className="py-0">
          <Row
            className="align-items-center rounded"
            style={{ backgroundColor: "#F5F5FC" }}
          >
            <Col lg="6" className="px-0 ">
              <Image
                src={modalPromotion}
                alt={modalPromotion}
                className="img-fluid w-100"
                height="560px"
              />
            </Col>

            <Col lg="6">
              <Form className="px-5">
                <div className="d-flex justify-content-center  ml-20">
                  <h2
                    className="text-center font-weight-bolder mb-0"
                    style={{ color: "#5e5873", fontSize: "30px" }}
                  >
                    Đăng ký ngay
                  </h2>
                  <Image
                    src={fly}
                    alt={fly}
                    className="img-fluid"
                    width="100px"
                    height="90px"
                  />
                </div>

                <div className="mb-4">
                  <Label style={{ fontSize: 16 }}>Họ tên</Label>
                  <Input type="text" placeholder="Nhập họ tên ..." />
                </div>
                <div className="mb-4">
                  <Label style={{ fontSize: 16 }}>Điện thoại</Label>
                  <Input type="tel" placeholder="Nhập số điện thoại ..." />
                </div>
                <div className="mb-4">
                  <Label style={{ fontSize: 16 }}>Email</Label>
                  <Input type="email" placeholder="Nhập email ..." />
                </div>

                <div className="mt-10 d-flex justify-content-center align-items-center">
                  <div className="form-check cursor-pointer">
                    <input
                      className="form-check-input "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked
                      style={{ filter: " hue-rotate(240deg)" }}
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault2"
                      style={{ fontSize: 16 }}
                    >
                      Lấy mã giảm giá
                    </label>
                  </div>
                  <div className="form-check  ml-10">
                    <input
                      className="form-check-input "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      style={{ filter: " hue-rotate(240deg)" }}
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexRadioDefault1"
                      style={{ fontSize: 17 }}
                    >
                      Đăng kí mua
                    </label>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <button
            className={` ${styles.btn} rounded`}
            onClick={() => setShowModal(!showModal)}
          >
            Gửi
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalPromotion;
