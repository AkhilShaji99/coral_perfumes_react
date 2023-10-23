import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import deviceImageRender from "../../../utils/deviceImageRender";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

function CategoryTop({ componentDatas }) {
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true, // Enable auto-sliding
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Tablet and mobile view
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4.5,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-lg-fluid cd-margin">
        <div className="category-top" style={dynamicBackground}>
          <h1 className="mb-5">{componentDatas?.title}</h1>
          <div >
            <Carousel
              removeClippedSubviews={true}
              additionalTransfrom={0}
              autoPlay={false}
              arrows={false}
              autoPlaySpeed={3500}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable={true}
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              partialVisible
              keyBoardControl
              minimumTouchDrag={-10000}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 6,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 3,
                  partialVisibilityGutter: 20,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 4,
                  partialVisibilityGutter: 10,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={3}
              swipeable={true}
            >
              {componentDatas.datas?.map((category, index) => {
                return (
                  <div className="category-top-img" key={index}>
                    {/* <NavLink to={category?.link}> */}
                    <img
                      src={deviceImageRender(
                        category?.desktop_image,
                        category?.mobile_image
                      )}
                      alt={category?.image_alt}
                    />
                    <h3 className="text-dark py-3">{category?.title}</h3>
                    {/* </NavLink> */}
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <Slider {...settings}>
              {componentDatas.datas?.map((category, index) => {
                return (
                  <div className="category-top-img" key={index}>
                    {/* <NavLink to={category?.link}> */}
                    <img
                      src={deviceImageRender(
                        category?.desktop_image,
                        category?.mobile_image
                      )}
                      alt={category?.image_alt}
                    />
                    <h3 className="text-dark py-3">{category?.title}</h3>
                    {/* </NavLink> */}
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryTop;
