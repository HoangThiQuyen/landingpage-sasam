import NewProducts from "../../components/checkout/cart/NewProducts";
import SubHeader from "../../components/checkout/cart/SubHeader";
import RecentProducts from "../../components/checkout/cart/RecentProducts";
import ShoppingCard from "../../components/checkout/cart/ShoppingCard";
import RelatedProducts from "../../components/checkout/cart/RelatedProducts";
import { Col, Row } from "reactstrap";
import product1 from "../../public/cart/product-1.jpg";

const MyCart = () => {
  const listNewProduct = [
    {
      id: 1,
      name: "SARMENTOSA IMMUNE SUPPORT (75 ML) (BỔ PHẾ HÓA ĐỜM)",
      image: product1,
      price: "220.000",
    },
    {
      id: 2,
      name: "LIVERSAM (SÂM GIẢI ĐỘC GAN)",
      image: product1,
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
