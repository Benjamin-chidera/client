import React from "react";
import dash from "../../assets/Image/dash.png";
import all from "../../assets/Image/all.png";
import add from "../../assets/Image/add.png";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="bg-[#181818] z-10 h-screen w-[240px] text-center space-y-14 hidden md:block container fixed top-24 pt-5 ">
      <div className="active:bg-black">
        <Link
          to={"/admin"}
          className="py-3 focus:text-[#F78214] active:text-[#F78214] active:bg-black text-[#A5A5A5] cursor-pointer"
        >
          <img
            src={dash}
            alt="Admin-dashboard-sidebar"
            className=" w-[32px] mx-auto"
          />
          <p className=" ">DashBoard</p>
        </Link>
      </div>
      <div className="active:bg-black">
        <Link
          to={"/admin/all-properties"}
          className="py-3 focus:text-[#F78214] active:bg-black active:text-[#F78214] text-[#A5A5A5] cursor-pointer "
        >
          <img
            src={all}
            alt="Admin-dashboard-sidebar"
            className=" w-[32px] mx-auto"
          />
          <p className="">All Properties</p>
        </Link>
      </div>

      <div className="active:bg-black">
        <Link
          className="py-3 focus:text-[#F78214] active:text-[#F78214] active:bg-black text-[#A5A5A5] cursor-pointer"
          to={"/admin/add-new-properties"}
        >
          <img
            src={add}
            alt="Admin-dashboard-sidebar"
            className=" w-[32px] mx-auto"
          />
          <p className="">Add New Property</p>
        </Link>
      </div>

      <p className="text-[#A5A5A5] pt-20">Copyright &copy;2024 Yemsays</p>
    </div>
  );
};
