import Head from "next/head";
import { useEffect } from "react";

import Carousel from "../components/carousel";
import Promotion from "../components/promotion";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Promotion />
    </div>
  );
}
