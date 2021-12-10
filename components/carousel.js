import { useEffect, useRef } from "react";
import styles from "../styles/Landing.module.css";
import Image from "next/image";

// image
import logo from "../public/image/logo.png";
import WOW from "wowjs";

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

  seEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div>
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
        <h1 className="wow slideInLeft" data-wow-duration={5000}>
          Dello
        </h1>
      </div>
    </div>
  );
}
