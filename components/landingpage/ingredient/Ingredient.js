import Image from "next/image";
import { useEffect } from "react";

//css
import styles from "./Ingredient.module.css";

//images
import ingredientImage from "../../../public/image/ingredient.png";
import ingredientLine from "../../../public/image/ingredient_line_top.png";
import leaf from "../../../public/image/leaf.png";
import leaf1 from "../../../public/image/leaf1.png";
import ingreSmall from "../../../public/image/ingre_small.png";

// wow
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

export default function Ingredient() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <div className={`${styles.ingredient}`}>
      <Image src={ingredientLine} alt="ingredientLine" />
      <div className={styles.leafIcon}>
        <Image
          src={leaf1}
          alt="leaf1"
          className="wow pulse"
          data-wow-iteration="infinite"
        />
      </div>

      <div className="container pb-5">
        <h1 className={`text-center ${styles.title} mt-5`}>Thành phần</h1>
        <div className={`row  ${styles.content}`}>
          <div className="col-md-6 col-lg-4">
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-end align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreSmall}
                  alt="ingreSmall"
                  width="70"
                  height="70"
                />
              </div>

              <h4>
                Cát cánh <span>( Platycodon grandiflorum )</span>
              </h4>
            </div>
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-end align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreSmall}
                  alt="ingreSmall"
                  width="70"
                  height="70"
                />
              </div>
              <h4>
                Bán hạ <span>( Typhonium divaricatum Decne )</span>
              </h4>
            </div>
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-end align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreSmall}
                  alt="ingreSmall"
                  width="70"
                  height="70"
                />
              </div>
              <h4>
                Tỳ bà diệp <span>( Eriobotrys japonica )</span>
              </h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-none d-lg-block ">
            <Image src={ingredientImage} alt="ingredientImage" />
          </div>
          <div className="col-md-6 col-lg-4">
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-start align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreSmall}
                  alt="ingreSmall"
                  width="70"
                  height="70"
                />
              </div>
              <h4>
                Sa Sâm Việt <span>( Sarmentosa )</span>
              </h4>
            </div>
            <div
              className={` ${styles.ingredientItem} d-flex justify-content-start align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreSmall}
                  alt="ingreSmall"
                  width="70"
                  height="70"
                />
              </div>
              <h4>
                Bạc hà diệp <span>( Menthg Arvensis Lin )</span>
              </h4>
            </div>
            <div
              className={`${styles.ingredientItem} d-flex justify-content-start align-items-center`}
            >
              <div className="d-block d-lg-none">
                <Image
                  src={ingreSmall}
                  alt="ingreSmall"
                  width="70"
                  height="70"
                />
              </div>
              <h4>
                Tang bạch bi <span>( Cortex mori Albae Radicis )</span>
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
