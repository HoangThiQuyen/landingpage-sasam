import React from "react";
import Image from "next/image";

// Third Library
import moment from "moment";
import { CustomInput } from "reactstrap";

const PromotionCodeItem = ({ item }) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center mb-5"
      style={{ border: "1px solid #c8c8c8", padding: 6, borderRadius: 5 }}
    >
      <div className="d-flex">
        <div style={{ width: 100, marginRight: 8 }}>
          <Image src={item.image} alt="images" />
        </div>
        <div>
          <h5>{item.title}</h5>
          <p className="text-danger">
            Có hiện lực từ {moment(item.time).format("DD-MM-YYYY")}
          </p>
          <p style={{ color: "#706868" }}>
            Hạn sử dụng: <span>30/08/2021</span>
          </p>
          {/* <p className="text-danger">
          <i className="fa fa-angle-right text-danger"></i> Dùng ngay{' '}
        </p> */}
        </div>
      </div>
      <div>
        <CustomInput type="radio" id={item.id} name="customRadio" />
      </div>
    </div>
  );
};

export default PromotionCodeItem;
