import Carousel from "../components/carousel";
import Promotion from "../components/promotion";
import IntroProduct from "../components/intro-product";
import Uses from "../components/uses";
import Ingredient from "../components/Ingredient";

export default function Home() {
  return (
    <div>
      <Carousel />

      <IntroProduct />

      {/* Thành phần */}
      <Ingredient />

      <Promotion />
      {/* <Uses /> */}
    </div>
  );
}
