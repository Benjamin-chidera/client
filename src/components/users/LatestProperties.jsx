import { IoLocation } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";
import { useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, } from "react-router-dom";
import { CurrencyFormatter } from "../CurrencyFormatter";

export const LatestProperties = () => {
  const { getLatestProperties, latest, loading } = useGlobalContext();

  useEffect(() => {
    getLatestProperties();
  }, []);

  return (
    <main>
      <div className="grid md:grid-cols-2 place-items-center gap-5 md:gap-10 mt-10">
        {loading ? (
          <p>loading..</p>
        ) : (
          latest.map((l) => {
            const {
              _id,
              title,
              media: { images },
              price,
              location,
              bathroom,
              bedroom,
              garage,
              squareFeet,
              tags,
            } = l;

            return (
              <div
                key={_id}
                className="md:flex gap-5 bg-white p-3 md:py-5 w-[240px] md:w-[455px] md:h-[230px] rounded-3xl "
              >
                <img
                  src={images[0]}
                  alt=""
                  className="w-[100%] h- md:h-[200px] md:w-[200px] object-cover md:object-fill mb-3 md:mb-0"
                />

                <section className="text-start">
                  <div className="flex gap-3">
                    <p className="text-[#8D8D8D] capitalize border  px-1 rounded-xl text-xs border-orange-400">
                      {tags}
                    </p>
                  </div>
                  <h1 className="text-black text-sm md:text-lg text-start font-semibold">
                    {title}
                  </h1>
                  <address className="text-[#8D8D8D] text-xs md:text-sm text-start font-semibold not-italic flex items-center">
                    <IoLocation /> {location}
                  </address>

                  <p className="font-bold text-[#8D8D8D] ">{<CurrencyFormatter value={price}/>}</p>

                  <section className="flex flex-wrap  mb-5 gap-5 text-sm text-[#8D8D8D]">
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
            );
          })
        )}
      </div>
    </main>
  );
};
