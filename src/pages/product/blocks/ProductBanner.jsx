import deviceImageRender from "../../../utils/deviceImageRender";

function ProductBanner({ componentDatas }) {
  return (
    <>
      <div className="card mb-4 bg-light border-0">
        <img
          src={deviceImageRender(
            componentDatas?.banner_image_url,
            componentDatas?.banner_image_url
          )}
          className="img-fluid"
          alt="Coral Perfumes"
        />
      </div>
    </>
  );
}
export default ProductBanner;
