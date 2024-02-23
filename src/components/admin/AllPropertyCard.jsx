import React, { useEffect } from "react";
import { property } from "../../data/Property";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import net from "../../assets/Image/net.png";
import fam from "../../assets/Image/fam.png";
import { IoLocation } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { Pagination } from "./Pagination";
import sold from "../../assets/Image/SOLD.png";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

export const AllPropertyCard = () => {
  const navigate = useNavigate();

  const { getProperties, properties } = useGlobalContext();

  console.log(properties);

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <main className="">
      <div className=" grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:place-items-center w-full place-items-center mt-3 gap-5">
        {properties.map((p) => {
          const {
            _id,
            title,
            media: { images },
            price,
            location,
            bedroom,
            bathroom,
            garage,
            squareFeet,
            updatedAt,
            tags,
            // propertyStatus,
          } = p;

          return (
            <div
              key={_id}
              className=" space-y-3 bg-[#181818] py-5 px-3 rounded-xl"
            >
              <img
                src={images[0]}
                alt=""
                className="w-[250px] h-[250px] rounded-[15.14px]"
              />
              <p className=" text-xs text-red-700 font-semibold">
                Posted on {new Date(updatedAt).toDateString()}
              </p>

              <div className="flex">
                <p className="text-sm">{tags.toUpperCase()}</p>
              </div>
              <h1 className="text-lg font-semibold">{title}</h1>

              <address className="flex gap-2 items-center text-sm font-semibold not-italic">
                <IoLocation /> <span className="text-[#8D8D8D]">{location}</span>
              </address>

              <p className="text-[#8D8D8D] font-semibold text-2xl">${price}</p>

              <section className="grid grid-cols-2 mb-5 gap-4 text-sm">
                <div className="flex gap-2 items-center">
                  {/* 1 */}
                  <IoBedOutline />
                  <p className="text-[#8D8D8D] font-medium">
                    {bedroom} Bedrooms
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  {/* 2 */}
                  <LuBath />
                  <p className="text-[#8D8D8D] font-medium">
                    {bathroom} Bathrooms
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  {/* 3 */}
                  <GiHomeGarage />
                  {garage ? (
                    <p className="text-[#8D8D8D] font-medium">Garage</p>
                  ) : (
                    <p>No Garage</p>
                  )}
                </div>
                <div className="flex gap-2 items-center">
                  {/* 4*/}
                  <FaRegSquare />
                  <p className="text-[#8D8D8D] font-medium text-xs">
                    {squareFeet} Square Feet
                  </p>
                </div>

                <Button
                  className="bg-[#F78214] w-[220px]  md:w-[250px]"
                  onClick={() => navigate("/admin/propertyDetails")}
                >
                  View Details
                </Button>
              </section>

              {/* {propertyStatus === "Sold" && (
                <div className=" absolute top-11 left-[30%] bg-red-400">
                  <img src={sold} alt="" className="w-[150px] z-10" />
                </div>
              )} */}
            </div>
          );
        })}
      </div>

      <div className="">
        
        <Pagination />
      </div>
    </main>
  );
};
