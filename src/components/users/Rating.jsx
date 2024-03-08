import React from "react";

export const Ratings = ({ num }) => {
  const rating = num * 20
  

  return (
    <div className="bg-white w-[100px] h-1">
      <div className={`w-[${rating}px] bg-[#F78214] h-full`}></div>
    </div>
  );
};
