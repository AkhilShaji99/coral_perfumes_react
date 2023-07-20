const deviceCheck = () => {
  const screensWidth = window.innerWidth;
  if (screensWidth <= 760) {
    return "Mobile";
  } else {
    return "Desktop";
  }
};
export default deviceCheck;
