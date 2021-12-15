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
import News from "../components/news";
import Achievement from "../components/achievement";
import ScientificResearch from "../components/ScientificResearch";
import Footer from "../components/footer";

export default function Home() {
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
    </div>
  );
}
