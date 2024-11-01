import deviceImageRender from "../../../utils/deviceImageRender";
import $ from "jquery";

function ProductInfo({
  setModalData,
  setShowOrderCancelFlag,
  // showOrderCancelFlag,
  // modalType,
  setModalType,
  orderItem,
  ongoingOrder,
}) {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-4">
        <div className="order-img">
          <img src={deviceImageRender(orderItem?.listing_image)} alt="" />
        </div>
      </div>
      <div className="col-lg-9 col-md-5 col-8 pds-0">
        <h4>{orderItem?.product_name}</h4>
        <h2>{orderItem?.amount}</h2>
        <div class="order-flex">
          <div class="order-qty">
            <h5>Qty: {orderItem?.quantity}</h5>
            {/* {orderItem?.shipment_number ? ( */}
            {orderItem?.order_status === "Shipping" ? (
              <h3>
                {orderItem?.shipment_number_title} :{" "}
                {orderItem?.shipment_number}
              </h3>
            ) : null}
          </div>
          {/* ) : null} */}
          <div class="request-ret">
            {ongoingOrder?.order_status === "Ordered" ||
            ongoingOrder?.order_status === "Processing" ||
            ongoingOrder?.order_cancellation_status === 2 ? (
              <h3
                style={{
                  cursor: "pointer",
                  "text-decoration":
                    ongoingOrder?.order_cancellation_status == 2
                      ? "none"
                      : null,
                }}
                onClick={() => {
                  if (ongoingOrder?.order_cancellation_status == 1) {
                    setShowOrderCancelFlag(true);
                    setModalType("cancel");
                    setModalData({
                      ongoingOrder: ongoingOrder,
                      orderItem: orderItem,
                    });
                    $("#orderCancelModal").toggle();
                    $("#orderCancelModal").toggleClass("modal fade modal");
                  }
                }}
              >
                {ongoingOrder?.order_cancellation_text}
              </h3>
            ) : null}
            {/* Return Datas */}

            {ongoingOrder?.order_status === "Delivery" ? (
              <h3
                style={{
                  position: "relative",
                  // bottom: "-66px",
                  "text-decoration":
                    ongoingOrder?.return_status === "Request Return" ||
                    ongoingOrder?.return_status === ""
                      ? null
                      : "none",
                }}
                onClick={() => {
                  if (
                    ongoingOrder?.return_status === "Request Return" ||
                    ongoingOrder?.return_status === ""
                  ) {
                    setShowOrderCancelFlag(true);
                    setModalType("return");
                    setModalData({
                      ongoingOrder: ongoingOrder,
                      orderItem: orderItem,
                    });
                    $("#orderCancelModal").toggle();
                    $("#orderCancelModal").toggleClass("modal fade modal");
                  }
                }}
              >
                {ongoingOrder?.return_status || "Request Return"}
              </h3>
            ) : null}
            {ongoingOrder?.return_option ? (
              <>
                <h3 style={{ "text-decoration": "none" }}>
                  {ongoingOrder?.return_message}
                </h3>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductInfo;
