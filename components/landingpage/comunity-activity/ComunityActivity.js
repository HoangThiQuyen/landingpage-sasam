import React from "react";
import Image from "next/image";

//image
import img1 from "../../../public/image/01.jpg";
import img2 from "../../../public/image/02.jpg";
import img3 from "../../../public/image/03.jpg";

// Third Library
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination, Navigation } from "swiper";
import moment from "moment";

// Component
import CarouselComponent from "../carousel-component/Carousel";

//css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ComunityActivity.module.css";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function ComunityActivity() {
  SwiperCore.use([EffectCube, Pagination, Navigation]);

  const data = [
    {
      id: 1,
      title: "Tiêu đề hoạt động cộng đồng 1",
      date: new Date(),
      images: [
        {
          src: img1,
          id: 1,
        },
        {
          src: img2,
          id: 2,
        },
        {
          src: img3,
          id: 3,
        },
      ],
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "Tiêu đề hoạt động cộng đồng 2",
      date: new Date(),
      images: [
        {
          src: img1,
          id: 1,
        },
        {
          src: img2,
          id: 2,
        },
        {
          src: img3,
          id: 3,
        },
      ],
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      title: "Tiêu đề hoạt động cộng đồng 3",
      date: new Date(),
      images: [
        {
          src: img1,
          id: 1,
        },
        {
          src: img2,
          id: 2,
        },
        {
          src: img3,
          id: 3,
        },
      ],
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      title: "Tiêu đề hoạt động cộng đồng 4",
      date: new Date(),
      images: [
        {
          src: img1,
          id: 1,
        },
        {
          src: img2,
          id: 2,
        },
        {
          src: img3,
          id: 3,
        },
      ],
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 5,
      title: "Tiêu đề hoạt động cộng đồng 5",
      date: new Date(),
      images: [
        {
          src: img1,
          id: 1,
        },
        {
          src: img2,
          id: 2,
        },
        {
          src: img3,
          id: 3,
        },
      ],
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
  };

  return (
    <div>
      <h2 className={styles.title}>Hoạt động cộng đồng</h2>
      <div className="container-md">
        <Swiper {...params}>
          {data.map((ele) => (
            <SwiperSlide key={ele.id}>
              <Card>
                <CarouselComponent data={ele.images} />
                <CardBody>
                  <p style={{ fontSize: 16 }}>
                    {moment(ele.date).format("DD/MM/YYYY - HH:MM:ss")}
                  </p>
                  <CardTitle
                    tag="h4"
                    className="text-hover-primary cursor-pointer"
                    style={{ fontSize: 19 }}
                  >
                    {ele.title}
                  </CardTitle>
                  <CardText style={{ marginBottom: 20, fontSize: 16 }}>
                    {ele.description}
                  </CardText>
                  <button type="button" className={`btn ${styles.btn}`}>
                    Xem thêm
                  </button>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
