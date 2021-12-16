import React from "react";
import styles from "../styles/Achievement.module.css";
import { Chrono } from "react-chrono";

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
        },
      },
    },
    // {
    //   title: "2018",
    //   // cardTitle: "Thành tựu",

    //   cardDetailedText: [
    //     "Giấy xác nhận kết quả thực hiện nhiệm vụ khoa học & công nghệ không sử dụng ngân sách nhà nước",
    //     "Cty CP Sa Sâm Việt đã có thành tích nổi bật trong phát triển doanh nghiệp và đóng góp tích cực vào sự phát triển kinh tế - xã hội của TP Bến Tre do Chủ tịch UBND TP Bến Tre khen tặng",
    //     "Đạt Top 10 thương hiệu tín nhiệm 2018",
    //   ],
    //   media: {
    //     type: "IMAGE",
    //     source: {
    //       url: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    //     },
    //   },
    // },
    // {
    //   title: "2017",
    //   // cardTitle: "Thành tựu",

    //   cardDetailedText: [
    //     "Giấy xác nhận kết quả thực hiện nhiệm vụ khoa học & công nghệ không sử dụng ngân sách nhà nước",
    //     "Cty CP Sa Sâm Việt đã có thành tích nổi bật trong phát triển doanh nghiệp và đóng góp tích cực vào sự phát triển kinh tế - xã hội của TP Bến Tre do Chủ tịch UBND TP Bến Tre khen tặng",
    //     "Đạt Top 10 thương hiệu tín nhiệm 2018",
    //   ],
    //   media: {
    //     type: "IMAGE",
    //     source: {
    //       url: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    //     },
    //   },
    // },
  ];

  return (
    <div>
      <h2 className={styles.title}>Thành tựu nổi bật</h2>
      <div className="container-md">
        <div>
          <Chrono
            items={items}
            mode="VERTICAL"
            hideControls={true}
            scrollable={false}
          />
        </div>
      </div>
    </div>
  );
}
