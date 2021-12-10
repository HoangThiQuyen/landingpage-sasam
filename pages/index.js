import Head from "next/head";
import { useEffect } from "react";

import Carousel from "../components/carousel";
import Promotion from "../components/promotion";
import IntroProduct from "../components/intro-product";

export default function Home() {
  return (
    <div>
      <Carousel />

      <IntroProduct />

      <Promotion />
    </div>
  );
}
