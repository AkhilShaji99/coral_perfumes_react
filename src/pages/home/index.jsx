import MainBanner from "./blocks/MainBanner";
import Deals from "./blocks/Deals";
import TopCategories from "./blocks/TopCategories";
import ShopMore from "./blocks/ShopMore";
import AdsBlock from "./blocks/AdsBlock";
import ShopPreferences from "./blocks/ShopPreferences";
import FlashSale from "./blocks/FlashSale";

function Index() {
  return (
    <>
      <main>
        <MainBanner/>
        <section className="bg-middle">
          <FlashSale/>
          <Deals />
          <TopCategories />
          <ShopPreferences/>
          <AdsBlock/>
          <ShopMore/>
        </section>
        {/* Category Section Start*/}
        <section className="mb-lg-10 mt-lg-14 my-8 d-none">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-6">
                <h3 className="mb-0">Featured Categories</h3>
              </div>
            </div>
            <div className="category-slider ">
              <div className="item">
                {" "}
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-dairy-bread-eggs.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                      />
                      <div className="text-truncate">
                        Dairy, Bread &amp; Eggs
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                {" "}
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-snack-munchies.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3"
                      />
                      <div className="text-truncate">Snack &amp; Munchies</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                {" "}
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-bakery-biscuits.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3"
                      />
                      <div className="text-truncate">Bakery &amp; Biscuits</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                {" "}
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-instant-food.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3"
                      />
                      <div className="text-truncate">Instant Food</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                {" "}
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-tea-coffee-drinks.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3"
                      />
                      <div className="text-truncate">
                        Tea, Coffee &amp; Drinks
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-atta-rice-dal.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3"
                      />
                      <div className="text-truncate">Atta, Rice &amp; Dal</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                {" "}
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-baby-care.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3"
                      />
                      <div className="text-truncate">Baby Care</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                {" "}
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-chicken-meat-fish.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3"
                      />
                      <div className="text-truncate">
                        Chicken, Meat &amp; Fish
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                {" "}
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-cleaning-essentials.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3"
                      />
                      <div className="text-truncate">Cleaning Essentials</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                {" "}
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src="assets/images/category/category-pet-care.jpg"
                        alt="Grocery Ecommerce Template"
                        className="mb-3"
                      />
                      <div className="text-truncate">Pet Care</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Category Section End*/}
        <section className="d-none">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mb-3 mb-lg-0">
                <div>
                  <div
                    className="py-10 px-8 rounded"
                    style={{
                      background:
                        "url(assets/images/banner/grocery-banner.png)no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div>
                      <h3 className="fw-bold mb-1">Fruits &amp; Vegetables</h3>
                      <p className="mb-4">
                        Get Upto <span className="fw-bold">30%</span> Off
                      </p>
                      <a href="#!" className="btn btn-dark">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div>
                  <div
                    className="py-10 px-8 rounded"
                    style={{
                      background:
                        "url(assets/images/banner/grocery-banner-2.jpg)no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div>
                      <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                      <p className="mb-4">
                        Get Upto <span className="fw-bold">25%</span> Off
                      </p>
                      <a href="#!" className="btn btn-dark">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Products Start*/}
        <section className="my-lg-14 my-8 d-none">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-6">
                <h3 className="mb-0">Popular Products</h3>
              </div>
            </div>
            <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative ">
                      <div className=" position-absolute top-0 start-0">
                        <span className="badge bg-danger">Sale</span>
                      </div>
                      <a href="#!">
                        {" "}
                        <img
                          src="assets/images/products/product-img-1.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Snack &amp; Munchies</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Haldiram's Sev Bhujia
                      </a>
                    </h2>
                    <div>
                      <small className="text-warning">
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>{" "}
                      <span className="text-muted small">4.5(149)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">$18</span>{" "}
                        <span className="text-decoration-line-through text-muted">
                          $24
                        </span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      <div className=" position-absolute top-0 start-0">
                        <span className="badge bg-success">14%</span>
                      </div>
                      <a href="pages/shop-single.html">
                        <img
                          src="assets/images/products/product-img-2.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="pages/shop-wishlist.html"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Bakery &amp; Biscuits</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        NutriChoice Digestive{" "}
                      </a>
                    </h2>
                    <div className="text-warning">
                      <small>
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>{" "}
                      <span className="text-muted small">4.5 (25)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">$24</span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      {" "}
                      <a href="pages/shop-single.html">
                        <img
                          src="assets/images/products/product-img-3.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="pages/shop-wishlist.html"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Bakery &amp; Biscuits</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Cadbury 5 Star Chocolate
                      </a>
                    </h2>
                    <div className="text-warning">
                      <small>
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </small>{" "}
                      <span className="text-muted small">5 (469)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">$32</span>{" "}
                        <span className="text-decoration-line-through text-muted">
                          $35
                        </span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      {" "}
                      <a href="pages/shop-single.html">
                        <img
                          src="assets/images/products/product-img-4.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="pages/shop-wishlist.html"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                      <div className=" position-absolute top-0 start-0">
                        <span className="badge bg-danger">Hot</span>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Snack &amp; Munchies</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Onion Flavour Potato
                      </a>
                    </h2>
                    <div className="text-warning">
                      <small>
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                        <i className="bi bi-star" />
                      </small>{" "}
                      <span className="text-muted small">3.5 (456)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">$3</span>{" "}
                        <span className="text-decoration-line-through text-muted">
                          $5
                        </span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      {" "}
                      <a href="pages/shop-single.html">
                        <img
                          src="assets/images/products/product-img-5.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="pages/shop-wishlist.html"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Instant Food</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Salted Instant Popcorn{" "}
                      </a>
                    </h2>
                    <div className="text-warning">
                      <small>
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>{" "}
                      <span className="text-muted small">4.5 (39)</span>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <div>
                        <span className="text-dark">$13</span>{" "}
                        <span className="text-decoration-line-through text-muted">
                          $18
                        </span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative ">
                      <div className=" position-absolute top-0 start-0">
                        <span className="badge bg-danger">Sale</span>
                      </div>
                      <a href="#!">
                        {" "}
                        <img
                          src="assets/images/products/product-img-6.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="pages/shop-wishlist.html"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Dairy, Bread &amp; Eggs</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Blueberry Greek Yogurt
                      </a>
                    </h2>
                    <div>
                      <small className="text-warning">
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>{" "}
                      <span className="text-muted small">4.5 (189)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">$18</span>{" "}
                        <span className="text-decoration-line-through text-muted">
                          $24
                        </span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      {" "}
                      <a href="pages/shop-single.html">
                        <img
                          src="assets/images/products/product-img-7.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="pages/shop-wishlist.html"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Dairy, Bread &amp; Eggs</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Britannia Cheese Slices
                      </a>
                    </h2>
                    <div className="text-warning">
                      <small>
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </small>{" "}
                      <span className="text-muted small">5 (345)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">$24</span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      {" "}
                      <a href="pages/shop-single.html">
                        <img
                          src="assets/images/products/product-img-8.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="pages/shop-wishlist.html"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Instant Food</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Kellogg's Original Cereals
                      </a>
                    </h2>
                    <div className="text-warning">
                      <small>
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>{" "}
                      <span className="text-muted small">4 (90)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">$32</span>{" "}
                        <span className="text-decoration-line-through text-muted">
                          $35
                        </span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      {" "}
                      <a href="pages/shop-single.html">
                        <img
                          src="assets/images/products/product-img-9.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="pages/shop-wishlist.html"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Snack &amp; Munchies</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Slurrp Millet Chocolate{" "}
                      </a>
                    </h2>
                    <div className="text-warning">
                      <small>
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>{" "}
                      <span className="text-muted small">4.5 (67)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">$3</span>{" "}
                        <span className="text-decoration-line-through text-muted">
                          $5
                        </span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      {" "}
                      <a href="pages/shop-single.html">
                        <img
                          src="assets/images/products/product-img-10.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid"
                        />
                      </a>
                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </a>
                        <a
                          href="pages/shop-wishlist.html"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart" />
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <a href="#!" className="text-decoration-none text-muted">
                        <small>Dairy, Bread &amp; Eggs</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Amul Butter - 500 g
                      </a>
                    </h2>
                    <div className="text-warning">
                      <small>
                        {" "}
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                        <i className="bi bi-star" />
                      </small>{" "}
                      <span className="text-muted small">3.5 (89)</span>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <div>
                        <span className="text-dark">$13</span>{" "}
                        <span className="text-decoration-line-through text-muted">
                          $18
                        </span>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-primary btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Products End*/}
        <section className="d-none">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-6">
                <h3 className="mb-0">Daily Best Sells</h3>
              </div>
            </div>
            <div className="table-responsive-xl pb-6">
              <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap">
                <div className="col">
                  <div
                    className=" pt-8 px-6 px-xl-8 rounded"
                    style={{
                      background:
                        "url(assets/images/banner/banner-deal.jpg)no-repeat",
                      backgroundSize: "cover",
                      height: 470,
                    }}
                  >
                    <div>
                      <h3 className="fw-bold text-white">
                        100% Organic Coffee Beans.
                      </h3>
                      <p className="text-white">
                        Get the best deal before close.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Shop Now{" "}
                        <i className="feather-icon icon-arrow-right ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center  position-relative ">
                        {" "}
                        <a href="pages/shop-single.html">
                          <img
                            src="assets/images/products/product-img-11.jpg"
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            href="#!"
                            className="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Quick View"
                            />
                          </a>
                          <a
                            href="#!"
                            className="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            href="#!"
                            className="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          href="#!"
                          className="text-decoration-none text-muted"
                        >
                          <small>Tea, Coffee &amp; Drinks</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          href="pages/shop-single.html"
                          className="text-inherit text-decoration-none"
                        >
                          Roast Ground Coffee
                        </a>
                      </h2>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$13</span>{" "}
                          <span className="text-decoration-line-through text-muted">
                            $18
                          </span>
                        </div>
                        <div>
                          <small className="text-warning">
                            {" "}
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span>
                            <small>4.5</small>
                          </span>
                        </div>
                      </div>
                      <div className="d-grid mt-2">
                        <a href="#!" className="btn btn-primary ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add to cart{" "}
                        </a>
                      </div>
                      <div className="d-flex justify-content-start text-center mt-3">
                        <div
                          className="deals-countdown w-100"
                          data-countdown="2028/10/10 00:00:00"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center  position-relative ">
                        {" "}
                        <a href="pages/shop-single.html">
                          <img
                            src="assets/images/products/product-img-12.jpg"
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            href="#!"
                            className="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Quick View"
                            />
                          </a>
                          <a
                            href="#!"
                            className="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            href="#!"
                            className="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          href="#!"
                          className="text-decoration-none text-muted"
                        >
                          <small>Fruits &amp; Vegetables</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          href="pages/shop-single.html"
                          className="text-inherit text-decoration-none"
                        >
                          Crushed Tomatoes
                        </a>
                      </h2>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$13</span>{" "}
                          <span className="text-decoration-line-through text-muted">
                            $18
                          </span>
                        </div>
                        <div>
                          <small className="text-warning">
                            {" "}
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span>
                            <small>4.5</small>
                          </span>
                        </div>
                      </div>
                      <div className="d-grid mt-2">
                        <a href="#!" className="btn btn-primary ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add to cart{" "}
                        </a>
                      </div>
                      <div className="d-flex justify-content-start text-center mt-3 w-100">
                        <div
                          className="deals-countdown w-100"
                          data-countdown="2028/12/9 00:00:00"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center  position-relative ">
                        {" "}
                        <a href="pages/shop-single.html">
                          <img
                            src="assets/images/products/product-img-13.jpg"
                            alt="Grocery Ecommerce Template"
                            className="mb-3 img-fluid"
                          />
                        </a>
                        <div className="card-product-action">
                          <a
                            href="#!"
                            className="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i
                              className="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Quick View"
                            />
                          </a>
                          <a
                            href="#!"
                            className="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Wishlist"
                          >
                            <i className="bi bi-heart" />
                          </a>
                          <a
                            href="#!"
                            className="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Compare"
                          >
                            <i className="bi bi-arrow-left-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-small mb-1">
                        <a
                          href="#!"
                          className="text-decoration-none text-muted"
                        >
                          <small>Fruits &amp; Vegetables</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          href="pages/shop-single.html"
                          className="text-inherit text-decoration-none"
                        >
                          Golden Pineapple
                        </a>
                      </h2>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">$13</span>{" "}
                          <span className="text-decoration-line-through text-muted">
                            $18
                          </span>
                        </div>
                        <div>
                          <small className="text-warning">
                            {" "}
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span>
                            <small>4.5</small>
                          </span>
                        </div>
                      </div>
                      <div className="d-grid mt-2">
                        <a href="#!" className="btn btn-primary ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                          >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add to cart{" "}
                        </a>
                      </div>
                      <div className="d-flex justify-content-start text-center mt-3">
                        <div
                          className="deals-countdown w-100"
                          data-countdown="2028/11/11 00:00:00"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-lg-14 my-8 d-none">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="mb-8 mb-xl-0">
                  <div className="mb-6">
                    <img src="assets/images/icons/clock.svg" alt="" />
                  </div>
                  <h3 className="h5 mb-3">10 minute grocery now</h3>
                  <p>
                    Get your order delivered to your doorstep at the earliest
                    from FreshCart pickup stores near you.
                  </p>
                </div>
              </div>
              <div className="col-md-6  col-lg-3">
                <div className="mb-8 mb-xl-0">
                  <div className="mb-6">
                    <img src="assets/images/icons/gift.svg" alt="" />
                  </div>
                  <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
                  <p>
                    Cheaper prices than your local supermarket, great cashback
                    offers to top it off. Get best pricess &amp; offers.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="mb-8 mb-xl-0">
                  <div className="mb-6">
                    <img src="assets/images/icons/package.svg" alt="" />
                  </div>
                  <h3 className="h5 mb-3">Wide Assortment</h3>
                  <p>
                    Choose from 5000+ products across food, personal care,
                    household, bakery, veg and non-veg &amp; other categories.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="mb-8 mb-xl-0">
                  <div className="mb-6">
                    <img src="assets/images/icons/refresh-cw.svg" alt="" />
                  </div>
                  <h3 className="h5 mb-3">Easy Returns</h3>
                  <p>
                    Not satisfied with a product? Return it at the doorstep
                    &amp; get a refund within hours. No questions asked
                    <a href="#!">policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Modal */}
      <div
        className="modal fade"
        id="quickViewModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-8">
              <div className="position-absolute top-0 end-0 me-3 mt-3">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  {/* img slide */}
                  <div className="product productModal" id="productModal">
                    <div
                      className="zoom"
                      onmousemove="zoom(event)"
                      style={{
                        backgroundImage:
                          "url(assets/images/products/product-single-img-1.jpg)",
                      }}
                    >
                      {/* img */}
                      <img
                        src="assets/images/products/product-single-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        className="zoom"
                        onmousemove="zoom(event)"
                        style={{
                          backgroundImage:
                            "url(assets/images/products/product-single-img-2.jpg)",
                        }}
                      >
                        {/* img */}
                        <img
                          src="assets/images/products/product-single-img-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="zoom"
                        onmousemove="zoom(event)"
                        style={{
                          backgroundImage:
                            "url(assets/images/products/product-single-img-3.jpg)",
                        }}
                      >
                        {/* img */}
                        <img
                          src="assets/images/products/product-single-img-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="zoom"
                        onmousemove="zoom(event)"
                        style={{
                          backgroundImage:
                            "url(assets/images/products/product-single-img-4.jpg)",
                        }}
                      >
                        {/* img */}
                        <img
                          src="assets/images/products/product-single-img-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* product tools */}
                  <div className="product-tools">
                    <div
                      className="thumbnails row g-3"
                      id="productModalThumbnails"
                    >
                      <div className="col-3">
                        <div className="thumbnails-img">
                          {/* img */}
                          <img
                            src="assets/images/products/product-single-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="thumbnails-img">
                          {/* img */}
                          <img
                            src="assets/images/products/product-single-img-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="thumbnails-img">
                          {/* img */}
                          <img
                            src="assets/images/products/product-single-img-3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="thumbnails-img">
                          {/* img */}
                          <img
                            src="assets/images/products/product-single-img-4.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ps-lg-8 mt-6 mt-lg-0">
                    <a href="#!" className="mb-4 d-block">
                      Bakery Biscuits
                    </a>
                    <h2 className="mb-1 h1">Napolitanke Ljesnjak</h2>
                    <div className="mb-4">
                      <small className="text-warning">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>
                      <a href="#" className="ms-2">
                        (30 reviews)
                      </a>
                    </div>
                    <div className="fs-4">
                      <span className="fw-bold text-dark">$32</span>
                      <span className="text-decoration-line-through text-muted">
                        $35
                      </span>
                      <span>
                        <small className="fs-6 ms-2 text-danger">26% Off</small>
                      </span>
                    </div>
                    <hr className="my-6" />
                    <div className="mb-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        250g
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        500g
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        1kg
                      </button>
                    </div>
                    <div>
                      {/* input */}
                      {/* input */}
                      <div className="input-group input-spinner  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus  btn  btn-sm "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control-sm form-input   "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus btn btn-sm "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="mt-3 row justify-content-start g-2 align-items-center">
                      <div className="col-lg-4 col-md-5 col-6 d-grid">
                        {/* button */}
                        {/* btn */}
                        <button type="button" className="btn btn-primary">
                          <i className="feather-icon icon-shopping-bag me-2" />
                          Add to cart
                        </button>
                      </div>
                      <div className="col-md-4 col-5">
                        {/* btn */}
                        <a
                          className="btn btn-light"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label="Compare"
                        >
                          <i className="bi bi-arrow-left-right" />
                        </a>
                        <a
                          className="btn btn-light"
                          href="#!"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label="Wishlist"
                        >
                          <i className="feather-icon icon-heart" />
                        </a>
                      </div>
                    </div>
                    <hr className="my-6" />
                    <div>
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td>Product Code:</td>
                            <td>FBB00255</td>
                          </tr>
                          <tr>
                            <td>Availability:</td>
                            <td>In Stock</td>
                          </tr>
                          <tr>
                            <td>Type:</td>
                            <td>Fruits</td>
                          </tr>
                          <tr>
                            <td>Shipping:</td>
                            <td>
                              <small>
                                01 day shipping.
                                <span className="text-muted">
                                  ( Free pickup today)
                                </span>
                              </small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
