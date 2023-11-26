import deviceImageRender from "../../utils/deviceImageRender";
import AddToBag from "./AddToBag";
import WishlistIcon from "../wishlist/blocks/WishlistIcon";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function ProductDetails({ product, setReFetchApi = null }) {
  const [status, setStatus] = useState(false);

  return (
    <>
      <div className="card border-0 card-product">
        <div className="card-body product-box">
          {product?.product_tag ? (
            <span className="badge custom-badge2" style={{backgroundColor:product?.product_tag_color}}>
              {/* {product?.discount_percentage}% */}
              {product?.product_tag}
            </span>
          ) : null}
          <WishlistIcon
            product_slug={product?.slug}
            is_in_wishlist={product?.is_in_wishlist}
            changeWishlistStatus={() => {
              product.is_in_wishlist = !product?.is_in_wishlist;
              setStatus(!status);
              if (status === false && setReFetchApi != null) {
                setReFetchApi(true);
              }
            }}
          />
          <div className="text-center position-relative ">
            <NavLink to={`/product-details/?slug=${product?.slug}`}>
              <div className="product-img">
                <img
                  src={deviceImageRender(product.listing_image)}
                  alt="Coral Perfumes"
                  className="img-fluid"
                />
              </div>
            </NavLink>
          </div>
          <AddToBag variant_id={product?.id} />
        </div>
        <div className="card-footer border-0">
          <h4
            className="ellipsis-text {
"
          >
            {product.name}
          </h4>
          <div className="row custom-row1 mb-5 ">
            <div className="col-md-4 col-6 px-0">
              <h5 className="selling-price">
                {product?.currency_code} {product.price_amount}
              </h5>
            </div>
            <div className="col-md-4 col-6 px-0">
              <h5 className="discounted-price">
                {product?.currency_code} {product.original_amount}
              </h5>
            </div>
            <div className="col-md-4 px-0">
              <h5 className="discount-percentage">
                {product.discount_percentage}% off
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
