import Image from "next/image";

const NewProducts = ({ listNewProduct }) => {
  return (
    <div>
      <div className="card card-custom gutter-b">
        {/*begin::Header*/}
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column mb-5">
            <span className="card-label font-weight-bolder text-dark mb-1">
              Sản phẩm mới
            </span>
          </h3>
        </div>

        {/*end::Header*/}
        {listNewProduct.map((item) => (
          <div
            className="card-body pt-2"
            key={item.id}
            style={{ paddingBottom: 4 }}
          >
            <div className="d-flex mb-4">
              <div className="symbol symbol-50 symbol-2by3 flex-shrink-0 mr-4">
                <div style={{ width: 100 }} className="borderImg">
                  <Image
                    src={item.image}
                    alt="images"
                    style={{
                      marginBottom: 15,
                    }}
                  />
                  {/* <p className="btn btn-light-primary font-weight-bolder py-2 font-size-sm">
                    View
                  </p> */}
                </div>
              </div>
              <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                <p className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-2 cursor-pointer">
                  Darius the Great
                </p>
                <span
                  className="text-muted font-weight-bold font-size-sm mb-2 "
                  style={{
                    display: "block",
                    textOverflow: "ellipsis",
                    wordWrap: "break-word",
                    overflow: "hidden",
                    maxHeight: "3.6em",
                    lineHeight: "1.8em",
                  }}
                >
                  All it takes tank credibility is one glaring error All it
                  takes tank credibility is one glaring error All it takes tank
                  credibility is one glaring error All it takes tank credibility
                  is one glaring error ...
                </span>

                <span className="text-muted font-weight-bold font-size-lg">
                  Giá:
                  <span
                    className="font-weight-bold"
                    style={{ color: "#6a5757" }}
                  >
                    {item.price} đ
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
        {/*end::Body*/}
        <div className="text-center">
          <p className="btn btn-light-primary btn-sm font-weight-bolder">
            Xem tất cả
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
