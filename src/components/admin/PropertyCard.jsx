import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { IoLocation } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

export function PropertyCard() {
  const { getRecentProperty, recent } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    getRecentProperty();
  }, []);

  return (
    <div className="md:flex justify-between gap-3 ">
      {recent.map((p) => {
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
            className=" space-y-3  py-5 px-3 rounded-xl md:w-[300px] mt-3 md:mt-0 "
          >
            <img
              src={images[0]}
              alt=""
              className="w-[300px] h-[250px] rounded-[15.14px]"
            />
            <p className=" text-xs text-red-700 font-semibold">
              Posted on {new Date(updatedAt).toDateString()}
            </p>

            <div className="flex">
              <p className="text-sm">{tags.toUpperCase()}</p>
            </div>
            <h1 className="text-lg font-semibold">{title}</h1>

            <address className="flex gap-2 items-center text-sm font-semibold not-italic">
              <IoLocation /> <p className="text-[#8D8D8D]">{location}</p>
            </address>

            <p className="text-[#8D8D8D] font-semibold text-2xl">${price}</p>

            <section className="flex gap-3 flex-wrap text-sm">
              <div className="flex gap-2 items-center">
                {/* 1 */}
                <IoBedOutline />
                <p className="text-[#8D8D8D] font-medium">{bedroom} Bedrooms</p>
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
                className="bg-[#F78214] w-[220px]  md:w-[270px]"
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
  );
}
