import deviceImageRender from "../../../utils/deviceImageRender";

function ProductInfo({orderItem}) {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="order-img">
          <img src={deviceImageRender(orderItem?.listing_image)} alt="" />
        </div>
      </div>
      <div className="col-md-5">
        <h4>{orderItem?.product_name}</h4>
        <h2>{orderItem?.amount}</h2>
        <h5>Qty: {orderItem?.quantity}</h5>
        {orderItem?.shipment_number ? (
          <h3>Shipment : {orderItem?.shipment_number}</h3>
        ) : null}
      </div>
      <div className="col-md-4 text-lg-end">
        <h3>Tax invoice</h3>
        <h3 style={{ position: "relative", bottom: "-66px" }}>
          Request Cancellation
        </h3>
      </div>
    </div>
  );
}
export default ProductInfo;