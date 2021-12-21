import React from "react";
import { Star } from "react-feather";
import { Badge, Card, CardBody, Progress } from "reactstrap";

// ** Third Party Components
import Rating from "react-rating";
import Image from "next/image";
import { useRouter } from "next/router";
//image
import product1 from "../../../public/cart/product-1.jpg";

const ProductItem = ({ item }) => {
  if (!item) {
    item = {
      id: 1,
      thumb_img_url: product1,
      discount: { value: 20 },
      category_info: { name: "Chăm sóc da" },
      rating: { rating: 4.2 },
      price: 350000,
      name: "Sâm SUMMARY",
      sold_info: {
        sold: 35,
        total: 100,
      },
    };
  }

  const router = useRouter();
  return (
    <Card
      className="ecommerce-card w-100"
      onClick={() => router.push(`/`)}
      style={{ cursor: "pointer" }}
    >
      <div className="item-img text-center p-5 mx-auto">
        <div className="unset-img h-100px w-70">
          <Image
            className=" round  "
            src={item.thumb_img_url || product1}
            objectFit="cover"
            // layout="fill"
            alt="not found"
            style={{ width: 50, height: 50 }}
          />
        </div>

        <div
          style={{
            width: "40px",
            height: "50px",
            backgroundColor: "#1eac52",
            position: "absolute",
            right: "6%",
            top: "0%",
            paddingTop: "5px",
            color: "#fff",
          }}
        >
          Sale {item.discount && item.discount.value}%
        </div>
      </div>

      <CardBody className="py-3 mb-1 px-5">
        <Badge color="light-danger" className="mb-2">
          {item.category_info && item.category_info.name}
        </Badge>
        <div className="item-wrapper d-flex justify-content-between">
          <Rating
            emptySymbol={<Star size={18} fill="#babfc7" stroke="#babfc7" />}
            fullSymbol={<Star size={18} fill="#ff9f43" stroke="#ff9f43" />}
            fractions={2}
            initialRating={item.rating?.rating}
            direction="ltr"
            readonly
            className="mr-3 mb-3"
          />

          <div className="item-cost">
            <h6 className="item-price  text-primary">
              {item.price || 0}
              <u>đ</u>
            </h6>
          </div>
        </div>
        <h6 className="item-name w-100">
          <div className="text-body mb-3 text-truncate mw-100">{item.name}</div>
        </h6>
        {item.sold_info && (
          <Progress multi>
            {item.sold_info.sold / item.sold_info.sold >= 0.2 ? (
              <Progress
                className="progress-bar-primary"
                bar
                value={
                  (item.sold_info &&
                    item.sold_info.sold / item.sold_info.total) * 100 || 0
                }
              >
                Đã bán {(item.sold_info && item.sold_info.sold) || 0}
              </Progress>
            ) : (
              <>
                <Progress
                  className="progress-bar-primary"
                  bar
                  value={
                    (item.sold_info &&
                      item.sold_info.sold / item.sold_info.total) * 100 || 0
                  }
                />
                <Progress
                  bar
                  color="light"
                  value={
                    (1 - item.sold_info &&
                      item.sold_info.sold / item.sold_info.total) * 100 || 100
                  }
                >
                  <span className="text-dark">
                    Đã bán {(item.sold_info && item.sold_info.sold) || 0}
                  </span>
                </Progress>
              </>
            )}
          </Progress>
        )}
      </CardBody>
    </Card>
  );
};

export default ProductItem;
