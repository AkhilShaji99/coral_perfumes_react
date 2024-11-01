import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CountDownTimer from "./CountDownTimer";
import { useState, useEffect } from "react";
import flashSale from "../../../assets/img/flash/flash-sale.gif";
import FlashSaleSliderDatas from "../sliderDatas/FlashSaleSliderDatas";
import Slider from "react-slick";

function FlashSale({ componentDatas }) {
  const dynamicBackground = {
    background: componentDatas?.bg_color,
  };
  //Code for timer
  const [falseSaleEnd, setFlashSaleEnd] = useState(false);

  const products = componentDatas?.datas?.[0]?.products;
  const timeEnd = componentDatas?.datas?.[0]?.end_time;
  // const timeEnd = "2024-04-26T19:13:00+04:00";

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 0.5,
    swipeToSlide: true, // Allow swipe to slide
    swipe: true, // Enable touch swipe
    touchThreshold: 10, // Adjust touch threshold for smoother scrolling
    responsive: [
      {
        breakpoint: 768, // Tablet and mobile view
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCountdownEnd = () => {
    setFlashSaleEnd(true);
  };

  return (
    <>
      {!falseSaleEnd ? (
        <div className="container-lg-fluid cc-margin">
          <div className="card flash-sale-container" style={dynamicBackground}>
            <div className="d-block d-sm-none">
              <div className="row align-items-center mb-5 ">
                <div className="col-6">
                  <h1 className=" flash-sale">
                    {" "}
                    <span>
                      <img
                        src={flashSale}
                        width={25}
                        height={25}
                        alt="Coral Perfumes"
                        className="flash-sale-gif"
                      />
                    </span>
                    {componentDatas.title}{" "}
                    <span>
                      <img
                        src={flashSale}
                        width={25}
                        height={25}
                        alt="Coral Perfumes"
                        className="flash-sale-gif"
                      />
                    </span>
                  </h1>
                </div>
                <div className="col-4">
                  <div className="row align-items-center">
                    <div className="col-5 text-end px-0">
                      <span className="timer-text">Ends In</span>{" "}
                    </div>
                    <div className="col-6 px-0">
                      <CountDownTimer
                        timeEnd={timeEnd}
                        handleCountdownEnd={handleCountdownEnd}
                      />
                      {/* <CountdownTimer
                        className="digital-text"
                        responsive={true}
                        hideDay={true}
                        size={25}
                        count={counterValue}
                        onEnd={() => {
                          setFlashSaleEnd(true);
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
            <div className="d-none d-xl-block">
              <div className="row d-end">
                <div className="col-md-8 col-12">
                  <div className="row align-items-center mb-4">
                    <div className="col-md-6 col-6">
                      <h1 className=" flash-sale">
                        {" "}
                        <span>
                          <img
                            src={flashSale}
                            width={25}
                            height={25}
                            alt="Coral Perfumes"
                          />
                        </span>
                        {componentDatas.title}{" "}
                        <span>
                          <img
                            src={flashSale}
                            width={25}
                            height={25}
                            alt="Coral Perfumes"
                          />
                        </span>
                      </h1>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="row align-items-center d-end">
                        <div className="col-md-5  pr-0 text-end">
                          <span className="timer-text">Ends In</span>{" "}
                        </div>
                        <div className="col-md-5">
                          <CountDownTimer
                            timeEnd={timeEnd}
                            handleCountdownEnd={handleCountdownEnd}
                          />
                          {/* <CountdownTimer
                            // className="digital-text"
                            responsive={true}
                            hideDay={true}
                            size={25}
                            count={counterValue}
                            onEnd={() => {
                              setFlashSaleEnd(true);
                            }}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desktop_slider">
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
                      max: 464,
                      min: 0,
                    },
                    items: 2.5,
                    partialVisibilityGutter: 20,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
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
                {products.map((product, index) => {
                  return (
                    <FlashSaleSliderDatas product={product} index={index} />
                  );
                })}
              </Carousel>
            </div>
            <div className="mob_tab_slider">
              <Slider {...settings} className="prod-carosal-mob-padding">
                {products.map((product, index) => {
                  return (
                    <FlashSaleSliderDatas product={product} index={index} />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default FlashSale;
