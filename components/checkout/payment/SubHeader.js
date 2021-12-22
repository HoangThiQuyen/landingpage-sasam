import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Link from "next/link";

const SubHeader = () => {
  return (
    <div
      className="subheader py-3 py-lg-8 subheader-transparent"
      id="kt_subheader"
    >
      <div className="d-flex w-100 align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        {/*begin::Info*/}
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/"> Sản phẩm </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/my-cart"> Giỏ hàng </Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>
            <span> Thanh toán </span>
          </BreadcrumbItem>
        </Breadcrumb>
        {/*end::Info*/}
      </div>
    </div>
  );
};

export default SubHeader;
