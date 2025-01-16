import React from "react";
import Image from "next/image";

const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <img src="assets/images/logo/mylogo.svg" alt="loader" />
      </div>
    </div>
  );
};
export default PreLoader;
