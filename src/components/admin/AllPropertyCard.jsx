/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { IoLocation } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
// import sold from "../../assets/Image/SOLD.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ReactPaginate from "react-paginate";
import { CurrencyFormatter } from "../CurrencyFormatter";

export const AllPropertyCard = ({ filterByType }) => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0); //this is the current page
  const usersPerPage = 6; // hw many item will be displayed per Page

  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = filterByType.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );

  const pageCount = Math.ceil(filterByType.length / usersPerPage);

  const ChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main className="">
      

      <div className=" grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:place-items-center w-full place-items-center mt-3 gap-5">
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
                <IoLocation />{" "}
                <span className="text-[#8D8D8D]">{location}</span>
              </address>

              <p className="text-[#8D8D8D] font-semibold text-2xl">
                {<CurrencyFormatter value={price} />}
              </p>

              <section className="grid grid-cols-2 mb-5 gap-4 text-sm w-[250px]">
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
                  onClick={() => navigate(`/admin/propertyDetails/${_id}`)}
                >
                  View Details
                </Button>
              </section>

              {/* {propertyStatus === "sold" && (
                <div className=" absolute top-11 left-[30%] bg-red-400">
                  <img src={sold} alt="" className="w-[150px] z-10" />
                </div>
              )} */}
            </div>
          );
        })}
      </div>

      <div className="">
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
