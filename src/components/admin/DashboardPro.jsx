import React from "react";
import pro1 from "../../assets/Image/prop.png";
import listed from "../../assets/Image/listed.png";
import unlisted from "../../assets/Image/unlisted.png";
import { useGlobalContext } from "@/context/context";

export const DashboardPro = () => {
  const { properties } = useGlobalContext();
  console.log(properties);

  const listed = properties.filter((p) => p.propertyStatus === "available");
  console.log(listed);
  return (
    <main className="my-3">
      {" "}
      <section className="flex gap-2 md:gap-7 items-center  flex-wrap">
        <div className="bg-[#181818] md:w-[270px] rounded md:h-[156px] w-[150px] ps-5 py-4 md:pt-7">
          <h1 className=" md:text-xl font-semibold">All Properties</h1>
          <p className="md:text-6xl font-semibold">{properties.length}</p>
        </div>
        <div className="bg-[#181818] md:w-[270px] rounded md:h-[156px] w-[150px] ps-5 py-4 md:pt-7">
          <h1 className="md:text-xl font-semibold">
            Listed Properties
            <p className="md:text-6xl font-semibold">{listed.length}</p>
          </h1>
        </div>
        <div className="bg-[#181818] md:w-[270px] rounded md:h-[156px] w-[150px] ps-5 py-4 md:pt-7">
          <h1 className="md:text-xl font-semibold">Unlisted Properties</h1>
          <p className="md:text-2xl font-semibold">COMING SOON</p>
        </div>
      </section>
    </main>
  );
};
