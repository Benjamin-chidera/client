import React, { useEffect } from "react";
import { property } from "../../data/Property";
import net from "../../assets/Image/net.png";
import fam from "../../assets/Image/fam.png";
import { IoLocation } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

export const AllProperties = () => {
  const { properties, loading } = useGlobalContext();

  return (
    <main>
      <h2 className="font-semibold text-xl md:text-3xl mt-14">
        Property Listings - House
        {/* {properties.propertyType !== "house" && "Land"} */}
      </h2>
      {properties.length < 1 && (
        <p className="text-2xl text-center font-bold my-3">No Property found</p>
      )}
      <div className="grid md:grid-cols-2 place-items-center gap-10 mt-14">
        {loading ? (
          <p>Loading...</p>
        ) : (
          properties.map((p) => {
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
            } = p;

            return (
              <div
                key={_id}
                className="md:flex gap-5 bg-white p-3 md:py-5 w-[240px] md:w-[455px] md:h-[230px] rounded-3xl "
              >
                <img
                  src={images[0]}
                  alt=""
                  className="w-[100%] h- md:h-[200px] md:w-[150px] object-cover md:object-cover mb-3 md:mb-0"
                />

                <section className="text-start">
                  <div className="flex gap-3">
                    <img src={net} alt="" className="w-[70px] md:w-[80px]" />
                    <img src={fam} alt="" className="w-[70px] md:w-[80px]" />
                  </div>
                  <h1 className="text-black text-sm md:text-[16px] text-start font-semibold">
                    {title}
                  </h1>
                  <address className="text-[#8D8D8D] text-xs md:text-sm text-start font-semibold not-italic flex items-center">
                    <IoLocation /> {location}
                  </address>

                  <p className="font-bold text-[#8D8D8D] ">${price}</p>

                  <section className="flex flex-wrap  mb-2 gap-4 text-sm text-[#8D8D8D]">
                    <div className="flex gap-2 items-center">
                      {/* 1 */}
                      <IoBedOutline />
                      <p className="text-[#8D8D8D] font-medium text-[12px]">
                        {bedroom} Bedrooms
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      {/* 2 */}
                      <LuBath />
                      <p className="text-[#8D8D8D] font-medium text-[12px]">
                        {bathroom} Bathrooms
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      {/* 3 */}
                      <GiHomeGarage />
                      {garage ? (
                        <p className="text-[#8D8D8D] font-medium text-[12px]">
                          Garage
                        </p>
                      ) : (
                        <p>No Garage</p>
                      )}
                    </div>
                    <div className="flex gap-2 items-center">
                      {/* 4*/}
                      <FaRegSquare />
                      <p className="text-[#8D8D8D] font-medium text-[12px]">
                        {squareFeet} Square Feet
                      </p>
                    </div>
                  </section>
                  <Link
                    className="bg-[#F78214] text-xs px-2 rounded-md py-2"
                    to={`/propertyDetails/${_id}`}
                  >
                    View Properties
                  </Link>
                </section>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};
