import React from "react";
import Image from "next/image";
import leaf from "../public/image/leaf.png";
// css
import styles from "../styles/Promotion.module.css";

export default function Promotion() {
  return (
    <div className={styles.promotion}>
      <h2 className={styles.title}>Chương trình khuyến mãi</h2>
      <div className={styles.imgTitle}>
        <Image
          src={leaf}
          alt="Picture of the author"
          width={70}
          height={30}
          className={"img-fluid"}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.promotionText}>
          <h1 className="display-4">Khuyến mãi 20%</h1>
        </div>
      </div>
    </div>
  );
}
