import React, { useState } from "react";
import logo from "./../../assets/Image/logo.png";
import bell from "./../../assets/Image/bell.png";
import admin from "./../../assets/Image/admin.png";
import dash from "../../assets/Image/dash.png";
import all from "../../assets/Image/all.png";
import add from "../../assets/Image/add.png";

import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav>
      <main className=" flex justify-between px-5 bg-[#181818] h-24 items-center fixed w-full top-0 z-10">
        <div className="flex items-center gap-20">
          <img src={logo} alt="Company-Logo" />

          <div className="hidden md:block">
            <form>
              <input type="text" />
            </form>
          </div>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <img src={bell} alt="" />

          <div>
            <h1>Chidera</h1>
            <p>Admin</p>
          </div>

          <img src={admin} alt="admin-pic" />
        </div>

        <div className=" md:hidden">
          {/* this is the mobile device menu icon */}
          <Hamburger toggled={isOpen} toggle={setOpen} color="gray" />
        </div>
      </main>

      {isOpen && (
        <section className="p-5 bg-[#403b3b] h-screen w-[200px] fixed top-0 md:hidden z-10">
          {/* menu bar for admin-mobile devices */}
          <div className="flex gap-3 items-center">
            <img src={bell} alt="" />

            <div>
              <h1>Chidera</h1>
              <p>Admin</p>
            </div>

            <img src={admin} alt="admin-pic" />
          </div>

          <div className="mt-5">
            <form>
              <input type="text" className="max-w-[100%]" />
            </form>
          </div>

          <section className="mt-5 text-center space-y-5">
            <div className="active:bg-black">
              <Link
                to={"/admin/dashboard"}
                className="py-3 focus:text-white active:text-[#F78214] active:bg-black text-[#A5A5A5] cursor-pointer"
                onClick={handleClose}
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
                className="py-3 focus:text-white active:bg-black active:text-[#F78214] text-[#A5A5A5] cursor-pointer "
                onClick={handleClose}
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
                className="py-3 focus:text-white active:text-[#F78214] active:bg-black text-[#A5A5A5] cursor-pointer"
                to={"/admin/add-new-properties"}
                onClick={handleClose}
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
          </section>
        </section>
      )}
    </nav>
  );
};
