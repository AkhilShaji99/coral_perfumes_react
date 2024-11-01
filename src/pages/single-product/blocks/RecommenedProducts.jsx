import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductDetails from "../../common/ProductDetails";

function RecommendedProducts({ componentDatas, rec_section_title }) {
  return (
    <>
      <div className="container-lg-fluid my-5">
        <div
          className="card rec-products-container mb-5"
          //   style={dynamicBackground}
        >
          <h3 className="mb-5 flash-sale text-center">{rec_section_title}</h3>
          <Carousel
            additionalTransfrom={0}
            autoPlay={false}
            arrows
            autoPlaySpeed={3500}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={-10000}
            pauseOnHover={false}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 1024,
                  min: 0,
                },
                items: 2.5,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1025,
                  min: 464,
                },
                items: 3,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
          >
            {componentDatas?.map((product, index) => {
              return (
                <div className="product-grid" key={index}>
                  <div className="product-grid carousel-product-margin">
                    <ProductDetails
                      product={{
                        id: product?.id,
                        discount_percentage: product?.discount_percentage,
                        name: product?.name,
                        original_amount: product?.original_amount,
                        price_amount: product?.price_amount,
                        listing_image: product?.listing_image,
                        slug: product?.slug,
                        product_tag: product?.product_tag,
                        is_in_wishlist: product?.is_in_wishlist,
                        currency_code: product?.currency_code,
                        stock_status: product?.stock_flag,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default RecommendedProducts;
