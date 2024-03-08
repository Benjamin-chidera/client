import React, { useEffect } from "react";

export const BackToTop = () => {
  const Top = () => {
    window.scrollTo({ top: 0, left: 0,behavior: "smooth" });
    
  };

  // useEffect(() => {
  //   Top();
  // }, []);

  return (
    <div onClick={Top} className="mt-20 cursor-pointer underline text-center">
      BackToTop
    </div>
  );
};
