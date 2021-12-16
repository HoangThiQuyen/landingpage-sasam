import React from "react";

// css
import styles from "../styles/Promotion.module.css";
import voucher from "../public/image/voucher.png";
import Image from "next/image";

export default function Promotion() {
  return (
    <div>
      <h2 className={styles.title}>Chương trình khuyến mãi</h2>
      <div className="container">
        <div>
          <div className={styles.promotionText}>
            <h1 className="display-4">Khuyến mãi 20%</h1>
          </div>
          <div className="text-center">
            <Image src={voucher} alt="imgs" />
          </div>
        </div>
      </div>
    </div>
  );
}
