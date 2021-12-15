import React from "react";
import styles from "../styles/Achievement.module.css";
import { Chrono } from "react-chrono";

export default function Achievement() {
  const items = [
    {
      title: "2017",
      cardTitle: "",

      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "2018",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "2019",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "2020",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "2021",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];
  return (
    <div>
      <h2 className={styles.title}>Thành tựu nổi bật</h2>
      <div style={{ height: "400px" }}>
        {/* <Chrono
          items={items}
          mode="VERTICAL"
          hideControls={true}
          onItemSelected={(ele) => console.log(ele)}
        /> */}
        <Chrono mode="VERTICAL" items={items}>
          <div>
            <p>VUUUUUUUUUUUUUUUUUUUUUUUUUU</p>
          </div>
        </Chrono>
      </div>
    </div>
  );
}
