import MastercardIcon from "../../../assets/img/icons/payment/mastercard.svg";

function PaymentTypes({
  paymentTypes,
  activePaymentType,
  fetchCheckoutDetailsForPaymentType,
}) {
  return (
    <div className="accordion-item checkout-accordion">
      <div className="d-flex justify-content-between align-items-center h">
        {/* heading one */}

        <h4 className="pt-3 ps-3 "> PAYMENT TYPE</h4>

        <a
          href="#"
          className="fs-5 text-inherit collapsed h4"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFive"
          aria-expanded="true"
          aria-controls="flush-collapseFive"
        >
          <button type="button" class="btn btn-default">
            <span class="accordion-arrow">
              <svg
                width={18}
                height={9}
                viewBox="0 0 18 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.07992 8.04999L7.59992 1.52999C8.36992 0.759988 9.62992 0.759988 10.3999 1.52999L16.9199 8.04999"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </a>
        {/* btn */}

        {/* collapse */}
      </div>
      <div
        id="flush-collapseFive"
        className="accordion-collapse collapse show "
        data-bs-parent="#accordionFlushExample"
      >
        <div className="mb-1">
          {/* card body */}
          <div className="card-body p-1">
            {paymentTypes?.map((paymentType, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-md-4 col-12">
                    {/* input */}
                    <div className="mb-3 mb-lg-0">
                      <div className="card-body p-3">
                        {/* check input */}
                        <div className="d-flex">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value={paymentType?.id}
                              checked={activePaymentType === paymentType?.id}
                              name="payment_type"
                              onChange={(event) => {
                                fetchCheckoutDetailsForPaymentType(
                                  event.target.value
                                );
                              }}
                            />
                          </div>
                          <div>
                            {/* title */}
                            <h5 className=" pt-1 ps-5 h6">
                              {paymentType?.name}
                            </h5>
                            {paymentType?.display_title ? (
                              <span>: {paymentType?.display_title}</span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    {/* input */}
                    <div className="card-body pt-3">
                      <img src={MastercardIcon} alt="Mastercard" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaymentTypes;
