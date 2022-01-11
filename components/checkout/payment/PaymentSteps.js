import { useState } from "react";

// Third Library
import { Row, Col, CustomInput } from "reactstrap";

const PersonalInfo = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="mx-auto">
      <Row>
        <Col md="5">
          <h4 className="mb-10 font-weight-bold text-dark">
            Chọn phương thức thanh toán
          </h4>

          <div>
            <div className="mb-3">
              <CustomInput
                defaultChecked
                id="radio1"
                type="radio"
                label="Thanh toán tiền mặt khi nhận hàng"
                name="paymentMethod"
                onClick={() => setShowCard(false)}
              />
            </div>
            <div className="mb-3">
              <CustomInput
                id="radio2"
                type="radio"
                label="Thanh toán bằng ví momo"
                name="paymentMethod"
                onClick={() => setShowCard(false)}
              />
            </div>

            <div className="mb-3">
              <CustomInput
                id="radio3"
                type="radio"
                label="Thanh toán bằng thẻ ATM/Internet Banking"
                name="paymentMethod"
                onClick={() => setShowCard(true)}
              />
            </div>
            <div className="mb-3">
              <CustomInput
                id="radio4"
                type="radio"
                label="Thanh toán bằng điểm tích lũy"
                name="paymentMethod"
                onClick={() => setShowCard(false)}
              />
            </div>
            <div className="mb-3">
              <CustomInput
                id="radio5"
                type="radio"
                label="Thanh toán bằng thẻ quốc tế Visa, Master, JCB"
                name="paymentMethod"
                onClick={() => setShowCard(true)}
              />
            </div>
          </div>
        </Col>
        {showCard && (
          <Col md="7">
            <div
              className="pb-5"
              data-wizard-type="step-content"
              data-wizard-state="current"
            >
              <h4 className="mb-10 font-weight-bold text-dark">
                Nhập chi tiết thanh toán của bạn
              </h4>
              <div className="row">
                <div className="col-xl-6">
                  {/*begin::Input*/}
                  <div className="form-group fv-plugins-icon-container">
                    <label>Name on Card</label>
                    <input
                      type="text"
                      className="form-control form-control-solid form-control-lg"
                      name="ccname"
                      placeholder="Card Name"
                      defaultValue="John Wick"
                    />
                    <span className="form-text text-muted">
                      Please enter your Card Name.
                    </span>
                    <div className="fv-plugins-message-container" />
                  </div>
                  {/*end::Input*/}
                </div>
                <div className="col-xl-6">
                  {/*begin::Input*/}
                  <div className="form-group fv-plugins-icon-container">
                    <label>Card Number</label>
                    <input
                      type="text"
                      className="form-control form-control-solid form-control-lg"
                      name="ccnumber"
                      placeholder="Card Number"
                      defaultValue="4444 3333 2222 1111"
                    />
                    <span className="form-text text-muted">
                      Please enter your Address.
                    </span>
                    <div className="fv-plugins-message-container" />
                  </div>
                  {/*end::Input*/}
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4">
                  {/*begin::Input*/}
                  <div className="form-group fv-plugins-icon-container">
                    <label>Card Expiry Month</label>
                    <input
                      type="number"
                      className="form-control form-control-solid form-control-lg"
                      name="ccmonth"
                      placeholder="Card Expiry Month"
                      defaultValue={1}
                    />
                    <span className="form-text text-muted">
                      Please enter your Card Expiry Month.
                    </span>
                    <div className="fv-plugins-message-container" />
                  </div>
                  {/*end::Input*/}
                </div>
                <div className="col-xl-4">
                  {/*begin::Input*/}
                  <div className="form-group fv-plugins-icon-container">
                    <label>Card Expiry Year</label>
                    <input
                      type="number"
                      className="form-control form-control-solid form-control-lg"
                      name="ccyear"
                      placeholder="Card Expire Year"
                      defaultValue={21}
                    />
                    <span className="form-text text-muted">
                      Please enter your Card Expiry Year.
                    </span>
                    <div className="fv-plugins-message-container" />
                  </div>
                  {/*end::Input*/}
                </div>
                <div className="col-xl-4">
                  {/*begin::Input*/}
                  <div className="form-group fv-plugins-icon-container">
                    <label>Card CVV Number</label>
                    <input
                      type="password"
                      className="form-control form-control-solid form-control-lg"
                      name="cccvv"
                      placeholder="Card CVV Number"
                      defaultValue={123}
                    />
                    <span className="form-text text-muted">
                      Please enter your Card CVV Number.
                    </span>
                    <div className="fv-plugins-message-container" />
                  </div>
                  {/*end::Input*/}
                </div>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default PersonalInfo;
