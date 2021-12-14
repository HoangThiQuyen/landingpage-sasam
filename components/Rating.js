import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import SwiperCore, { Pagination } from "swiper";

// css
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/Rating.module.css";
import Image from "next/image";

//images
import iconUser from "../public/image/icon_user.png";
import starNone from "../public/image/star_none.png";
import starYellow from "../public/image/star_yellow.png";
import quotation from "../public/image/quotation.png";
import circleIcon from "../public/image/circle_icon.png";
import iconAnimation from "../public/image/icon_animation.png";

SwiperCore.use([Pagination]);

export default function Rating() {
  const params = {
    direction: "vertical",
    centeredSlides: "center",
    height: 350,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
  };
  return (
    <div className={styles.ratingSession}>
      <div className={styles.circleIcon}>
        <Image src={circleIcon} alt="circleIcon" />
      </div>
      <div className={styles.iconAnimation}>
        <Image src={iconAnimation} alt="iconAnimation" />
      </div>

      <h1 className={styles.title}>Người dùng đánh giá</h1>
      <div className="container ">
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=r7XLUXQLZWY&ab_channel=SaS%C3%A2mVi%E1%BB%87t"
              className="react-player-video my-2 rounded overflow-hidden"
              width="100%"
              height={400}
              controls={true}
            />
          </div>
          <div className="col-6">
            <Swiper {...params} className={styles.swiperRating}>
              {new Array(4).fill(
                <SwiperSlide className={styles.ratingItem}>
                  <div>
                    <div className={styles.quotation}>
                      <Image src={quotation} alt="quotation" />
                    </div>
                    <div className="d-flex align-items-center">
                      <div className={styles.avatar}>
                        <Image
                          src={iconUser}
                          alt="iconUser"
                          width="50"
                          height="50"
                        />
                      </div>
                      <div>
                        <h4 className={styles.nameUser}>Dương Trọng Hải</h4>
                        <div className={styles.star}>
                          <Image
                            src={starYellow}
                            alt="starYellow"
                            width="20"
                            height="20"
                          />
                          <Image
                            src={starYellow}
                            alt="starYellow"
                            width="20"
                            height="20"
                          />
                          <Image
                            src={starYellow}
                            alt="starYellow"
                            width="20"
                            height="20"
                          />
                          <Image
                            src={starYellow}
                            alt="starYellow"
                            width="20"
                            height="20"
                          />
                          <Image
                            src={starNone}
                            alt="starNone"
                            width="20"
                            height="20"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
