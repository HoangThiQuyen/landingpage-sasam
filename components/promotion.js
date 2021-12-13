import React from "react";

// css
import styles from "../styles/Promotion.module.css";

export default function Promotion() {
  return (
    <div className={styles.promotion}>
      <h2 className={styles.title}>Chương trình khuyến mãi</h2>

      <div className={styles.content}>
        <div className={styles.promotionText}>
          <h1 className="display-4">Khuyến mãi 20%</h1>
        </div>
        <p className={styles.promotionContent}>
          Khuyến mãi đặc biệt nhằm tri ân khách hàng
        </p>
      </div>
    </div>
  );
}
