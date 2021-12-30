import Image from "next/image";
import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";

//css
import styles from "./Ingredient.module.css";
import "react-image-lightbox/style.css";

//images
import ingredientImage from "../../../public/image/ingredient.png";
import ingredientLine from "../../../public/image/ingredient_line_top.png";
import leaf from "../../../public/image/leaf.png";
import leaf1 from "../../../public/image/leaf1.png";
import ingreLeft1 from "../../../public/image/IngreLeft1.png";
import ingreLeft2 from "../../../public/image/IngreRight1.png";
import ingreLeft3 from "../../../public/image/IngreLeft3.png";
import ingreRight1 from "../../../public/image/IngreLeft2.png";
import ingreRight2 from "../../../public/image/IngreRight2.png";
import ingreRight3 from "../../../public/image/IngreRight3.png";
import product from "../../../public/image/product.png";

// wow
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
const images = [
  "https://res.cloudinary.com/du7hfrsyf/image/upload/v1640666257/My%20Images/4_ug67mz.png",
  "https://res.cloudinary.com/du7hfrsyf/image/upload/v1640666257/My%20Images/3_rn4z4e.png",
  "https://res.cloudinary.com/du7hfrsyf/image/upload/v1640666505/My%20Images/5_kmh6mu.png",

  "https://res.cloudinary.com/du7hfrsyf/image/upload/v1640666257/My%20Images/1_rgdbrb.png",
  "https://res.cloudinary.com/du7hfrsyf/image/upload/v1640666504/My%20Images/6_ajzlp1.png",
  "https://res.cloudinary.com/du7hfrsyf/image/upload/v1640666257/My%20Images/2_zexvjh.png",
];

export default function Ingredient() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.ingredient} px-5 px-lg-0`}>
      <Image src={ingredientLine} alt="ingredientLine" />
      <div className={styles.leafIcon}>
        <Image
          src={leaf1}
          alt="leaf1"
          className="wow pulse"
          data-wow-iteration="infinite"
        />
      </div>

      <div className=" pb-5">
        <h1 className={`text-center ${styles.title} mt-5`}>Thành phần</h1>
        <div className={`row  ${styles.content} justify-content-center mx-0`}>
          <div className="col-md-6 col-lg-3">
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-end align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreLeft1}
                  alt="ingreLeft1"
                  width="70"
                  height="70"
                />
              </div>

              <h4 className="text-lg-right text-start">
                Cát cánh <p>(Platycodon grandiflorum)</p>
              </h4>
            </div>
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-end align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreLeft2}
                  alt="ingreLeft2"
                  width="70"
                  height="70"
                />
              </div>
              <h4 className="text-lg-right text-start">
                Bán hạ <p>(Typhonium divaricatum Decne)</p>
              </h4>
            </div>
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-end align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreLeft3}
                  alt="ingreLeft3"
                  width="70"
                  height="70"
                />
              </div>
              <h4 className="text-lg-right text-start">
                Tỳ bà diệp <p>(Eriobotrys japonica)</p>
              </h4>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 d-none d-lg-block ">
            <div className={styles.ingredientImage}>
              <Image
                src={ingredientImage}
                alt="ingredientImage"
                className="img-fluid"
              />
              <div
                className={styles.ingreLeft1}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(0);
                }}
              >
                <Image src={ingreLeft1} alt="ingreLeft1" />
              </div>
              <div
                className={styles.ingreLeft2}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(1);
                }}
              >
                <Image src={ingreLeft2} alt="ingreLeft2" />
              </div>
              <div
                className={styles.ingreLeft3}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(2);
                }}
              >
                <Image src={ingreLeft3} alt="ingreLeft3" />
              </div>
              <div
                className={styles.ingreRight1}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(3);
                }}
              >
                <Image src={ingreRight1} alt="ingreRight1" />
              </div>
              <div
                className={styles.ingreRight2}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(4);
                }}
              >
                <Image src={ingreRight2} alt="ingreRight2" />
              </div>
              <div
                className={styles.ingreRight3}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(5);
                }}
              >
                <Image src={ingreRight3} alt="ingreRight3" />
              </div>
              <div className={styles.product}>
                <Image src={product} alt="product" />
              </div>
            </div>

            {/* lightbox */}
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + images.length - 1) % images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            )}
            {/* End Lightbox */}
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-start align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreRight1}
                  alt="ingreRight1"
                  width="70"
                  height="70"
                />
              </div>
              <h4>
                Sa Sâm Việt <p>(Sarmentosa)</p>
              </h4>
            </div>
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-start align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreRight2}
                  alt="ingreRight2"
                  width="70"
                  height="70"
                />
              </div>
              <h4>
                Bạc hà diệp <p>(Menthg Arvensis Lin)</p>
              </h4>
            </div>
            <div
              className={`${styles.ingredientItem} d-flex justify-content-start align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreRight3}
                  alt="ingreRight3"
                  width="70"
                  height="70"
                />
              </div>
              <h4>
                Tang bạch bi <p>(Cortex mori Albae Radicis)</p>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.leafIcon1}>
        <Image src={leaf} alt="leaf" />
      </div>
      <div className={styles.ingredientLineBottom}>
        <Image src={ingredientLine} alt="ingredientLine" />
      </div>
    </div>
  );
}
