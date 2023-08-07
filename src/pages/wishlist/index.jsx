import BreadCrumps from "../common/BreadCrumps";
import ProductDetails from "../common/ProductDetails";
import MyAccountSidebar from "../common/MyAccountSidebar";
function index() {
  return (
    <main>
      {/* section */}
      <BreadCrumps />

      <section>
        <div className="container-fluid">
          <div className="row">
            <MyAccountSidebar />
            <div className="col-lg-9 col-md-9 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                {/* heading */}
                <h2 className="mb-6 text-center my-profile-heading">My Wishlist</h2>
                <div className="row">
                  {/* {productList.map((product, index) => { */}
                  {/* return ( */}
                  <div className="col-md-4" key={1}>
                    <div className="product-grid">
                      <ProductDetails
                        product={{
                          id: 1,
                          discount_percentage: "10% Off",
                          name: "xxxxxxx",
                          original_amount: 250,
                          price_amount: 200,
                          listing_image:
                            "/media/product_listing/Rectangle_12.png",
                          slug: "xxxx",
                          product_tag: "New Arrival",
                        }}
                      />
                    </div>
                  </div>
                  {/* );
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default index;