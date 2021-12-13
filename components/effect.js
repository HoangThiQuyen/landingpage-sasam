import React from "react";
import styles from "../styles/Effect.module.css";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import shapeImg from "../public/image/effect-shape.png";
import effect1 from "../public/image/effect1.png";
import effect2 from "../public/image/effect2.png";
import effect3 from "../public/image/effect3.png";
import effect4 from "../public/image/effect4.png";

export default function Effect() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  const data = [
    {
      id: 1,
      title:
        "Immun Support có tác dụng giữ ẩm vòm họng, dinh dưỡng tế bào. Tăng cường thải độc giúp thanh lọc, làm sạc tế bào. Sửa chữa ngay tại chỗ các tổn thương, thúc đẩy tái tạo niêm mạc",
      img: effect1,
    },
    {
      id: 2,
      title:
        "Hoạt hóa hệ thống, hạch bạch huyết, kích hoạt tế bào miễn dịch, tăng cường khả năng thực bào, tăng cường khả năng miễn dịch",
      img: effect2,
    },
    {
      id: 3,
      title:
        "Làm giảm tính thấm của mao mạch, kháng histamin và làm giảm phản ứng của tế bào đối với các kích thích, hỗ trợ dị ứng tại chỗ vùng hầu - họng",
      img: effect3,
    },
    {
      id: 4,
      title:
        "Chống oxy hóa, giúp tế bào niêm mạc vùng hầu - họng tự bảo vệ, chống lại các gốc tự do phát sinh bởi ô nhiễm môi trường",
      img: effect4,
    },
  ];

  return (
    <div className={`effect ${styles.bg}`}>
      <div className={styles.overlay}></div>
      <div className={styles.effectItem}>
        <Carousel
          breakPoints={breakPoints}
          enableSwipe={false}
          enableMouseSwipe={false}
        >
          {data.map((ele) => (
            <div key={ele.id} className="text-center">
              <Image src={ele.img} alt="imgs" width={100} height={100} />
              <p>{ele.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.shape1}>
        <Image src={shapeImg} alt="Imgshape" />
      </div>
      <div className={styles.shape2}>
        <Image src={shapeImg} alt="Imgshape" />
      </div>
    </div>
  );
}
