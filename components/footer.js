import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Image
import mapImg from "../public/image/map.png";
import mailImg from "../public/image/mail.png";
import phoneImg from "../public/image/phone.png";
import CTImg from "../public/image/CTFooter.png";
import iconAnimation from "../public/image/icon_animation.png";
import circleIcon from "../public/image/circle_icon.png";
import squareIcon from "../public/image/icon_animation_square.png";

// css
import styles from "../styles/Footer.module.css";

// wow
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
export default function Footer() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <div className={styles.footer}>
      <div className={styles.bgFooter}>
        <div className={`d-none d-lg-block ${styles.iconAnimation}`}>
          <Image src={iconAnimation} alt="iconAnimation" />
        </div>
        <div className={`d-none d-lg-block ${styles.iconAnimation2}`}>
          <Image src={circleIcon} alt="iconAnimation" />
        </div>
        <div className={`d-none d-lg-block ${styles.iconAnimation3}`}>
          <Image
            src={squareIcon}
            alt="iconAnimation"
            className="wow tada"
            data-wow-iteration="infinite"
            data-wow-duration="2s"
          />
        </div>
        <div className={`container ${styles.footerAbso}`}>
          <div className="row justify-content-between ">
            <div className="col-md-8 col-lg-5">
              <h2 className={styles.footerTitle}>
                CÔNG TY CỔ PHẦN TẬP ĐOÀN SA SÂM VIỆT- DOANH NGHIỆP KHOA HỌC &
                CÔNG NGHỆ
              </h2>
              <p>Số giấy phép kinh doanh: 1301015435</p>
              <p>Ngày cấp: 06/09/2016</p>
              <p className="d-flex align-items-center">
                <Image src={mapImg} alt="map" width={20} height={27} />{" "}
                <span className={styles.footerContent}>
                  {" "}
                  430C Nguyễn Huệ, P. Phú Khương, TP. Bến Tre, Tỉnh Bến Tre
                </span>
              </p>
              <p className="d-flex align-items-center">
                {" "}
                <Image src={phoneImg} alt="map" width={20} height={25} />
                <span className={styles.footerContent}> 0889 78 78 78</span>
              </p>
              <p className="d-flex align-items-center">
                {" "}
                <Image src={mailImg} alt="map" width={25} height={20} />{" "}
                <span className={styles.footerContent}>
                  {" "}
                  sasamviet@gmail.com
                </span>
              </p>
            </div>
            <div className="col-md-4 col-lg-4 ">
              <h2 className={styles.footerTitle2}>LIÊN KẾT NHANH</h2>
              <ul className={styles.list}>
                <li>
                  <Link href="/">
                    <a>Tin tức</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Giới thiệu Savigroup</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Giới thiệu Sa Sâm Việt</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Câu chuyện về dược liệu vùng cát biển</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Nghiên cứu khoa học</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Chính sách bảo mật</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Câu hỏi thường gặp</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Trung tâm trợ giúp</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Các điều khoản</a>
                  </Link>
                </li>
              </ul>
              <Image src={CTImg} alt="map" width={150} height={100} />{" "}
            </div>
            <div className=" col-lg-3">
              <h2 className={styles.footerTitle2}>GIỜ MỞ CỬA</h2>
              <p>Từ 7:00 - 17:00 từ thứ 2 đến thứ 7 hằng tuần.</p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1701863129338!2d106.37685011474144!3d10.247854471529394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa9195af3ad7d%3A0xe8db798fef1b7e85!2zQ8O0bmcgdHkgQ-G7lSBQaOG6p24gVOG6rXAgxJBvw6BuIFNhIFPDom0gVmnhu4d0!5e0!3m2!1svi!2s!4v1639558756275!5m2!1svi!2s"
                  width="350"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
