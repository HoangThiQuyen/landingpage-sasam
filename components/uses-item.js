import React from "react";
import Image from "next/image";
import styles from "../styles/Uses.module.css";

export default function UsesItem({ item }) {
  return (
    <div>
      <Image
        className={styles.img}
        src={item.img}
        alt="Images"
        width={200}
        height={200}
      />
      <p className={styles.content}>{item.title}</p>
    </div>
  );
}
