import React, { useState } from "react";
import Image from "next/image";

// Third Library
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

const CarouselComponent = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(0);
  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = (data) => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = (data) => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = (data) => {
    return data.map((item) => (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <Image src={item.src} alt={item.id} />
      </CarouselItem>
    ));
  };
  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={() => next(data)}
        previous={() => previous(data)}
        keyboard={false}
      >
        <CarouselIndicators
          items={data}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides(data)}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
