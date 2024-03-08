import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import { SuccessFullBooking } from "../../components/Modal/user/SuccessfulBooking";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { AdminBtnSave } from "../../components/admin/AdminBtnSave";

export const Booking = () => {
  const { URL } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const token = Cookies.get("token");
  const [save, setSave] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [bookings, setBookings] = useState({
    // this is for booking an inspection
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    inspectionTime: "",
    inspectionDate: "",
    message: "",
  });

  const handleInspection = (e) => {
    setBookings({ ...bookings, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    setSave(true);
    e.preventDefault();
    try {
      if (
        !bookings.firstName ||
        !bookings.lastName ||
        !bookings.email ||
        !bookings.phoneNumber ||
        !bookings.inspectionDate ||
        !bookings.inspectionTime
      ) {
        setSave(false);
        toast.error("Please fill all required fields");
      }

      const { data } = await axios.post(
        URL,
        { ...bookings },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (data) {
        if (data) {
          // If data is received, set the success data and open the modal
          setSuccessData(data);
          setOpen(true);
          setSave(false);
        }
      }
    } catch (error) {
      console.log(error?.response?.data?.error);
      console.log(error);
      setSave(false);
    }
  };

  return (
    <main className="mt-28 px-5 md:px-2 overflow-x-hidden">
      <Toaster />
      {successData && (
        <SuccessFullBooking data={successData} onClose={() => setOpen(false)} />
      )}

      <div className="text-center mt-10">
        <h1 className="font-semibold text-lg md:text-2xl">
          Book an Inspection With Us
        </h1>
        <p className="mt-3 text-xs">
          Please fill in this form to book an inspection with us.
        </p>
      </div>
      <section>
        <form
          className="flex flex-col gap-4 mt-10 justify-center"
          onSubmit={handleBooking}
        >
          <section className=" md:flex items-center flex-wrap gap-5 space-y-3 justify-center md:space-y-0 ">
            <div className="relative">
              <input
                type="text"
                className=" bg-transparent border w-[400px] max-w-full h-[40px] ps-8 pe-3 relative outline-none rounded"
                placeholder="FirstName"
                name="firstName"
                value={bookings.firstName}
                onChange={handleInspection}
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
                className=" bg-transparent border w-[400px] max-w-full h-[40px] ps-8 pe-3 relative outline-none rounded max-w-full"
                placeholder="LastName"
                name="lastName"
                value={bookings.lastName}
                onChange={handleInspection}
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
              id=""
              className="w-[820px] mx-auto max-w-full h-[40px] ps-8 pe-3 relative outline-none bg-transparent border rounded"
              placeholder="E-mail Address"
              name="email"
              value={bookings.email}
              onChange={handleInspection}
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
              id=""
              className="w-[820px] mx-auto max-w-full h-[40px] ps-8 pe-3 relative outline-none bg-transparent border rounded"
              placeholder="Phone Number"
              name="phoneNumber"
              value={bookings.phoneNumber}
              onChange={handleInspection}
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
              id=""
              className="w-[820px] mx-auto max-w-full h-[40px] ps-8 pe-3 relative outline-none bg-transparent border rounded"
              placeholder="Location"
              name="location"
              value={bookings.location}
              onChange={handleInspection}
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
                name="inspectionDate"
                value={bookings.inspectionDate}
                onChange={handleInspection}
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
                name="inspectionTime"
                value={bookings.inspectionTime}
                onChange={handleInspection}
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
              id=""
              className="w-[820px] mx-auto max-w-full h-[250px] ps-8 pe-3 pt-3 relative outline-none bg-transparent border rounded resize-none"
              placeholder="Additional Message......"
              name="message"
              value={bookings.message}
              onChange={handleInspection}
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
            disabled={save}
          >
            {save ? <AdminBtnSave /> : "Submit"}
          </Button>
        </form>
      </section>
    </main>
  );
};
