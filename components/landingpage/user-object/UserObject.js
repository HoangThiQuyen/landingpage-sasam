import Image from "next/image";
import React, { useEffect } from "react";

//css
import styles from "./UserObject.module.css";

// wow
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

//image
import userObjectLine from "../../../public/image/user_object_line.png";
import iconUserObject from "../../../public/image/icon_user_object.svg";
import iconRectangle from "../../../public/image/icon_rectangle.png";
import iconPlus from "../../../public/image/icon_plus.png";

export default function UserObject() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <div className={styles.userObject}>
      <Image
        src={userObjectLine}
        alt="userObjectLine"
        className={styles.imageLine}
      />
      <div className={styles.iconRectangle}>
        <Image
          src={iconRectangle}
          alt="iconRectangle"
          className="wow swing"
          data-wow-iteration="infinite"
          data-wow-duration="10s"
        />
      </div>
      <div className={styles.iconPlus}>
        <Image src={iconPlus} alt="iconPlus" />
      </div>

      <div className="container">
        <h1 className={styles.title}>Đối tượng sử dụng</h1>
        <div className=" d-block d-lg-flex justify-content-center align-items-center text-center text-lg-start ">
          <Image
            src={iconUserObject}
            alt="userObjectLine"
            width={80}
            height={80}
          />
          <div className={styles.content}>
            <h4 className="mb-2">Đối tượng sử dụng Xịt Sa Sâm Việt</h4>
            <p className="mb-0">
              Dùng cho người lớn và trẻ em trên 1 tuổi bị đau họng, ho đờm
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imageLine1}>
        <Image src={userObjectLine} alt="userObjectLine" />
      </div>
    </div>
  );
}
