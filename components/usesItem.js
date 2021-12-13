import React from "react";
import Image from "next/image";
import styles from "../styles/Uses.module.css";

export default function UsesItem({ item }) {
  return (
    <div className={styles.card}>
      <Image src={item.img} alt="Images" width={400} height={400} />
      <p>{item.title}</p>
    </div>
  );
}
