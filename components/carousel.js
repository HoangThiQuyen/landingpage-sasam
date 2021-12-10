import { useEffect, useRef } from "react";
import styles from "../styles/Landing.module.css";
import Image from "next/image";

// image
import logo from "../public/image/logo.png";

import Head from "next/head";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

export default function Carousel() {
  const videoRef = useRef();

  useEffect(() => {
    let clear = setTimeout(() => {
      videoRef.current.play();
    }, 3000);

    return () => {
      clearTimeout(clear);
    };
  }, []);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      <Head>
        <title>My Carousel</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
      </Head>
      <div>
        <div className={styles.bgvideo}>
          <video ref={videoRef} autoPlay loop muted className={styles.video}>
            <source src="polina.webm" type="video/webm" />
            <source
              src="https://res.cloudinary.com/dn4nxz7f0/video/upload/v1594348575/Pexels_Videos_1093655_pr26ax.mp4"
              type="video/mp4"
            />
          </video>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.background}>
          <div className={`${styles.logo} `}>
            <Image src={logo} alt="Picture of the author" />
          </div>
        </div>
      </div>

      <div>
        <h1
          className="wow slideInLeft"
          data-wow-duration="0.5s"
          data-wow-delay="0.5s"
        >
          QuyenCa{" "}
        </h1>
        <h2 className="wow slideInDown">Vu vau vau vau vauv vau</h2>
      </div>
    </div>
  );
}
