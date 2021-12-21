import React from "react";
import { Edit, Trash2 } from "react-feather";
import { Badge } from "reactstrap";

const AddressItem = ({ item, handleModal }) => {
  return (
    <div
      style={{
        lineHeight: "25px",
      }}
    >
      <hr
        style={{
          height: "0.05px",
          backgroundColor: "#C8C8C8",

          margin: "0 auto",
        }}
      />
      <div style={{ marginTop: 10 }}>
        <span style={{ marginRight: 10 }}>Họ và tên</span>
        <span>{item.fullname}</span>
      </div>
      <div>
        <span style={{ marginRight: 10 }}>Số điện thoại: </span>
        <span>{item.phone}</span>
      </div>
      <div style={{ marginBottom: 10 }}>
        <span style={{ marginRight: 10 }}>Địa chỉ: </span>
        <span>{item.address}</span>
      </div>
      {item.default ? (
        <div style={{ marginBottom: 20 }}>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ marginBottom: 20 }}
          >
            <Badge
              color="warning"
              className="badge-glow"
              style={{ color: "white" }}
            >
              Mặc định
            </Badge>{" "}
            <div>
              <Edit
                className="cursor-pointer text-info "
                style={{ fontSize: 19 }}
                onClick={handleModal}
              />
              <Trash2
                className="cursor-pointer text-danger ml-2"
                style={{ fontSize: 19 }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginBottom: 20 }}
        >
          <button className="btn btn-danger mr-2">Thiết lập mặc định</button>
          <div>
            <Edit
              className="cursor-pointer text-info "
              style={{ fontSize: 19 }}
              onClick={handleModal}
            />
            <Trash2
              className="cursor-pointer text-danger ml-2"
              style={{ fontSize: 19 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressItem;
