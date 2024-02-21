import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

export const Booking = () => {
    
  return (
    <main className="mt-20 p-5">
      <div className="text-center mt-10">
        <h1 className="font-semibold text-lg md:text-2xl">
          Book an Inspection With Us
        </h1>
        <p className="mt-3 text-xs">
          Please fill in this form to book an inspection with us.
        </p>
      </div>

      <section>
        <form className="flex flex-col gap-4 mt-10 justify-center">
          <section className=" md:flex items-center gap-5 space-y-3 justify-center md:space-y-0 ">
            <div className="relative">
              <input
                type="text"
                className=" bg-transparent border w-[400px] max-w-full h-[40px] ps-8 pe-3 relative outline-none rounded"
                placeholder="FirstName"
              />
              <FaUser
                className=" absolute top-3 left-2"
                color="orange"
                size={20}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                className=" bg-transparent border w-[400px] max-w-full h-[40px] ps-8 pe-3 relative outline-none rounded"
                placeholder="LastName"
              />
              <FaUser
                className=" absolute top-3 left-2"
                color="orange"
                size={20}
              />
            </div>
          </section>

          <div className="text-center mx-auto max-w-full relative">
            <input
              type="email"
              name=""
              id=""
              className="w-[820px] mx-auto max-w-full h-[40px] ps-8 pe-3 relative outline-none bg-transparent border rounded"
              placeholder="E-mail Address"
            />

            <MdEmail
              className=" absolute top-2.5 left-2"
              color="orange"
              size={20}
            />
          </div>

          <div className="text-center mx-auto max-w-full relative">
            <input
              type="tel"
              name=""
              id=""
              className="w-[820px] mx-auto max-w-full h-[40px] ps-8 pe-3 relative outline-none bg-transparent border rounded"
              placeholder="Phone Number"
            />

            <IoIosCall
              className=" absolute top-2.5 left-2"
              color="orange"
              size={20}
            />
          </div>

          <div className="text-center mx-auto max-w-full relative">
            <input
              type="text"
              name=""
              id=""
              className="w-[820px] mx-auto max-w-full h-[40px] ps-8 pe-3 relative outline-none bg-transparent border rounded"
              placeholder="Location"
            />

            <FaLocationDot
              className=" absolute top-2.5 left-2"
              color="orange"
              size={20}
            />
          </div>

          <section className=" md:flex items-center gap-5 space-y-3 md:space-y-0 justify-center">
            <div className="relative">
              <input
                type="date"
                className=" bg-transparent border w-[400px] max-w-full h-[40px] ps-8 pe-3 relative outline-none rounded"
                placeholder="Inspection Date"
              />
              <CiCalendarDate
                className=" absolute top-2.5 left-2"
                color="orange"
                size={20}
              />
            </div>

            <div className="relative">
              <input
                type="time"
                className=" bg-transparent border w-[400px] max-w-full h-[40px] ps-8 pe-3 relative outline-none rounded"
                placeholder="Inspection Time"
              />
              <FaRegClock
                className=" absolute top-2.5 left-2"
                color="orange"
                size={20}
              />
            </div>
          </section>

          <div className="text-center mx-auto max-w-full relative">
            <textarea
              type="text"
              name=""
              id=""
              className="w-[820px] mx-auto max-w-full h-[250px] ps-8 pe-3 pt-3 relative outline-none bg-transparent border rounded resize-none"
              placeholder="Additional Message......"
            />

            <FaMessage
              className=" absolute top-3.5 left-2"
              color="orange"
              size={20}
            />
          </div>

          <Button
            className="w-[493px] max-w-full mx-auto bg-[#F78214]"
            type=" submit"
          >
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
};
