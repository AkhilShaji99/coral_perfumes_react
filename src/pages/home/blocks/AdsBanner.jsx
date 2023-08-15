import deviceImageRender from "../../../utils/deviceImageRender";

function AdsBanner({ componentDatas }) {
  const backgroundImage = {
    backgroundImage:
      `url("` +
      deviceImageRender(
        componentDatas?.datas?.[0].desktop_image,
        componentDatas?.datas?.[0].mobile_image
      ) +
      `")`,
  };
  return (
    <>
      <section className="ads-banner" style={backgroundImage} />
    </>
  );
}
export default AdsBanner;
