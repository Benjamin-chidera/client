import React from "react";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { PiHouse } from "react-icons/pi";
import { Link } from "react-router-dom";
import d1 from "../../assets/Image/d1.png";
import vi from "../../assets/Image/vi.png";
import d2 from "../../assets/Image/d2.png";
import net from "../../assets/Image/net.png";
import fam from "../../assets/Image/fam.png";
import sale from "../../assets/Image/sale.png";
import { MdLocationOn } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import { IoCameraOutline } from "react-icons/io5";

export const EditProperty = () => {
  return (
    <section className="container mx-auto w-full">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center ">
          <RiArrowDropLeftFill size={40} color="orange" />
          <h1 className=" font-semibold text-xl">Edit Property</h1>
        </div>

        <header className="flex items-center justify-between">
          <div className="flex gap-2 items-center text-sm">
            <Link className="flex gap-2 items-center">
              <PiHouse size={20} /> Home
            </Link>{" "}
            / <Link>Properties</Link> / <p>Properties Details</p> / <p>Edit</p>
          </div>
        </header>
      </div>
      <form>
        <main>
          <section className="flex justify-between items-center my-5 flex-wrap bg-[#181818] p-5 rounded-lg">
            <div>
              <h1 className="font-semibold text-xl">Residential Land</h1>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-[#F78214] font-semibold text-sm">
                  Listed Property
                </p>
                /
                <p className="text-[#8D8D8D] text-xs">
                  3, Ogunlesi Street, Lagos 100252
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-3">
              <Button
                size="sm"
                className="bg-[#F78214] text-sm rounded-lg px-10"
                type="submit"
              >
                Save
              </Button>
            </div>
          </section>

          <section className="flex gap-3">
            <div className=" relative cursor-pointer">
              <img
                src={d1}
                alt=""
                className=" object-cover w-[176px] h-[224px] md:w-[560px] md:h-[373px] relative"
              />

              <div className="text-center absolute top-[40%] left-[20%] md:top-[40%] md:left-[35%]">
                <IoCameraOutline className="w-[40px] h-[40px] md:w-[70px] mx-auto md:h-[70px]" />
                <p className="text-[10px] md:text-lg">
                  Click to change picture
                </p>
              </div>
            </div>

            <div className=" object-cover flex flex-col gap-3">
              <div className=" relative cursor-pointer">
                <img
                  src={d2}
                  alt=""
                  className=" object-cover w-[176px] h-[66px] md:w-[360px] md:h-[116px] relative"
                />

                <div className="text-center absolute top-[20%] left-[20%] md:top-[20%] md:left-[35%]">
                  <IoCameraOutline className="w-[20px] h-[20px] md:w-[40px] mx-auto md:h-[40px]" />
                  <p className="text-[10px] md:text-sm">
                    Click to change picture
                  </p>
                </div>
              </div>
              <div className=" relative cursor-pointer">
                <img
                  src={d2}
                  alt=""
                  className=" object-cover w-[176px] h-[66px] md:w-[360px] md:h-[116px] relative"
                />

                <div className="text-center absolute top-[20%] left-[20%] md:top-[20%] md:left-[35%]">
                  <IoCameraOutline className="w-[20px] h-[20px] md:w-[40px] mx-auto md:h-[40px]" />
                  <p className="text-[10px] md:text-sm">
                    Click to change picture
                  </p>
                </div>
              </div>
              <div className=" relative cursor-pointer">
                <img
                  src={d2}
                  alt=""
                  className=" object-cover w-[176px] h-[66px] md:w-[360px] md:h-[116px] relative"
                />

                <div className="text-center absolute top-[20%] left-[20%] md:top-[20%] md:left-[35%]">
                  <IoCameraOutline className="w-[20px] h-[20px] md:w-[40px] mx-auto md:h-[40px]" />
                  <p className="text-[10px] md:text-sm">
                    Click to change picture
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex gap-7 md:gap-12 flex-wrap">
            {/* after images */}

            <section className="my-5">
              <section className="flex items-center gap-5">
                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">Tags</label>
                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2 px-3 outline-none my-1"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">
                    Property Type
                  </label>
                  <select
                    name=""
                    id=""
                    className=" bg-transparent border rounded-md border-[#8D8D8D] h-[43px] w-[150px] py-2 px-3 outline-none my-1"
                  >
                    <option value="" className=" bg-black">
                      Land
                    </option>
                    <option value="" className=" bg-black">
                      House
                    </option>
                  </select>
                </div>
              </section>

              <section className="flex justify-between">
                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">Title</label>

                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D] w-[180px] py-2 px-3 outline-none my-1"
                  />
                </div>

                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">Sales Price</label>

                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2 px-3 outline-none my-1"
                  />
                </div>
              </section>

              <div className="mb-4 flex flex-col">
                <label className="text-[#8D8D8D] text-xs">Location</label>

                <input
                  type="text"
                  className=" bg-transparent border rounded-md border-[#8D8D8D] w-[350px] py-2 px-3 outline-none my-1"
                />
              </div>

              <div className="border p-3 rounded-xl md:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold">
                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">Description</label>

                  <textarea
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D]  py-2 px-3 outline-none my-1 h-[320px] resize-none"
                  />
                </div>
              </div>

              <section className="border p-3 rounded-xl md:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold">
                <p className="text-xl mb-5">Features</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 place-items-center items-center flex-wrap">
                  <div className=" relative">
                    <input
                      type="number"
                      className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2  outline-none my-1 relative px-6"
                    />
                    <IoBedOutline className="absolute top-4 left-2" />
                  </div>
                  <div className=" relative">
                    <input
                      type="number"
                      className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2  outline-none my-1 relative px-6"
                    />
                    <LuBath className="absolute top-4 left-2" />
                  </div>
                  <div className=" relative">
                    <input
                      type="text"
                      className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2  outline-none my-1 relative px-6"
                    />
                    <GiHomeGarage className="absolute top-4 left-2" />
                  </div>
                  <div className=" relative">
                    <input
                      type="number"
                      className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2  outline-none my-1 relative px-6"
                    />
                    <FaRegSquare className="absolute top-4 left-2" />
                  </div>
                </div>
              </section>

              <div className="border p-3 rounded-xl md:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold">
                <p className="text-xl mb-5">Property Video</p>
                <div className=" relative cursor-pointer">
                  <img
                    src={vi}
                    alt=""
                    className=" object-cover w-full h-[224px] md:h-[373px] relative"
                  />

                  <div className="text-center absolute top-[40%] left-[35%] md:top-[40%] md:left-[30%]">
                    <IoCameraOutline className="w-[40px] h-[40px] md:w-[70px] mx-auto md:h-[70px]" />
                    <p className="text-[10px] md:text-lg">
                      Click to change picture
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="border border-[#343434] w-[340px] md:w-[300px] h-[400px] md:mt-5 p-5 rounded-xl text-center">
                {/* sale support */}

                <div className=" relative cursor-pointer">
                  <img
                    src={vi}
                    alt=""
                    className=" object-cover w-[114px] mx-auto h-[114px] md:h-[114px] relative rounded-full"
                  />

                  <div className="text-center absolute top-[37%] left-[45%] md:top-[35%] md:left-[43%]">
                    <IoCameraOutline className="w-[30px] h-[30px] md:w-[40px] mx-auto md:h-[40px]" />
                  </div>
                </div>

                <div className="mb-4 flex flex-col mt-3 text-start">
                  <label className="text-[#8D8D8D] text-xs">
                    Support In-Charge
                  </label>

                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D]  py-2 px-3 outline-none my-1"
                  />
                </div>
                <div className="mb-4 flex flex-col mt-3 text-start">
                  <label className="text-[#8D8D8D] text-xs">
                    WhatsApp Contact Details
                  </label>

                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D]  py-2 px-3 outline-none my-1"
                  />
                </div>
                <div className="mb-4 flex flex-col mt-3 text-start">
                  <label className="text-[#8D8D8D] text-xs">
                    Call Contact Details
                  </label>

                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D]  py-2 px-3 outline-none my-1"
                  />
                </div>
              </div>
            </section>
          </section>
        </main>
      </form>
    </section>
  );
};
