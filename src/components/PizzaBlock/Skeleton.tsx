import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={260}
    height={450}
    viewBox="0 0 260 450"
    backgroundColor="#ecebeb"
    foregroundColor="#ecebeb"
  >
    <circle cx="125" cy="134" r="125" />
    <rect x="0" y="267" rx="15" ry="15" width="245" height="20" />
    <rect x="0" y="298" rx="10" ry="10" width="245" height="88" />
    <rect x="0" y="401" rx="10" ry="10" width="95" height="30" />
    <rect x="124" y="395" rx="25" ry="25" width="119" height="45" />
  </ContentLoader>
);

export default Skeleton;
