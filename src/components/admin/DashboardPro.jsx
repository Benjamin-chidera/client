import React from "react";
import pro1 from "../../assets/Image/prop.png";
import listed from "../../assets/Image/listed.png";
import unlisted from "../../assets/Image/unlisted.png";

export const DashboardPro = () => {
  return (
    <div className="my-3">
      {" "}
      <div className="flex gap-2 md:gap-7 items-center  flex-wrap">
        <img
          src={pro1}
          className="md:w-[290px]  object-cover rounded md:h-[156px]  w-[150px]"
          alt=""
        />
        <img
          src={listed}
          className="md:w-[290px]  object-cover rounded md:h-[156px]  w-[150px]"
          alt=""
        />
        <img
          src={unlisted}
          className="md:w-[290px]  object-cover rounded md:h-[156px]  w-[150px]"
          alt=""
        />
      </div>
    </div>
  );
};
