import Image from "next/image";

import { useEffect } from "react";

// image
import product1 from "../../../public/image/product1.png";
import Head from "next/head";

//css class
import styles from "./InfoProduct.module.css";
import Link from "next/link";

// wow
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

export default function InfoProduct() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <div className={`${styles.infoProduct} container `}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
      </Head>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className={`${styles.title} wow fadeInDown`}>
            Sarmentosa immune support
          </h1>
          <p
            className={`${styles.infoText} wow fadeInUp`}
            data-wow-delay="500ms"
          >
            Là đề tài nghiên cứu khoa học, với hàm lượng Saponin, Polyphenol,
            Muối vô Cơ, Vitamin rất cao được chiếc xuất từ loài Sa Sâm Việt quý
            giá, được trồng từ một quy trình đặc biệt duy nhất tại Việt Nam và
            trên Thế giới.
          </p>
          <br />
          <p
            className={`${styles.infoText} wow fadeInUp`}
            data-wow-delay="800ms"
          >
            <i>Công Ty Cổ Phần Tập Đoàn Dược Mỹ Phẩm Sa Sâm Việt </i> phối hợp
            cùng các nhà khoa học các nhà bào chế phối cùng các dược thảo thiên
            nhiên quý hiếm của Việt Nam bào chế tạo nên một sản phẩm đẳng cấp,
            tuyệt vời giúp hỗ trợ bổ phế, hóa đờm; giúp giảm ho gió, họ khan, ho
            có đờm, ho lâu ngày.
          </p>
          <div
            className={` ${styles.saleProduct} wow fadeInUp `}
            data-wow-delay="1s"
          >
            <div className="d-flex justify-content-center align-items-center ">
              <p className={styles.listedPrice}>
                200.000<span>đ</span>
              </p>
              <p className={styles.promotionalPrice}>
                180.000<span>đ</span>
              </p>
            </div>
            <p className={styles.saleInfo}>
              Giảm giá lên đến <span className={styles.discount}>20%</span>
            </p>
          </div>
          <div className="text-center wow fadeInUp" data-wow-delay="1.4s">
            <Link href="/my-cart">
              <a className={`btn ${styles.btn}`}>Mua ngay</a>
            </Link>
          </div>
        </div>
        <div className="col-lg-6  mt-5 mt-lg-0">
          <div
            className={`${styles.imageProduct1} wow fadeInRight`}
            data-wow-duration="1.4s"
          >
            <Image src={product1} alt="product1" className={`  img-fluid`} />
          </div>
        </div>
      </div>
    </div>
  );
}
