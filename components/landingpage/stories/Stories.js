import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

//css
import styles from "./Stories.module.css";

//image
import img1 from "../../../public/image/quote1.png";
import img2 from "../../../public/image/quote2.png";
import StoriesLine from "../../../public/image/ingredient_line_top.png";

export default function Stories() {
  return (
    <div className={styles.stories}>
      <h2 className={styles.title}>Câu chuyện khát vọng</h2>
      <div className={styles.storiesTop}>
        <Image src={StoriesLine} alt="imgs" />
      </div>
      <div className={styles.bgStories}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 order-2 order-md-1 ">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=eVXvzyET120&ab_channel=SaS%C3%A2mVi%E1%BB%87t"
                className="react-player-video my-2 rounded overflow-hidden"
                width="100%"
                height={500}
                controls={true}
              />
            </div>
            <div className="col-md-5 order-1 order-md-2 mb-5 mb-md-0">
              <div className="text-start">
                <Image src={img2} alt="imgs" width={40} height={40} />
              </div>
              <p className={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five.
              </p>
              <div style={{ textAlign: "end" }}>
                <Image src={img1} alt="imgs" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.storiesBottom}>
        <Image src={StoriesLine} alt="imgs" />
      </div>
    </div>
  );
}
