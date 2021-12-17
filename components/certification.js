import Image from "next/image";
import React from "react";
import styles from "../styles/Certification.module.css";
import certification from "../public/image/certification.png";

export default function Certification() {
  return (
    <div className="container">
      <h1 className={styles.title}>Chứng nhận</h1>
      <div className="row align-items-center justify-content-between">
        <div
          className="col-md-6"
          style={{
            border: "5px solid #383b6d",
            borderRadius: "10px",
            height: "100%",
          }}
        >
          <div className="w-75 mx-auto py-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            <br />
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            <br />
            <br />
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            <br />
            <br />
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
            <br />
            <br />
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="col-md-6 text-center">
          <Image src={certification} alt="certification" />
        </div>
      </div>
    </div>
  );
}
