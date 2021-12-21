import NewProducts from "../../components/checkout/cart/NewProducts";
import SubHeader from "../../components/checkout/cart/SubHeader";
import RecentProducts from "../../components/checkout/cart/RecentProducts";
import ShoppingCard from "../../components/checkout/cart/ShoppingCard";
import RelatedProducts from "../../components/checkout/cart/RelatedProducts";
import { Col, Row } from "reactstrap";

const MyCart = () => {
  const listNewProduct = [
    {
      id: 1,
      name: "SARMENTOSA IMMUNE SUPPORT (75 ML) (BỔ PHẾ HÓA ĐỜM)",
      image:
        "https://product.hstatic.net/1000347556/product/f23ea8101f27e579bc36_595556e1b27a4a74986f7d90fff33c38_master.jpg",
      price: "220.000",
    },
    {
      id: 2,
      name: "LIVERSAM (SÂM GIẢI ĐỘC GAN)",
      image:
        "https://product.hstatic.net/1000347556/product/sasamviet_-_liversam_9d3fe83ec63b4cfb91513ab448ae604f_master.jpg",
      price: "558.000",
    },
  ];

  return (
    <div className="container">
      <SubHeader />

      {/*begin::Aside*/}
      <Row>
        <Col className="col-xxl-3" md="12">
          <Row>
            <Col md="6" lg="12" xl="6" className="col-xxl-12">
              <NewProducts listNewProduct={listNewProduct} />
            </Col>
            <Col md="6" lg="12" xl="6" className="col-xxl-12">
              <RecentProducts listNewProduct={listNewProduct} />
            </Col>
          </Row>
        </Col>
        <Col md="12" className="col-xxl-9">
          <ShoppingCard />
          <RelatedProducts />
        </Col>
      </Row>
    </div>
  );
};

export default MyCart;
