import React from "react";

// Image
import image1 from "../../../public/image/nat-1.jpg";
import image2 from "../../../public/image/nat-2.jpg";
import image3 from "../../../public/image/nat-3.jpg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination, Navigation } from "swiper";

// Css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Achievement.module.css";

// Components
import CarouselComponent from "../carousel-component/Carousel";

export default function Achievement() {
  SwiperCore.use([EffectCube, Pagination, Navigation]);

  const data = [
    {
      id: 1,
      images: [
        {
          src: image1,
          id: 1,
        },
        {
          src: image2,
          id: 2,
        },
        {
          src: image3,
          id: 3,
        },
      ],
      title: "Đây là tiêu đề của thành tựu nổi bần bật",
      description:
        "  Công ty CP Sa Sâm Việt đã có thành tựu nổi bật trong phát triển doanh nghiệp và đóng góp tích cực vào sự phát triển kinh tế - xã hội của TP Bến Tre",
      year: 2022,
    },
    {
      id: 2,
      images: [
        {
          src: image2,
          id: 1,
        },
        {
          src: image3,
          id: 2,
        },
        {
          src: image1,
          id: 3,
        },
      ],
      title: "Đây là tiêu đề của thành tựu nổi bần bật",
      description:
        "  Công ty CP Sa Sâm Việt đã có thành tựu nổi bật trong phát triển doanh nghiệp và đóng góp tích cực vào sự phát triển kinh tế - xã hội của TP Bến Tre",
      year: 2021,
    },
    {
      id: 3,
      images: [
        {
          src: image2,
          id: 1,
        },
        {
          src: image3,
          id: 2,
        },
        {
          src: image1,
          id: 3,
        },
      ],
      title: "Đây là tiêu đề của thành tựu nổi bần bật",
      description:
        "  Công ty CP Sa Sâm Việt đã có thành tựu nổi bật trong phát triển doanh nghiệp và đóng góp tích cực vào sự phát triển kinh tế - xã hội của TP Bến Tre",
      year: 2020,
    },
  ];

  const params = {
    navigation: true,
    pagination: {
      type: "progressbar",
    },
    slidesPerView: 2,
    spaceBetween: 10,
  };

  return (
    <div>
      <h2 className={styles.title}>Thành tựu nổi bật</h2>
      <div className="container-md">
        <Swiper {...params} className="mySwiper">
          {data.map((ele) => (
            <SwiperSlide key={ele.id}>
              <div
                style={{
                  padding: 30,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{ width: 550, heigh: 300 }}
                  className="customCarousel"
                >
                  <CarouselComponent data={ele.images} />
                </div>
                <div className="mt-10">
                  <h4
                    className="text-center cursor-pointer"
                    style={{ fontSize: 22, color: "#1eac52" }}
                  >
                    {ele.title}
                  </h4>
                  <p
                    className="w-75 mx-auto text-center"
                    style={{ fontSize: 17, lineHeight: "30px" }}
                  >
                    {ele.description}
                  </p>
                </div>
                <h1 className={styles.achievementsTitle}>{ele.year}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
