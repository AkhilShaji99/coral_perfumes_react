import React from "react";
import BagEmptyImg from "./img/bag-empty.png";
function BagEmpty(cartEmptyMessages=[]) {
  return (
    <div>
      <div className="row align-items-center justify-content-center alert-box-bag-empty">
        <div className="col-md-8 text-center">
          <img src={BagEmptyImg} className="img-fluid" alt="Coral Perfumes" />
          <h1>Your Bag is Empty</h1>
          <h5>
            <span>
              <svg
                width={18}
                height={24}
                viewBox="0 0 18 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_827_19046)">
                  <path
                    d="M9.71578 3.47872L3.56929 11.0095C3.5416 11.0434 3.52365 11.0842 3.51738 11.1275C3.5111 11.1708 3.51673 11.215 3.53366 11.2554C3.55059 11.2957 3.57818 11.3307 3.61348 11.3566C3.64878 11.3824 3.69045 11.3982 3.73402 11.4021L8.09544 11.8048C8.1371 11.8086 8.17703 11.8233 8.21132 11.8472C8.2456 11.8712 8.27307 11.9037 8.29102 11.9415C8.30898 11.9793 8.3168 12.0211 8.31372 12.0628C8.31063 12.1045 8.29676 12.1448 8.27345 12.1795L2.86703 20.233C2.71036 20.4665 3.01169 20.7338 3.22464 20.5501L14.2208 11.0724C14.2551 11.0425 14.2803 11.0035 14.2934 10.9599C14.3066 10.9162 14.3071 10.8698 14.2949 10.8259C14.2828 10.782 14.2585 10.7425 14.2248 10.7118C14.1912 10.6812 14.1495 10.6607 14.1047 10.6527L9.06375 9.77128C9.01871 9.76339 8.97685 9.74286 8.94304 9.71209C8.90923 9.68131 8.88486 9.64156 8.87276 9.59746C8.86066 9.55336 8.86134 9.50673 8.87472 9.463C8.8881 9.41926 8.91362 9.38023 8.94832 9.35044L15.8965 3.3933C15.9347 3.36022 15.9615 3.316 15.9732 3.26688C15.9848 3.21775 15.9808 3.16621 15.9616 3.11951C15.9425 3.07281 15.9091 3.03331 15.8663 3.00658C15.8235 2.97985 15.7734 2.96724 15.723 2.97053L9.8853 3.39059C9.85254 3.39296 9.82061 3.402 9.79146 3.41716C9.76231 3.43231 9.73656 3.45326 9.71578 3.47872Z"
                    fill="url(#paint0_linear_827_19046)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_827_19046"
                    x1="12.7223"
                    y1="-9.23435"
                    x2="0.446289"
                    y2="48.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFE08B" />
                    <stop offset={1} stopColor="#FF0000" />
                  </linearGradient>
                  <clipPath id="clip0_827_19046">
                    <rect
                      width="10.0948"
                      height="20.9107"
                      fill="white"
                      transform="translate(7.49805) rotate(19.7114)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Start exploring Now!
            <span>
              <svg
                width={18}
                height={24}
                viewBox="0 0 18 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_827_19046)">
                  <path
                    d="M9.71578 3.47872L3.56929 11.0095C3.5416 11.0434 3.52365 11.0842 3.51738 11.1275C3.5111 11.1708 3.51673 11.215 3.53366 11.2554C3.55059 11.2957 3.57818 11.3307 3.61348 11.3566C3.64878 11.3824 3.69045 11.3982 3.73402 11.4021L8.09544 11.8048C8.1371 11.8086 8.17703 11.8233 8.21132 11.8472C8.2456 11.8712 8.27307 11.9037 8.29102 11.9415C8.30898 11.9793 8.3168 12.0211 8.31372 12.0628C8.31063 12.1045 8.29676 12.1448 8.27345 12.1795L2.86703 20.233C2.71036 20.4665 3.01169 20.7338 3.22464 20.5501L14.2208 11.0724C14.2551 11.0425 14.2803 11.0035 14.2934 10.9599C14.3066 10.9162 14.3071 10.8698 14.2949 10.8259C14.2828 10.782 14.2585 10.7425 14.2248 10.7118C14.1912 10.6812 14.1495 10.6607 14.1047 10.6527L9.06375 9.77128C9.01871 9.76339 8.97685 9.74286 8.94304 9.71209C8.90923 9.68131 8.88486 9.64156 8.87276 9.59746C8.86066 9.55336 8.86134 9.50673 8.87472 9.463C8.8881 9.41926 8.91362 9.38023 8.94832 9.35044L15.8965 3.3933C15.9347 3.36022 15.9615 3.316 15.9732 3.26688C15.9848 3.21775 15.9808 3.16621 15.9616 3.11951C15.9425 3.07281 15.9091 3.03331 15.8663 3.00658C15.8235 2.97985 15.7734 2.96724 15.723 2.97053L9.8853 3.39059C9.85254 3.39296 9.82061 3.402 9.79146 3.41716C9.76231 3.43231 9.73656 3.45326 9.71578 3.47872Z"
                    fill="url(#paint0_linear_827_19046)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_827_19046"
                    x1="12.7223"
                    y1="-9.23435"
                    x2="0.446289"
                    y2="48.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFE08B" />
                    <stop offset={1} stopColor="#FF0000" />
                  </linearGradient>
                  <clipPath id="clip0_827_19046">
                    <rect
                      width="10.0948"
                      height="20.9107"
                      fill="white"
                      transform="translate(7.49805) rotate(19.7114)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </h5>
          <p>
            Browse our vast collection of products and fill it with<br/> items that
            catch your eye
          </p>
        </div>
      </div>
    </div>
  );
}

export default BagEmpty;