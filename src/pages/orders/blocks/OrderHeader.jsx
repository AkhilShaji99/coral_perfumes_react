import { Link } from "react-router-dom";

function OrderHeader({ ongoingOrder, orderType = null }) {
  return (
    <div className="row order-middle-row align-items-center">
      <div className="col-md-6 col-6 prd-0 pds-0">
        <h3>
          Order No: {ongoingOrder?.order_no}{" "}
          <span>(Item: {ongoingOrder?.items_count})</span>
        </h3>
        {orderType === null ? (
          <h4>
            <Link to={"/order-details?order_id=" + ongoingOrder?.order_no}>
              View Details
            </Link>
          </h4>
        ) : null}
      </div>
      <div className="col-md-6 col-6 text-lg-end pds-0">
        <p>{ongoingOrder?.order_date}</p>
        <p>{ongoingOrder?.expected_delivery_date}</p>
      </div>
    </div>
  );
}
export default OrderHeader;
