import { useEffect, useRef } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

// wow
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

// image
import logo from "../../../public/image/logo.png";
import bgLine from "../../../public/image/bg-line.png";
import iconHand from "../../../public/image/icon_flower.png";

//css
import styles from "./Carousel.module.css";

export default function Carousel() {
  const videoRef = useRef();

  // useEffect
  // useEffect(() => {
  //   let clear = setTimeout(() => {
  //     videoRef.current.play();
  //   }, 3000);

  //   return () => {
  //     clearTimeout(clear);
  //   };
  // }, []);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      <div>
        <div className={styles.bgvideo}>
          {/* <video ref={videoRef} autoPlay loop muted className={styles.video}>
            <source src="polina.webm" type="video/webm" />
            <source
              src="https://res.cloudinary.com/dn4nxz7f0/video/upload/v1594348575/Pexels_Videos_1093655_pr26ax.mp4"
              type="video/mp4"
            />
          </video> */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=eVXvzyET120&ab_channel=SaS%C3%A2mVi%E1%BB%87t"
            muted={false}
            playing={true}
            controls={false}
            loop={true}
            volume={0}
            playbackRate={1}
            className={styles.video}
          />
          <div className={styles.overlay}></div>
          <div className={styles.bgLine}>
            <Image src={bgLine} alt="Line background" />
          </div>
          <div className={styles.bgLine1}>
            <Image src={bgLine} alt="Line1 background" />
          </div>
          <div className={styles.bgLine2}>
            <Image src={bgLine} alt="Line2 background" />
          </div>
        </div>
        <div className={styles.background}>
          <div className={`${styles.logo} `}>
            <Image src={logo} alt="Logo SasamViet" />
          </div>
        </div>
        <div className={styles.content}>
          <p className="wow fadeInUp" data-wow-duration="3s">
            Dược liệu vùng cát biển
          </p>
        </div>
      </div>

      <div className={styles.iconHand}>
        <Image src={iconHand} alt="Icon hand" width={170} height={170} />
      </div>
    </div>
  );
}
