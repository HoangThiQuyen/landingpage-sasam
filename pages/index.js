import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Components
import {
  Carousel,
  Promotion,
  InfoProduct,
  Uses,
  Ingredient,
  Effect,
  UserManual,
  UserObject,
  Rating,
  Stories,
  Chat,
  News,
  Achievement,
  ScientificResearch,
  ComunityActivity,
  Footer,
  Certification,
} from "../components/landingpage";

// Images
import phoneGif from "../public/gift/phoneGift.gif";
import messageGif from "../public/gift/messageGif.gif";
import cartGif from "../public/gift/cartGif.gif";
import logo from "../public/image/logo-bgnone.png";
import backtoTopImg from "../public/image/back-to-top.png";

// Css
import styles from "../styles/Home.module.css";

export default function Home() {
  // UseState
  const [showIcon, setShowIcon] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // UseEffect
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 400) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
      if (window.pageYOffset > 200) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    });
  }, []);

  const handleBackToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
        />
      </Head>
      <div>
        {/* Logo SaSam */}
        {showLogo && (
          <div
            style={{
              position: "fixed",
              top: 15,
              left: 5,
              zIndex: 99999999,
              width: 100,
              cursor: "pointer",
            }}
          >
            <Image src={logo} alt="logo-sasam" className="img-fluid" />
          </div>
        )}

        {/* Banner */}
        <Carousel />

        {/* Giới thiệu sản phẩm */}
        <InfoProduct />

        {/* Thành phần */}
        <Ingredient />

        {/* Công dụng */}
        <Uses />

        {/* Cơ chế tác động  */}
        <Effect />

        {/* Hướng dẫn sử dụng */}
        <UserManual />

        {/* Đối tượng sử dụng */}
        <UserObject />

        {/* Khuyến mãi */}
        <Promotion />

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
          <div>
            <div className={styles.hotLine}>
              {/* <div className={styles.icon}>
            <Link href="/my-cart">
              <a>
                <Image src={cartGif} alt="cart_icon" width={100} height={100} />
              </a>
            </Link>
          </div> */}
              <div
                className={` ${styles.iconPhone} ${styles.icon} d-flex align-items-center `}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#383b6d",
                    border: "1px solid red",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                  }}
                  className={`${styles.phone} p-3`}
                >
                  0889 78 78 78
                </div>
                <div
                  style={{
                    boxShadow:
                      " rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    marginRight: 20,
                  }}
                >
                  <Link href="tel:0889787878">
                    <a>
                      <Image
                        src={phoneGif}
                        alt="phone_icon"
                        className="rounded-circle"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.icon}>
                <div
                  style={{
                    boxShadow:
                      " rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                  }}
                >
                  <Link href="/my-cart">
                    <a>
                      <Image
                        src={cartGif}
                        alt="phone_icon"
                        className="rounded-circle"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className={styles.icon}>
                <div
                  style={{
                    boxShadow:
                      " rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    marginLeft: 20,
                  }}
                  data-toggle="modal"
                  data-target="#kt_chat_modal"
                  onClick={() => setShowChat(!showChat)}
                >
                  <Image
                    src={messageGif}
                    alt="phone_icon"
                    className="rounded-circle"
                  />
                </div>
              </div>
            </div>
            <div
              className={styles.backToTop}
              onClick={handleBackToTop}
              id="backtotop"
            >
              <Image src={backtoTopImg} alt="backToTop" className="img-fluid" />
            </div>
          </div>
        )}
        <Chat setShowChat={setShowChat} showChat={showChat} />
      </div>
    </div>
  );
}
