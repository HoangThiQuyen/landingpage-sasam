import Carousel from "../components/carousel";
import Promotion from "../components/promotion";
import IntroProduct from "../components/intro-product";
import Uses from "../components/uses";

export default function Home() {
  return (
    <div>
      <Carousel />

      <IntroProduct />

      <Promotion />
      {/* <Uses /> */}
    </div>
  );
}
