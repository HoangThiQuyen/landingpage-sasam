import AddressStep from "../../components/checkout/payment/AddressSteps";

import PaymentStep from "../../components/checkout/payment/PaymentSteps";
import ReceiptSteps from "../../components/checkout/payment/ReceiptSteps";

import SubHeader from "../../components/checkout/payment/SubHeader";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const payment = () => {
  const [step, setStep] = useState(1);
  const MySwal = withReactContent(Swal);

  const handleSuccess = () => {
    return MySwal.fire({
      title: "Thanh toán thành công!",
      text: "Chờ nhận hàng!",
      icon: "success",
      customClass: {
        confirmButton: "btn btn-success",
      },
      buttonsStyling: false,
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="container">
      <SubHeader />
      <div className="card card-custom card-transparent">
        <div className="card-body p-0">
          {/*begin: Wizard*/}
          <div
            className="wizard wizard-4"
            // id="kt_wizard"
            data-wizard-state={
              step === 1 ? "first" : step === 2 ? "between" : "last"
            }
            data-wizard-clickable="false"
          >
            {/*begin: Wizard Nav*/}
            <div className="wizard-nav">
              <div className="wizard-steps" data-total-steps={3}>
                {/*begin::Wizard Step 1 Nav*/}
                <div
                  className="wizard-step cursor-pointer"
                  data-wizard-type="step"
                  data-wizard-state={
                    step === 1 ? "current" : step > 1 ? "done" : "pending"
                  }
                  onClick={() => setStep(1)}
                >
                  <div className="wizard-wrapper">
                    <div className="wizard-number">1</div>
                    <div className="wizard-label">
                      <div className="wizard-title">Địa chỉ</div>
                      <div className="wizard-desc">Địa chỉ nhận hàng</div>
                    </div>
                  </div>
                </div>
                {/*end::Wizard Step 1 Nav*/}
                {/*begin::Wizard Step 2 Nav*/}
                <div
                  onClick={() => setStep(2)}
                  className="wizard-step cursor-pointer"
                  data-wizard-type="step"
                  data-wizard-state={
                    step === 2 ? "current" : step > 2 ? "done" : "pending"
                  }
                >
                  <div className="wizard-wrapper">
                    <div className="wizard-number">2</div>
                    <div className="wizard-label">
                      <div className="wizard-title">Thanh Toán</div>
                      <div className="wizard-desc">Phương thức thanh toán</div>
                    </div>
                  </div>
                </div>
                {/*end::Wizard Step 2 Nav*/}
                {/*begin::Wizard Step 3 Nav*/}
                <div
                  onClick={() => setStep(3)}
                  className="wizard-step cursor-pointer"
                  data-wizard-type="step"
                  data-wizard-state={
                    step === 3 ? "current" : step > 3 ? "done" : "pending"
                  }
                >
                  <div className="wizard-wrapper">
                    <div className="wizard-number">3</div>
                    <div className="wizard-label">
                      <div className="wizard-title">Hóa Đơn</div>
                      <div className="wizard-desc">Chi tiết hóa đơn</div>
                    </div>
                  </div>
                </div>
                {/*end::Wizard Step 3 Nav*/}
              </div>
            </div>
            {/*end: Wizard Nav*/}
            {/*begin: Wizard Body*/}
            <div className="card card-custom card-shadowless rounded-top-0">
              <div className="card-body p-0">
                <div className="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
                  <div className="col-xl-12 ">
                    {/*begin: Wizard Form*/}
                    <form className="form " id="kt_form">
                      {/*begin: Wizard Step 1*/}
                      <div
                        className="pb-5"
                        data-wizard-type={step !== 1 ? "step-content" : ""}
                      >
                        <AddressStep />
                      </div>

                      {/*end: Wizard Step 1*/}
                      {/*begin: Wizard Step 2*/}
                      <div
                        className="pb-5"
                        data-wizard-type={step !== 2 ? "step-content" : ""}
                      >
                        <PaymentStep />
                      </div>
                      {/*end: Wizard Step 2*/}
                      {/*begin: Wizard Step 3*/}
                      <div
                        className="pb-5"
                        data-wizard-type={step !== 3 ? "step-content" : ""}
                      >
                        <ReceiptSteps />
                      </div>
                      {/*end: Wizard Step 3*/}
                      {/*begin: Wizard Actions*/}

                      <div className="d-flex justify-content-between border-top mt-10 pt-10">
                        <div className="mr-2">
                          <button
                            onClick={() => setStep(step - 1)}
                            type="button"
                            className="btn btn-light-primary font-weight-bolder text-uppercase px-9 py-4"
                            data-wizard-type="action-prev"
                          >
                            Previous
                          </button>
                        </div>

                        <div>
                          <button
                            type="button"
                            className="btn btn-danger font-weight-bolder text-uppercase px-9 py-4"
                            data-wizard-type="action-submit"
                            onClick={handleSuccess}
                          >
                            Submit
                          </button>

                          <button
                            onClick={() => setStep(step + 1)}
                            type="button"
                            className="btn btn-primary font-weight-bolder text-uppercase px-9 py-4"
                            data-wizard-type="action-next"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                      {/*end: Wizard Actions*/}
                    </form>
                    {/*end: Wizard Form*/}
                  </div>
                </div>
              </div>
            </div>
            {/*end: Wizard Bpdy*/}
          </div>
          {/*end: Wizard*/}
        </div>
      </div>
    </div>
  );
};

export default payment;
