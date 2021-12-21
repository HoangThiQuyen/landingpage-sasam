import { useState } from "react";
import { Plus } from "react-feather";
import AddressItem from "./AddressItem";
import ModalAddAddress from "./ModalAddAddress";

const AccountDetails = () => {
  const listAddress = [
    {
      id: 1,
      fullname: "Nguyễn Khắc Vũ",
      phone: "0399652356",
      address: "145 Ngô Gia Tự Thành phố Phan Rang - Tháp Chàm Tỉnh Ninh Thuận",
      default: true,
    },
    {
      id: 2,
      fullname: "Khắc Vũ",
      phone: "0399652356",
      address: "350 Lê Đức Thọ Phường 6 Quận Gò Vấp",
      default: false,
    },
  ];
  const [modalAddress, setModalAddress] = useState(false);

  const handleModal = () => setModalAddress(!modalAddress);

  return (
    <div className="mx-auto">
      <h5 style={{ textAlign: "right" }}>Địa chỉ nhận hàng</h5>
      <div className="text-right">
        <button type="button" className="btn btn-success">
          <Plus size={14} />{" "}
          <span style={{ fontSize: 12 }} onClick={handleModal}>
            Thêm dịa chỉ mới
          </span>
        </button>
      </div>
      <div style={{ marginTop: 20 }}>
        {listAddress.map((item) => (
          <AddressItem item={item} key={item.id} handleModal={handleModal} />
        ))}
      </div>
      <ModalAddAddress modalAddress={modalAddress} handleModal={handleModal} />
    </div>
  );
};

export default AccountDetails;
