import React from "react";

// Third Library
import { Col, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Components
import ProductItem from "./ProductItem";

const RelatedProducts = () => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      clickable: true,
    },
    navigation: true,
    slideToClickedSlide: true,
    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };
  return (
    <div className="card card-custom ">
      <div className="card-body ">
        {/*begin::Heading*/}
        <div className="d-flex justify-content-between align-items-center mb-7">
          <h2 className="font-weight-bolder text-dark font-size-h3 mb-0">
            Sản phẩm liên quan
          </h2>
          <p className="btn btn-light-primary btn-sm font-weight-bolder">
            Xem tất cả
          </p>
        </div>
        {/*end::Heading*/}
        {/*begin::Products*/}
        {/* <div className="row"> */}
        {/* <Swiper dir={"rtl"} {...params}> 
          <SwiperSlide className="rounded swiper-shadow my-6">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="rounded swiper-shadow my-6">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="rounded swiper-shadow my-6">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="rounded swiper-shadow my-6">
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide className="rounded swiper-shadow my-6">
            <ProductItem />
          </SwiperSlide>
        </Swiper>
        */}
        <Row>
          {[...new Array(4)].map((ele, idx) => (
            <Col md="3" key={idx}>
              <ProductItem />
            </Col>
          ))}
        </Row>

        {/* </div> */}
        {/*end::Products*/}
      </div>
    </div>
  );
};

export default RelatedProducts;
