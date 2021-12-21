import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "reactstrap";
import ModalPromotion from "./ModalPromotion";

const ShoppingCard = () => {
  const history = useRouter();
  const [modalPromotion, setModalPromotion] = useState(false);
  const [listProduct, setListProduct] = useState([
    {
      id: 1,
      quatity: 1,
      price: 180000,
      image:
        "https://product.hstatic.net/1000347556/product/fb3afdd74ae0b0bee9f1_1beb159112f3405da58149c3e53dd9d0_large.jpg",
      name: "BRONSAM (Sâm bổ phế)",
    },
    {
      id: 2,
      quatity: 1,
      price: 400000,
      image:
        "https://product.hstatic.net/1000347556/product/sasamviet_-_sulinsam_1eb7ed858b9d4f6a80e04b99b7579d7e_large.jpg",
      name: "SULISAM (Sâm đường huyết)",
    },
  ]);
  const updateQuantityProduct = (idx, status) => {
    let update = [...listProduct];
    if (status === "increse") {
      update[idx].quatity += 1;
    } else {
      update[idx].quatity -= 1;
    }
    setListProduct(update);
  };

  const total = listProduct.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quatity * currentValue.price;
  }, 0);

  return (
    <div>
      {/*begin::Section*/}
      <div className="card card-custom gutter-b">
        {/*begin::Header*/}
        <div className="card-header flex-wrap border-0 pt-6 pb-0">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder font-size-h3 text-dark">
              Giỏ Hàng
            </span>
          </h3>
          <div className="card-toolbar">
            <div className="dropdown dropdown-inline">
              <p
                className="btn btn-primary font-weight-bolder font-size-sm"
                onClick={() => history.push("/gian-hang")}
              >
                Tiếp tục mua sắm
              </p>
            </div>
          </div>
        </div>
        {/*end::Header*/}
        <div className="card-body">
          {/*begin::Shopping Cart*/}
          <div className="table-responsive">
            <table className="table">
              {/*begin::Cart Header*/}
              <thead>
                <tr>
                  <th>Product</th>
                  <th className="text-center">Qty</th>
                  <th className="text-right">Price</th>
                  <th />
                </tr>
              </thead>
              {/*end::Cart Header*/}
              <tbody>
                {listProduct.map((item, idx) => (
                  <tr key={item.id}>
                    <td className="d-flex align-items-center font-weight-bolder">
                      <img
                        src={item.image}
                        alt="images"
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: 4,
                          marginRight: 10,
                        }}
                      />
                      <p className="text-dark text-hover-primary cursor-pointer mb-0 min-w-300px  ">
                        {item.name}
                      </p>
                    </td>
                    <td className="text-center align-middle min-w-140px">
                      <p
                        style={{
                          backgroundColor: item.quatity <= 1 && "#DDDDDD",
                        }}
                        className="btn btn-xs btn-light-success btn-icon mr-2 mb-0"
                        onClick={() => {
                          if (item.quatity > 1) {
                            updateQuantityProduct(idx, "down");
                          }
                        }}
                      >
                        {/* <i className="fa fa-minus"></i> */}
                        <span style={{ fontSize: 30 }}>-</span>
                      </p>
                      <span className="mr-2 font-weight-bolder ">
                        {item.quatity}
                      </span>
                      <p
                        className="btn btn-xs btn-light-success btn-icon mb-0"
                        onClick={() => updateQuantityProduct(idx, "increse")}
                      >
                        {/* <i className="fa fa-plus"></i> */}
                        <span style={{ fontSize: 20 }}> + </span>
                      </p>
                    </td>
                    <td className="text-right align-middle  font-size-h5">
                      {item.price}đ
                    </td>
                    <td className="text-right align-middle">
                      <p className="btn btn-danger font-weight-bolder font-size-sm">
                        Remove
                      </p>
                    </td>
                  </tr>
                ))}

                {/*begin::Cart Footer*/}
                <tr>
                  <td colSpan={2} />
                  <td className="font-weight-bolder font-size-h4 text-right">
                    Subtotal
                  </td>
                  <td className="font-weight-bolder font-size-h4 text-right">
                    {total} đ
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={4}
                    className="border-0 text-muted text-right pt-0"
                  >
                    Excludes Delivery. GST Included
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <form>
                      <div className="form-group row">
                        <div className="col-md-3 d-flex align-items-center">
                          <label className="font-weight-bolder">
                            Mã giảm giá
                          </label>
                        </div>
                        <div className="col-md-7">
                          <div className="input-group w-100">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mã giảm giá ..."
                            />
                            <Button
                              color="success"
                              onClick={() => setModalPromotion(!modalPromotion)}
                            >
                              Chọn
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </td>
                  <td colSpan={2} className="border-0 text-right pt-10">
                    <p
                      className="btn btn-success font-weight-bolder px-8"
                      onClick={() => history.push("/my-cart/payment")}
                    >
                      Tiến hành thanh toán
                    </p>
                  </td>
                </tr>
                {/*end::Cart Footer*/}
              </tbody>
            </table>
          </div>
          {/*end::Shopping Cart*/}
        </div>
      </div>
      {/*end::Section*/}
      <ModalPromotion
        modalPromotion={modalPromotion}
        setModalPromotion={setModalPromotion}
      />
    </div>
  );
};

export default ShoppingCard;
