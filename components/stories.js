import React from "react";
import styles from "../styles/Stories.module.css";
import ReactPlayer from "react-player";
import StoriesLine from "../public/image/ingredient_line_top.png";
import Image from "next/image";

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
            <div className="col-md-7">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=eVXvzyET120&ab_channel=SaS%C3%A2mVi%E1%BB%87t"
                className="react-player-video my-2 rounded overflow-hidden"
                width="100%"
                height={500}
                controls={true}
              />
            </div>
            <div className="col-md-5">
              <p className={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
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
