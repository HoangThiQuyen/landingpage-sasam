import Image from "next/image";
import styles from "../styles/InfoProduct.module.css";

// image
import product1 from "../public/image/product1.png";
import product2 from "../public/image/product2.png";
import product3 from "../public/image/product3.png";
import product4 from "../public/image/product4.png";
import iconLogo from "../public/image/icon_logo.png";

export default function IntroProduct() {
  return (
    <div className={`${styles.infoProduct} container mt-5 pt-5`}>
      <div className="row align-items-center">
        <div className="col-5">
          <h1 className={styles.title}> Sarmentosa immune support</h1>
          <p>
            Là đề tài nghiên cứu khoa học, với hàm lượng Saponin, Polyphenol,
            Muối vô Cơ, Vitamin rất cao được chiếc xuất từ loài Sa Sâm Việt quý
            giá, được trồng từ một quy trình đặc biệt duy nhất tại Việt Nam và
            trên Thế giới.
          </p>
          <br />
          <p>
            <i>Công Ty Cổ Phần Tập Đoàn Dược Mỹ Phẩm Sa Sâm Việt </i> phối hợp
            cùng các nhà khoa học các nhà bào chế phối cùng các dược thảo thiên
            nhiên quý hiếm của Việt Nam bào chế tạo nên một sản phẩm đẳng cấp,
            tuyệt vời giúp hỗ trợ bổ phế, hóa đờm; giúp giảm ho gió, họ khan, ho
            có đờm, ho lâu ngày.
          </p>
          <div className="text-center">
            <button type="button" className={`btn ${styles.btn}`}>
              Xem thêm
            </button>
          </div>
        </div>
        <div className="col-7 position-relative">
          <div className="row">
            <div className={` col-6 `}>
              <Image
                src={product1}
                alt="product1"
                className={`${styles.imageProduct1} `}
              />
            </div>
            <div className="col-6 pt-4">
              <Image
                src={product2}
                alt="product2"
                className={`${styles.imageProduct2} `}
              />
            </div>
            <div className="col-6 pt-3">
              <Image
                src={product3}
                alt="product3"
                className={`${styles.imageProduct3} `}
              />
            </div>
            <div className="col-6 ">
              <Image
                src={product4}
                alt="product4"
                className={`${styles.imageProduct4} `}
              />
            </div>
          </div>
          <div className={`${styles.iconLogo} `}>
            <Image src={iconLogo} alt="iconLogo" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
