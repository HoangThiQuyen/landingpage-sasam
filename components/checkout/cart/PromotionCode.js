import React from "react";

// *** Third Library
import { Alert } from "reactstrap";

// *** Components
import PromotionCodeItem from "./PromotionCodeItem";

// *** Images
import free from "../../../public/cart/free.png";

const PromotionCode = () => {
  const listPromotionCode = [
    {
      id: 1,
      image: free,
      title: "Miễn phí vận chuyển",
      time: new Date(),
    },
    {
      id: 2,
      image: free,
      title: "Miễn phí vận chuyển",
      time: new Date(),
    },
  ];
  return (
    <div>
      <h5 className="mb-5">Chọn mã khuyến mãi</h5>
      {listPromotionCode.length > 0 ? (
        listPromotionCode.map((item) => (
          <PromotionCodeItem key={item.id} item={item} />
        ))
      ) : (
        <Alert color="primary">
          <div className="alert-body">Không có mã giảm giá</div>
        </Alert>
      )}
    </div>
  );
};

export default PromotionCode;
