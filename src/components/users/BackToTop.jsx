import React, { useEffect } from "react";

export const BackToTop = () => {
  const Top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
  };

//   useEffect(() => {
//     Top();
//   }, []);

  return (
    <div onClick={Top} className="mt-5 cursor-pointer underline text-center">
      BackToTop
    </div>
  );
};
