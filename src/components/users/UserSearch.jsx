import { Button } from "@material-tailwind/react";
import React from "react";

export const UserSearch = () => {
  return (
    <div>
      <section className="flex justify-center mt-10">
        <div className="flex">
          <button className="bg-[#161616] text-[#F78214] w-[100px] h-[40px] rounded-tl-3xl">
            Land
          </button>
          <button className="bg-[#F78214] text-[#fff] w-[100px] h-[40px] rounded-tr-3xl">
            House
          </button>
        </div>
      </section>

      <section className="bg-[#070707] w-[1200px] md:w-[800px] md:h-[100px] mx-auto max-w-[100%] px-3 pb-3 md:pb-0 pt-5 ">
        <form className="flex items-center justify-center gap-3 flex-wrap">
          <div className="flex flex-col  ">
            <label htmlFor="" className="font-semibold">
              Location
            </label>
            <input
              type="text"
              className="placeholder:text-[#8D8D8D] w-[120px] md:w-[168px] py-1 px-2 rounded-md outline-none text-[#8D8D8D]"
              placeholder="Palmgroove, Lagos"
            />
          </div>
          <div className="flex flex-col  ">
            <label htmlFor="" className="font-semibold">
              Property Type
            </label>
            <input
              type="text"
              className="placeholder:text-[#8D8D8D] w-[120px] md:w-[168px] py-1 px-2 rounded-md outline-none text-[#8D8D8D]"
              placeholder="Duplex"
            />
          </div>
          <div className="flex flex-col  ">
            <label htmlFor="" className="font-semibold">
              Average Price
            </label>
            <input
              type="text"
              className="placeholder:text-[#8D8D8D] w-[120px] md:w-[168px] py-1 px-2 rounded-md outline-none text-[#8D8D8D]"
              placeholder="$5000-10000"
            />
          </div>

          <div>
            <Button className="bg-[#F78214] mt-6" size="sm" type="submit">
              Search Now
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};
