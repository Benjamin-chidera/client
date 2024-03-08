import React from "react";
import { ThreeCircles } from "react-loader-spinner";

export const AdminBtnSave = () => {
  return (
    <div className="flex justify-center">
      <ThreeCircles
        visible={true}
        height="20"
        width="20"
        color="white"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
