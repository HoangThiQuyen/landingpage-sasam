import Carousel from "../components/carousel";
import Promotion from "../components/promotion";
import IntroProduct from "../components/intro-product";
import Uses from "../components/uses";
import Ingredient from "../components/Ingredient";
import Effect from "../components/effect";
import UserManual from "../components/UserManual";
import UserObject from "../components/UserObject";
import Rating from "../components/Rating";
import Stories from "../components/stories";
import { useEffect, useState } from "react";

import News from "../components/news";
import Achievement from "../components/achievement";
import ScientificResearch from "../components/ScientificResearch";
import Footer from "../components/footer";
// Images
import CartImg from "../public/image/cart_icon.png";
import PhoneImg from "../public/image/phone_icon.png";
import MessageImg from "../public/image/message_icon.png";
import Image from "next/image";
// css
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 500) {
        setShowIcon(true);
      }
      if (window.pageYOffset < 500) {
        setShowIcon(false);
      }
    });
  }, []);
  return (
    <div>
      {/* Banner */}
      <Carousel />

      {/* Giới thiệu sản phẩm */}
      <IntroProduct />

      {/* Thành phần */}
      <Ingredient />

      {/* Khuyến mãi */}
      <Promotion />

      {/* Công dụng */}
      <Uses />

      {/* Cơ chế tác động  */}
      <Effect />

      {/* Hướng dẫn sử dụng */}
      <UserManual />

      {/* Đối tượng sử dụng */}
      <UserObject />

      {/* Người dùng đánh giá */}
      <Rating />

      {/* Câu chuyện khát vọng */}
      <Stories />

      {/* Tin tức nổi bật */}
      <News />

      {/* Thành tựu nổi bật */}
      <Achievement />

      {/* Nghiên cứu khoa học  */}
      <ScientificResearch />

      {/* Footer */}
      <Footer />
      {showIcon && (
        <div className={styles.hotLine}>
          <div className={styles.icon}>
            <Image src={CartImg} alt="cart_icon" width={100} height={100} />
          </div>
          <div className={styles.icon}>
            <Image src={PhoneImg} alt="phone_icon" width={100} height={100} />
          </div>
          <div className={styles.icon}>
            <Image
              src={MessageImg}
              alt="message_icon"
              width={100}
              height={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}
