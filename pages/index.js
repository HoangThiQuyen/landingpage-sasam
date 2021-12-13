import Carousel from "../components/carousel";
import Promotion from "../components/promotion";
import IntroProduct from "../components/intro-product";
import Uses from "../components/uses";
import Ingredient from "../components/Ingredient";
import UserManual from "../components/UserManual";
import UserObject from "../components/UserObject";

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <Carousel />

      <IntroProduct />

      {/* Thành phần */}
      <Ingredient />

      <Promotion />
      {/* <Uses /> */}

      {/* Hướng dẫn sử dụng */}
      <UserManual />

      {/* Đối tượng sử dụng */}
      <UserObject />
    </div>
  );
}
