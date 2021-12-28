import React, { useState } from "react";
import Image from "next/image";

// css
import styles from "./Promotion.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//image
import newImg from "../../../public/image/new.jpg";
import promotion1 from "../../../public/image/promotion1.png";
import promotion2 from "../../../public/image/promotion2.png";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import ModalPromotion from "./ModalPromotion";

SwiperCore.use([Pagination, Navigation]);
export default function Promotion() {
  const params = {
    // centeredSlides: true,
    // scrollbar: { draggable: true },
    height: 200,
    slidesPerView: 2,
    // showsPagination: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      clickable: true,
    },
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };
  const data = [
    {
      id: 1,
      title: "Mùa giáng sinh mua Sarmentosa immune giảm 30% ",
      content: "Chương trình diễn ra đến 31/12/2021",
      img: promotion1,
    },
    {
      id: 2,
      title: "Ưu đãi MASTERCARD lên đến 3 triệu đồng",
      content: "Chương trình diễn ra đến 29/12/2021",
      img: promotion2,
    },
    {
      id: 3,
      title: "Rộn ràng mùa lễ hội - Quà tặng lên đến 10%",
      content: "Chương trình diễn ra đến 01/01/2021",
      img: promotion1,
    },
    {
      id: 4,
      title: "Sale đậm cuối năm thả ga mua sắm",
      content: "Chương trình diễn ra đến 31/12/2021",
      img: promotion1,
    },
    {
      id: 5,
      title: "Ưu đãi thanh toán VNPAY lên đến 2 triệu đồng",
      content: "Chương trình diễn ra đến 29/12/2021",
      img: promotion1,
    },
  ];
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h2 className={styles.title}>Khuyến mãi mới</h2>
      <div className="container">
        <div>
          <Swiper {...params} className="mySwiper">
            {data.map((ele) => (
              <SwiperSlide key={ele.id} className={styles.newItem}>
                <div className="card ">
                  <Image
                    src={ele.img}
                    className="card-img-top"
                    alt="img-promotion"
                    height={400}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title mb-1 font-weight-bolder"
                      style={{ textTransform: "uppercase" }}
                    >
                      {ele.title}
                    </h5>
                    <p className="card-text mb-2">{ele.content}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setShowModal(true)}
                    >
                      Đăng ký ngay
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ModalPromotion showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
