import React, { useEffect, useState } from "react";
import { property } from "../../data/Property";
import net from "../../assets/Image/net.png";
import fam from "../../assets/Image/fam.png";
import { IoLocation } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CurrencyFormatter } from "../CurrencyFormatter";
import { Skeleton } from "@/components/ui/skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ReactPaginate from "react-paginate";

export const AllProperties = () => {
  const { properties, loading } = useGlobalContext();
  const [pageNumber, setPageNumber] = useState(0); //this is the current page
  const usersPerPage = 6; // hw many item will be displayed per Page

  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = properties.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );

  const pageCount = Math.ceil(properties.length / usersPerPage);

  const ChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main>
      <h2 className="font-semibold text-xl md:text-3xl mt-14">
        Property Listings - House
        {/* {properties.propertyType !== "house" && "Land"} */}
      </h2>
      {displayUsers.length < 1 && (
        <p className="text-2xl text-center font-bold my-3">No Property found</p>
      )}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5 md:gap-10 mt-10 mx-auto max-w-full md:w-[750px] xl:w-[1100px]">
        {displayUsers.map((p) => {
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
            tags,
          } = p;

          return (
            <main key={_id}>
              {loading ? (
                <Skeleton className="w-[240px] md:w-[355px] md:h-[240px] rounded-3xl bg-gray-100" />
              ) : (
                <div className="md:flex gap-5  p-3  w-[240px]  md:w-[355px] md:h-[240px] rounded-3xl bg-white text-sm">
                  {loading ? (
                    <Skeleton className="w-[100%] h- md:h-[200px] md:w-[500px] bg-gray-100" />
                  ) : (
                    <LazyLoadImage
                      loading="lazy"
                      effect="blur"
                      src={images[0]}
                      alt=""
                      className="h-[140px] w-[300px]  md:h-[220px] md:w-[470px] object-cover mb-3 md:mb-0"
                    />
                  )}

                  <section className="text-start">
                    <div>
                      <p className="text-[#8D8D8D] capitalize border rounded-xl text-xs border-orange-400 w-fit px-3">
                        {tags}
                      </p>
                    </div>
                    <h1 className="text-black text-sm md:text-lg text-start font-semibold">
                      {title.substring(0, 10)}
                    </h1>
                    <address className="text-[#8D8D8D] text-xs md:text-sm text-start font-semibold not-italic flex items-center">
                      <IoLocation /> {location}
                    </address>

                    <p className="font-bold text-[#8D8D8D] ">
                      {<CurrencyFormatter value={price} />}
                    </p>

                    <section className="flex flex-wrap  mb-5 gap-2 text-sm text-[#8D8D8D]">
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
                      <Link
                        className="bg-[#F78214] py-1 px-3 text-white font-semibold capitalize rounded-md text-xs"
                        to={`/propertyDetails/${_id}`}
                      >
                        view property
                      </Link>
                    </section>
                  </section>
                </div>
              )}
            </main>
          );
        })}
      </div>

      <div>
        <ReactPaginate
          breakLabel="..."
          previousLabel={<IoIosArrowBack size={20} />}
          nextLabel={<IoIosArrowForward size={20} />}
          pageCount={pageCount}
          onPageChange={ChangePage}
          containerClassName="flex justify-center gap-7 w-[80%] mx-auto mt-7"
          previousLinkClassName=""
          nextLinkClassName=""
          disabledClassName=""
          activeClassName="bg-white text-black h-fit w-fit rounded-full px-1"
        />
      </div>
    </main>
  );
};
