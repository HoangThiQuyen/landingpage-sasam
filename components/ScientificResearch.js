import Image from "next/image";
import React from "react";

// css
import styles from "../styles/ScientificResearch.module.css";

// image
import scientificResearchLine from "../public/image/scientific_research_line.png";
import scientificResearch1 from "../public/image/scientific_research1.png";
import scientificResearch2 from "../public/image/scientific_research2.png";
import scientificResearch3 from "../public/image/scientific_research3.png";
import scientificResearch4 from "../public/image/scientific_research4.png";

export default function ScientificResearch() {
  return (
    <div>
      <div className={styles.scientificResearch}>
        <div className={styles.overlay}></div>
        <div>
          <Image src={scientificResearchLine} alt="scientificResearchLine" />
        </div>
        <div className="container">
          <div className={`${styles.content} `}>
            <h1 className={styles.title}>Nghiên cứu khoa học</h1>
            <p className={styles.text}>
              Sâm trông trên cát biển duy nhất tại Việt Nam. Đề tài nghiên cứu
              đã được đăng trên tạp chí khoa học Quốc tế. Các hoạt chất quý hiếm
              thuộc nhóm hàng đầu thế giới trong cây Sa Sâm Việt
            </p>
          </div>
          <div className={`row ${styles.imageContent} justify-content-between`}>
            <div className={`col-6 text-end`}>
              <div className={` ${styles.scientificResearchImage}`}>
                <div className={styles.overlayHover}></div>
                <Image
                  src={scientificResearch1}
                  alt="scientificResearch1"
                  className="w-100 "
                />

                <div className={styles.hoverText}>
                  <p>Flavonoid</p>
                  <button type="button" className={`btn ${styles.btn}`}>
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
            <div className={`col-6 `}>
              <div className={` ${styles.scientificResearchImage}`}>
                <div className={styles.overlayHover}></div>
                <Image
                  src={scientificResearch2}
                  alt="scientificResearch2"
                  className="w-100 "
                />

                <div className={styles.hoverText}>
                  <p>Saponin</p>
                  <button type="button" className={`btn ${styles.btn}`}>
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>

            <div className={`col-6 text-end`}>
              <div className={` ${styles.scientificResearchImage}`}>
                <div className={styles.overlayHover}></div>
                <Image
                  src={scientificResearch3}
                  alt="scientificResearch3"
                  className="w-100 "
                />

                <div className={styles.hoverText}>
                  <p>Polyphenol</p>
                  <button type="button" className={`btn ${styles.btn}`}>
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>

            <div className={`col-6 `}>
              <div className={` ${styles.scientificResearchImage}`}>
                <div className={styles.overlayHover}></div>
                <Image
                  src={scientificResearch4}
                  alt="scientificResearch4"
                  className="w-100 "
                />

                <div className={styles.hoverText}>
                  <p>Muối vô cơ</p>
                  <button type="button" className={`btn ${styles.btn}`}>
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
