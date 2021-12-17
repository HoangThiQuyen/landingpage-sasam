import React from "react";
import styles from "../styles/Achievement.module.css";
import { Chrono } from "react-chrono";
import Image from "next/image";
import image1 from "../public/image/nat-1.jpg";
import image2 from "../public/image/nat-2.jpg";
import image3 from "../public/image/nat-3.jpg";
import Head from "next/head";

export default function Achievement() {
  const items = [
    {
      title: "2021",
      // cardTitle: "Thành tựu",
      cardDetailedText: [
        "Giấy xác nhận kết quả thực hiện nhiệm vụ khoa học & công nghệ không sử dụng ngân sách nhà nước",
        "Cty CP Sa Sâm Việt đã có thành tích nổi bật trong phát triển doanh nghiệp và đóng góp tích cực vào sự phát triển kinh tế - xã hội của TP Bến Tre do Chủ tịch UBND TP Bến Tre khen tặng",
        "Đạt Top 10 thương hiệu tín nhiệm 2018",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
          src: image1,
        },
      },
    },
    {
      title: "2020",
      // cardTitle: "Thành tựu",
      cardDetailedText: [
        "Á quân dự án khởi nghiệp ứng dụng khoa học công nghiệp phát triển tài nguyên bản địa quốc gia năm 2021",
        "Chung kết, Techfest quốc tế 2018 tại Đà Nẵng",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: "https://source.unsplash.com/zh7GEuORbUw/600x799",
          src: image2,
        },
      },
    },
    {
      title: "2019",
      // cardTitle: "Thành tựu",

      cardDetailedText: [
        "Giấy xác nhận kết quả thực hiện nhiệm vụ khoa học & công nghệ không sử dụng ngân sách nhà nước",
        "Cty CP Sa Sâm Việt đã có thành tích nổi bật trong phát triển doanh nghiệp và đóng góp tích cực vào sự phát triển kinh tế - xã hội của TP Bến Tre do Chủ tịch UBND TP Bến Tre khen tặng",
        "Đạt Top 10 thương hiệu tín nhiệm 2018",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
          src: image3,
        },
      },
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Thành tựu nổi bật</h2>
      <div className="container-md">
        <div className="d-none d-md-block">
          <Chrono
            items={items}
            mode="VERTICAL"
            hideControls={true}
            scrollable={false}
          />
        </div>
        <div className="d-block d-md-none">
          <div className="row">
            {items.map((ele, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card p-3 mb-4">
                  <h4
                    className="text-center mb-4 w-50 mx-auto py-1 rounded "
                    style={{ background: "#ffdf00", color: "#0f52ba" }}
                  >
                    {ele.title}
                  </h4>

                  <div className="text-center mb-4">
                    <Image
                      src={ele.media.source.src}
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <ul>
                    {ele.cardDetailedText.map((item, idex) => (
                      <li key={idex} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
