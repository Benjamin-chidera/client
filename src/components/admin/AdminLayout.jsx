import React from "react";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <main>
      
      <Navbar />
      <SideBar />
      <div className="m-4 pt-24 md:ms-[270px] text-white">
        <Outlet />
      </div>
    </main>
  );
};
