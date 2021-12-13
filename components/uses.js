import React from "react";

import usesImg1 from "../public/image/uses1.png";
import usesImg2 from "../public/image/uses2.png";
import usesImg3 from "../public/image/uses3.png";
import usesImg4 from "../public/image/uses4.png";

import Carousel from "react-elastic-carousel";

// *** Component
import UsesItem from "./uses-item";

import styles from "../styles/Uses.module.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
export default function Uses() {
  const data = [
    {
      id: 1,
      img: usesImg1,
      title: "Dứt điểm ho gió, ho khan",
    },
    {
      id: 2,
      img: usesImg2,
      title: "Xịt họng, kháng khuẩn",
    },
    {
      id: 3,
      img: usesImg3,
      title: "Giảm viêm, ngăn ngừa virus",
    },
    {
      id: 4,
      img: usesImg4,
      title: "Bổ phế hóa đờm",
    },
  ];
  return (
    <div className="carousel-wrapper">
      <h2 className={styles.title}>Công dụng</h2>
      <div className="container">
        <Carousel
          breakPoints={breakPoints}
          enableSwipe={false}
          enableMouseSwipe={false}
        >
          {data.map((ele) => (
            <UsesItem key={ele.id} item={ele} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
