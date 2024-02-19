import { property } from "../../data/Property";
import net from "../../assets/Image/net.png";
import fam from "../../assets/Image/fam.png";
import { IoLocation } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";

export const LatestProperties = () => {
  const four = property.slice(0, 4);

  return (
    <div className="grid md:grid-cols-2 place-items-center gap-5 md:gap-10 mt-10">
      {four.map((l) => {
        const { _id, title, image, price, location, features, tags } = l;

        return (
          <div
            key={_id}
            className="flex gap-5 bg-white p-3 md:p-5 w-[300px] md:w-[529px] md:h-[230px] rounded-3xl"
          >
            <img
              src={image}
              alt=""
              className="w-[100px] h- md:h-[200px] md:w-[200px] object-cover md:object-fill"
            />

            <section className="text-start">
              <div className="flex gap-3">
                <img src={net} alt="" className="w-[70px] md:w-[150px]" />
                <img src={fam} alt="" className="w-[70px] md:w-[150px]" />
              </div>
              <h1 className="text-black text-sm md:text-lg text-start font-semibold">
                {title}
              </h1>
              <address className="text-[#8D8D8D] text-xs md:text-sm text-start font-semibold not-italic flex items-center">
                <IoLocation /> {location}
              </address>

              <p className="font-bold text-[#8D8D8D] ">${price}</p>

              <section className="flex flex-wrap  mb-5 gap-5 text-sm text-[#8D8D8D]">
                <div className="flex gap-2 items-center">
                  {/* 1 */}
                  <IoBedOutline />
                  <p className="text-[#8D8D8D] font-medium text-[12px]">
                    {features.bedroom} Bedrooms
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  {/* 2 */}
                  <LuBath />
                  <p className="text-[#8D8D8D] font-medium text-[12px]">
                    {features.bathroom} Bathrooms
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  {/* 3 */}
                  <GiHomeGarage />
                  {features.garage ? (
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
                    {features.squareFeet} Square Feet
                  </p>
                </div>
              </section>
            </section>
          </div>
        );
      })}
    </div>
  );
};
