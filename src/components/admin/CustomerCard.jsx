import React, { useEffect } from "react";
import { customer } from "../../data/RecentCustomers";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

export const CustomerCard = () => {
  const { getInspection, inspection, deleteInspection } = useGlobalContext();

  useEffect(() => {
    getInspection();
  }, []);

  console.log(inspection);

  return (
    <div className="bg-[#181818] p-3 w-[669px] pb-5  rounded-[10px]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold my-5">Recent Customers</h1>
        <Link className="text-sm" to={"/admin/inspection"}>
          View All
        </Link>
      </div>
      {inspection.length < 1 && (
        <p className="md:text-center text-xl font-bold">No Customer Yet</p>
      )}
      {inspection.map((c) => {
        const {
          firstName,
          phoneNumber,
          location,
          inspectionTime,
          inspectionDate,
          _id,
          img,
        } = c;

        return (
          <section key={_id} className="flex gap-14 mt-5 items-center">
            <div>
              <img src={img} alt="" className="w-[100px] h-[100px]" />
            </div>

            <div>
              <p className="mb-3 text-[#F78214]">0030</p>
              <h1 className="text-[20px] font-semibold">{firstName}</h1>
              <p className="text-[#8D8D8D] [text-[16px]">
                Phone: {phoneNumber}
              </p>
            </div>

            <div>
              <p className="mb-3 font-[700] text-[16px]">Location</p>
              <p className="text-[20px] font-semibold text-[16px]">
                {location}
              </p>
              <p className="text-[#8D8D8D] [text-[16px]">LGA</p>
            </div>

            <div>
              <p className="mb-3 font-[700] text-[16px]">Registration</p>
              <p className="text-[#8D8D8D] [text-[16px]">
                {new Date(inspectionDate).toDateString()}
              </p>
              <p className="text-[#8D8D8D text-[16px] ">
                {inspectionTime.toLocaleString()}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
};
