import Image from "next/image";

// Image
import product1 from "../../../public/cart/product-1.jpg";

const ReceiptSteps = () => {
  return (
    <div className="mx-auto">
      <div
        className="pb-5"
        data-wizard-type="step-content"
        data-wizard-state="current"
      >
        {/*begin::Section*/}
        <h4 className="mb-10 font-weight-bold text-dark">
          Xem lại đơn và đặt hàng
        </h4>
        <h6 className="font-weight-bolder mb-3">Địa chỉ giao hàng : </h6>
        <div className="text-dark-50 line-height-lg">
          <div>350 Lê Đức Thọ Phường 6 Quận Gò Vấp</div>
        </div>
        <div className="separator separator-dashed my-5" />
        {/*end::Section*/}
        {/*begin::Section*/}
        <h6 className="font-weight-bolder mb-3">Chi tiết đơn hàng :</h6>
        <div className="text-dark-50 line-height-lg">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="pl-2 font-weight-bold text-muted text-uppercase">
                    Tên Sản Phẩm
                  </th>
                  <th className="text-right font-weight-bold text-muted text-uppercase">
                    Số lượng
                  </th>
                  <th className="text-right font-weight-bold text-muted text-uppercase">
                    Giá
                  </th>
                  <th className="text-right pr-2 font-weight-bold text-muted text-uppercase">
                    Số lượng
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-weight-boldest">
                  <td className="border-0 pl-0 pt-7 d-flex align-items-center">
                    <div
                      style={{ width: 100, height: 100 }}
                      className="borderImg"
                    >
                      <Image
                        src={product1}
                        alt="images"
                        style={{
                          borderRadius: 5,
                          marginRight: 15,
                        }}
                      />
                    </div>

                    <span style={{ width: "90%" }}>
                      LIVERSAM (Sâm giải độc gan)
                    </span>
                  </td>
                  <td className="text-right pt-7 align-middle">2</td>
                  <td className="text-right pt-7 align-middle">90000 đ</td>
                  <td className="text-primary pr-0 pt-7 text-right align-middle">
                    180000 đ
                  </td>
                </tr>
                <tr className="font-weight-boldest border-bottom-0">
                  <td className="border-top-0 pl-0 py-4 d-flex align-items-center">
                    <div
                      style={{ width: 100, height: 100 }}
                      className="borderImg"
                    >
                      <Image
                        src={product1}
                        alt="images"
                        style={{
                          borderRadius: 5,
                          marginRight: 15,
                        }}
                      />
                    </div>

                    <span style={{ width: "90%" }}>
                      SARMENTOSA IMMUNE SUPPORT (75 ml) (Bổ phế hóa đờm)
                    </span>
                  </td>
                  <td className="border-top-0 text-right py-4 align-middle">
                    1
                  </td>
                  <td className="border-top-0 text-right py-4 align-middle">
                    350000 đ
                  </td>
                  <td className="text-primary border-top-0 pr-0 py-4 text-right align-middle">
                    350000 đ
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} />
                  <td className="font-weight-bolder text-right">
                    Giá sản phẩm
                  </td>
                  <td className="font-weight-bolder text-right pr-0">
                    530000 đ
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="border-0 pt-0" />
                  <td className="border-0 pt-0 font-weight-bolder text-right">
                    Phí Giao Hàng
                  </td>
                  <td className="border-0 pt-0 font-weight-bolder text-right pr-0">
                    15000 đ
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="border-0 pt-0" />
                  <td className="border-0 pt-0 font-weight-bolder font-size-h5 text-right">
                    Tổng cộng
                  </td>
                  <td className="border-0 pt-0 font-weight-bolder font-size-h5 text-success text-right pr-0">
                    545000 đ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptSteps;
