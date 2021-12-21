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
import ComunityActivity from "../components/ComunityActivity";
import Footer from "../components/footer";
import Certification from "../components/certification";
// Images
import CartImg from "../public/image/cart_icon.png";
import PhoneImg from "../public/image/phone_icon.png";
import MessageImg from "../public/image/message_icon.png";
import Image from "next/image";
// css
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

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
      <Head>
        <title> Sa Sâm Việt</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sa Sâm Việt" />

        {/* Carousel */}
        <meta property="og:title" content="Dược liệu vùng cát biển" />
        <meta
          name="carousel"
          content="Doanh nghiệp đầu tiên tại Việt Nam và trên Thế giới trồng sâm trên cát biển. Nghiên cứu được đăng trên tạp chí khoa học Thế giới"
        />

        {/* Thông tin sản phẩm */}
        <meta
          property="og:title"
          content="SARMENTOSA IMMUNE SUPPORT (75 ml) (Bổ phế hóa đờm)"
        />
        <meta property="og:price:amount" content="220,000₫" />
        <meta property="og:price:currency" content="VND" />
        <meta
          property="og:description"
          content="Quy cách: Chai dạng xịt 750mlCông dụng:Hỗ trợ bổ phế, giảm đờmGiúp giảm ho gió, ho khan, ho có đờm, ho lâu ngày do viêm phế quản, viêm họng"
        />

        {/* Khuyến mãi */}
        <meta property="og:title" content="Khuyến mãi" />
        <meta
          name="sale"
          content="Tri ân khách hàng, tưng bừng khuyến mãi lên đến 20%"
        />

        {/* Công dụng */}
        <meta property="og:title" content="Công dụng" />
        <meta
          name="congdung"
          content="(Dứt điểm ho gió, ho khan, ho có đờm)( Xịt họng, kháng khuẩn) (Giảm viêm, ngăn ngừa virut) (Bổ phế, hóa đờm)"
        />

        {/*  Cơ chế tác dụng */}
        <meta property="og:title" content="Cơ chế tác dụng" />
        <meta
          name="cochetacdung"
          content="Giữ ấm vòm họng, dinh dưỡng tế bào, thải độc tố, tăng cường khả năng miễn dịch"
        />
        {/* Đối tượng sử dụng */}
        <meta property="og:title" content="Đối tượng sử dụng" />
        <meta
          name="doituongsudung"
          content="Người lớn và trẻ em trên 1 tuổi bị đau họng"
        />

        {/* Câu chuyện khát vọng */}
        <meta property="og:title" content="Câu chuyện khát vọng" />
        <meta
          name="doituongsudung"
          content="Mang lại sản phẩm tốt nhất đến với người dùng."
        />

        {/* Thành tựu nổi bật */}
        <meta property="og:title" content="Thành tựu nổi bật" />
        <meta
          name="achievement"
          content='(Chứng nhận đạt tiêu chuẩn HACCP)(Chứng nhận đạt tiêu chuẩn ISO)(Chứng nhận cơ sở đủ điều kiện an toàn thực phẩm)(Chứng nhận doanh nghiệp khoa học và công nghệ)(Đạt giải nhì cuộc thi "Dự án khởi nghiệp Quốc gia 2018" tổ chức tại Đà Nẵng)'
        />

        {/*  Tin tức nổi bật */}
        <meta property="og:title" content="Tin tức" />
        <meta
          name="news"
          content="Phát hiện nhiều hợp chất quý giá trong sasam Việt Nam"
        />

        {/* Nghiên cứu khoa học */}
        <meta property="og:title" content="Nghiên cứu khoa học" />
        <meta
          name="nghiencuukhoahoc"
          content="Sâm trông trên cát biển duy nhất tại Việt Nam. Đề tài nghiên cứu đã được đăng trên tạp chí khoa học Quốc tế. Các hoạt chất quý hiếm thuộc nhóm hàng đầu thế giới trong cây Sa Sâm Việt"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      {/*  Chứng nhận */}
      <Certification />

      {/* Thành tựu nổi bật */}
      <Achievement />
      {/* Hoạt động cộng đồng */}
      <ComunityActivity />
      {/* Tin tức nổi bật */}
      <News />

      {/* Nghiên cứu khoa học  */}
      <ScientificResearch />

      {/* Footer */}
      <Footer />
      {showIcon && (
        <div className={styles.hotLine}>
          <div className={styles.icon}>
            <Link href="https://shop.sasamviet.vn/my-cart">
              <a>
                <Image src={CartImg} alt="cart_icon" width={100} height={100} />
              </a>
            </Link>
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
