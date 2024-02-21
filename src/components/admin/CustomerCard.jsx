import React from "react";
import { customer } from "../../data/RecentCustomers";

export const CustomerCard = () => {
  return (
    <div className="bg-[#181818] p-3 w-[669px] h-[586px]  rounded-[10px]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold my-5">Recent Customers</h1>
        <p className="text-sm">View All</p>
      </div>
      {customer.map((c) => {
        const { name, phone, location, Registration, id, img } = c;

        return (
          <section key={id} className="flex gap-14 mt-5 items-center">
            <div>
              <img src={img} alt="" className="w-[100px] h-[100px]" />
            </div>

            <div>
              <p className="mb-3 text-[#F78214]">0030</p>
              <h1 className="text-[20px] font-semibold">{name}</h1>
              <p className="text-[#8D8D8D] [text-[16px]">Phone: {phone}</p>
            </div>

            <div>
              <p className="mb-3 font-[700] text-[16px]">Location</p>
              <p className="text-[20px] font-semibold text-[16px]">
                {location.street}
              </p>
              <p className="text-[#8D8D8D] [text-[16px]">{location.govt}</p>
            </div>

            <div>
              <p className="mb-3 font-[700] text-[16px]">Registration</p>
              <p className="text-[#8D8D8D] [text-[16px]">{Registration.date}</p>
              <p className="text-[#8D8D8D text-[16px] ">{Registration.time}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};
