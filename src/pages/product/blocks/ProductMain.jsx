import ProductBanner from "./ProductBanner";
import request from "../../../utils/request";
import { useState, useRef, useEffect } from "react";
import ThreeCol from "../../../assets/img/icons/3-item.svg";
import ThreeColActive from "../../../assets/img/icons/3-item-active.svg";
import FourCol from "../../../assets/img/icons/4-item.svg";
import FourColActive from "../../../assets/img/icons/4-item-active.svg";
import CustomDropdown from "./CustomDropdown";
import ProductDetails from "../../common/ProductDetails";
import FilterMob from "../../../assets/img/icons/filter-mob.svg";
import getUserToken from "../../../utils/userToken";
import { useParams } from "react-router-dom";
import { changeFooterDatas } from "../../../redux/footer/footerSlice";
import { changeApiCallStatus } from "../../../redux/footer/footerSlice";
import { useDispatch } from "react-redux";

function ProductMain({
  filterArray,
  passingDataToParent,
  priceRangeFilter,
  passPageToParent,
}) {
  const urlParams = useParams([]);
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [scrollStatus, setScrollStatus] = useState(false);
  const [productLayout, setProductLayout] = useState("col-md-4 col-6");
  const [relevanceFilter, setRelevanceFilter] = useState("");

  const targetElementRef = useRef(null);

  useEffect(() => {
    if (count !== 0 && count !== productList.length) {
      setPage((page) => page + 1);
      passPageToParent(page);
    }
  }, [scrollStatus]);

  useEffect(() => {
    if (count !== 0 && count !== productList.length) {
      getProductList(page);
    }
    passPageToParent(page);
  }, [page]);

  useEffect(() => {
    const targetElement = targetElementRef.current;
    // Create the Intersection Observer
    const options = {
      root: null,
      rootMargin: '300px 0px',
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && target.intersectionRatio > 0) {
        setScrollStatus((scrollStatus) => !scrollStatus);
      }
    }, options);

    // Attach the observer to the target element
    if (targetElement) {
      observer.observe(targetElement);
    }
    // Cleanup observer on component unmount
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  useEffect(() => {
    setProductList([]);
    setCount(0);
    setPage(1);
    getProductList(1);
  }, [window.location.href, filterArray, priceRangeFilter, relevanceFilter]);

  const getProductList = async (page_number) => {
    try {
      if (urlParams?.link_type && urlParams?.link_value) {
        dispatch(changeApiCallStatus(false)); // Change api call status
        const response = await request.post(
          "productsbycategory/" +
            urlParams?.link_type +
            "/" +
            urlParams?.link_value,
          {
            page: page_number,
            filterArray,
            priceRange: priceRangeFilter,
            sortRelevance: relevanceFilter,
            token: getUserToken(),
            slug_items: window.location.pathname.includes(
              "/products/search/items"
            )
              ? localStorage.getItem("link_items")
              : "",
          }
        );
        if (response?.data) {
          setCount(response?.data?.total_count);
          passingDataToParent(
            response?.data?.minimum_price,
            response?.data?.maximum_price
          );
          if (response?.data?.data) {
            setProductList((prev) => [
              ...new Set([...prev, ...response?.data?.data]),
            ]);
          }
          dispatch(changeFooterDatas(response?.data?.footer_data)); //Add footer datas to redux
          dispatch(changeApiCallStatus(true)); // Change api call status
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <section className="">
        <ProductBanner />
        <div className="mt-4">
          <div className="container-fluid px-0 mb-5">
            <div className="row sortHeader">
              <div className="col-md-5">
                <h5>Brands</h5>
              </div>
              <div className="col-md-7 text-end">
                <div className="row align-items-center d-space-around">
                  <div className="col-md-1 d-none d-sm-block sort-icon">
                    {productLayout === "col-md-4 col-6" ? (
                      <img src={ThreeColActive} alt="Coral" />
                    ) : (
                      <img
                        src={ThreeCol}
                        alt="Coral"
                        onClick={() => {
                          setProductLayout("col-md-4 col-6");
                        }}
                      />
                    )}
                  </div>
                  <div className="col-md-1 d-none d-sm-block sort-icon">
                    {productLayout === "col-md-3 col-6" ? (
                      <img src={FourColActive} alt="Coral" />
                    ) : (
                      <img
                        src={FourCol}
                        alt="Coral"
                        onClick={() => {
                          setProductLayout("col-md-3 col-6");
                        }}
                      />
                    )}
                  </div>
                  <div className="col-6 d-lg-none pr-0">
                    <div>
                      <a
                        className="btn btn-filter w-100"
                        data-bs-toggle="offcanvas"
                        href="#offcanvasCategory"
                        role="button"
                        aria-controls="offcanvasCategory"
                      >
                        Filters{" "}
                        <span>
                          {" "}
                          <img src={FilterMob} alt="" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col-md-3 col-6">
                    <CustomDropdown applyRelevanceFilter={setRelevanceFilter} />
                  </div>
                  <div className="col-md-3 col-12">
                    <h6>{count} Items</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {productList.map((product, index) => {
            return (
              <div className={productLayout} key={index}>
                <div className="product-grid">
                  <ProductDetails product={product} />
                </div>
              </div>
            );
          })}
          <div
            ref={targetElementRef}
            style={{
              width: "100%",
              height: "300px",
              marginTop: "-750px",
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
export default ProductMain;
