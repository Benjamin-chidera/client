import React from "react";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";

export const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div>
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.gif"
            alt="😭"
            width="132"
            height="32"
          />
        </picture>
      </div>
      <h1 className="text-5xl font-bold mb-3">Error 404</h1>
      <p className="font-semibold md:text-2xl">Sorry, This page can't be found</p>
      <p className="text-lg">Here, instead, you'll find some useful links:</p>

      <section className="flex justify-center gap-10 items-center mt-5">
        <div className=" shadow shadow-white p-5 flex flex-col justify-center rounded-md">
          <FaHouse size={30} className="mx-auto mb-3" />
          <Link
            to={"/admin"}
            className="bg-white text-gray-600 font-bold text-lg py-1 px-5 rounded-md"
          >
            Home Page
          </Link>
        </div>
      </section>
    </div>
  );
};
