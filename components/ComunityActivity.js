import Image from "next/image";
import React from "react";
import styles from "../styles/ComunityActivity.module.css";
import img1 from "../public/image/activity1.png";
import img2 from "../public/image/activity2.png";

export default function ComunityActivity() {
  return (
    <div>
      <h2 className={styles.title}>Hoạt động cộng đồng</h2>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <Image src={img1} alt="imgs" width={500} />
            <p className={styles.text}>
              SaviGroup tham gia chương trình Chung tay hành động ứng phó với
              biến đổi khí hậu cùng hoa hậu Phương Khánh
            </p>
          </div>
          <div className="col-md-6">
            <Image src={img2} alt="imgs" width={500} />
            <p className={styles.text}>
              SaviGroup phát gạo từ thiện cho người dân
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
