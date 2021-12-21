import React from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import newImg from "../public/image/new.jpg";
import styles from "../styles/News.module.css";

SwiperCore.use([Pagination, Navigation]);
export default function News() {
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
      title: "Phát hiện nhiều hợp chất quý giá trong Sa Sâm Việt Nam",
      content:
        'Tại hội thảo "cây sa sâm việt Dược liệu quý của Việt Nam" do Hội giáo dục chăm sóc sức khỏe cộng đồng ',
    },
    {
      id: 2,
      title: "Phát hiện nhiều hợp chất quý giá trong Sa Sâm Việt Nam",
      content:
        'Tại hội thảo "cây sa sâm việt Dược liệu quý của Việt Nam" do Hội giáo dục chăm sóc sức khỏe cộng đồng ',
    },
    {
      id: 3,
      title: "Phát hiện nhiều hợp chất quý giá trong Sa Sâm Việt Nam",
      content:
        'Tại hội thảo "cây sa sâm việt Dược liệu quý của Việt Nam" do Hội giáo dục chăm sóc sức khỏe cộng đồng ',
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Tin tức nổi bật</h2>
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-md-6 mb-5 mb-lg-0">
            <Swiper {...params} className="mySwiper">
              {data.map((ele) => (
                <SwiperSlide key={ele.id} className={styles.newItem}>
                  <div className="card ">
                    <Image
                      src={newImg}
                      className="card-img-top"
                      alt="..."
                      height={400}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{ele.title}</h5>
                      <p className="card-text">{ele.content}</p>
                      <button type="button" className={`btn ${styles.btn}`}>
                        Xem thêm
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-md-6">
            <div className={styles.news}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=via1I_OTnIU&ab_channel=SaS%C3%A2mVi%E1%BB%87t"
                className="react-player-video  rounded overflow-hidden"
                width="100%"
                height={350}
                controls={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
