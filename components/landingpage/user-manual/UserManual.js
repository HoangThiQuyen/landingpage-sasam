import Image from "next/image";

//css
import styles from "./UserManual.module.css";

//image
import userManual from "../../../public/image/user_manual.png";
import manual1 from "../../../public/image/manual1.png";
import manual2 from "../../../public/image/manual2.png";
import manual3 from "../../../public/image/manual3.png";

export default function UserManual() {
  return (
    <div className={styles.userManual}>
      <div className="container">
        <h1 className={styles.title}>Hướng dẫn sử dụng</h1>
        <div className="row">
          <div className="col-lg-6 text-center ">
            <Image src={userManual} alt="userManual" />
          </div>
          <div className="col-lg-6">
            <div
              className={` ${styles.Item} ml-5 d-block d-lg-flex align-items-center text-center text-lg-start my-5 my-lg-0`}
            >
              <Image src={manual1} alt="manual1" />
              <div className={`${styles.manualItem} `}>
                <h4> Giảm đau họng</h4>
                <p>
                  Làm dịu nhanh cảm giác đau, ngứa, rát ở cổ họng, giảm bớt mùi
                  hôi ở miệng.
                </p>
              </div>
            </div>

            <div
              className={` ${styles.Item} ml-5 d-block d-lg-flex align-items-center text-center text-lg-start mb-5 mb-lg-0`}
            >
              <Image src={manual2} alt="manual1" />
              <div className={`${styles.manualItem}`}>
                <h4>Giảm ho</h4>
                <p>
                  Giảm ho tốt cả về mức độ ho, thời gian của cơn ho trong các
                  trường hợp ho gió, ho khan, ho có đờm cả cấp tính và mãn tính
                  , cảm cúm, thay đổi thời tiết,...
                </p>
              </div>
            </div>
            <div
              className={` ${styles.Item} ml-5 d-block d-lg-flex align-items-center text-center text-lg-start mb-5 mb-lg-0`}
            >
              <Image src={manual3} alt="manual1" />
              <div className={`${styles.manualItem}`}>
                <h4>Cải thiện loét miệng</h4>
                <p>Cải thiện các triệu chứng của viêm loét miệng – họng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
