import React, { useState } from "react";
import logo from "./../../assets/Image/logo.png";
import bell from "./../../assets/Image/bell.png";
import admin from "./../../assets/Image/admin.png";
import dash from "../../assets/Image/dash.png";
import all from "../../assets/Image/all.png";
import add from "../../assets/Image/add.png";
import { IoSearchSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { Squash as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const [search, setSearch] = useState("");

  const { setType } = useGlobalContext();

  const token = Cookies.get("token");
  let decode = null;


  try {
    if (token) {
      decode = jwtDecode(token);

      console.log(decode);
    }
  } catch (error) {
    console.log("Error decoding token", error);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      setType(search);
    } else if (!search) {
      setType("");
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav>
      <main className=" flex justify-between px-5 bg-[#181818] h-20 items-center fixed w-full top-0 z-10">
        <div className="flex items-center gap-20">
          <img src={logo} alt="Company-Logo" />

          {location.pathname === "/admin/all-properties" && (
            <div className="hidden md:block">
              <form className="relative" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search by the type of property"
                  className="w-[391px] h-[35px] ps-3 pe-8 bg-transparent border border-gray-600 rounded-2xl relative outline-none"
                  value={search}
                  onChange={handleChange}
                />

                <IoSearchSharp
                  className="absolute top-2 right-3"
                  color="#F78214"
                />
              </form>
            </div>
          )}
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <img src={bell} alt="" className="hidden lg:block" />

          <div>
            <h1 className="font-semibold text-lg">{decode.name}</h1>
            <p className="text-sm text-[#BDB7B7]">{decode.role}</p>
          </div>

          <img src={decode.image} alt="admin-pic" className="hidden lg:block w-[50px] h-[50px] rounded-full" />
        </div>

        <div className=" md:hidden">
          {/* this is the mobile device menu icon */}
          <Hamburger toggled={isOpen} toggle={setOpen} color="gray" />
        </div>
      </main>

      {isOpen && (
        <section className="p-5 bg-[#403b3b] h-full w-[230px] fixed top-0 md:hidden z-10 ">
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
            <form className="relative" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search Here"
                className="w-[391px] h-[35px] max-w-full ps-3 pe-8 bg-transparent border border-gray-600 rounded-2xl relative outline-none"
              />

              <IoSearchSharp
                className="absolute top-2 right-3"
                color="#F78214"
              />
            </form>
          </div>

          <section className="mt-5 text-center space-y-10">
            <div className="active:bg-black">
              <Link
                to={"/admin"}
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
