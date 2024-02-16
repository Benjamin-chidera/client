import React from "react";
import { reviews } from "../../data/Reviews";

export const ReviewsCard = () => {
  return (
    <div className=" space-y-10 bg-[#181818] p-5">
      {reviews.map((r) => {
        const { id, name, body, rating, time } = r;

        return (
          <section key={id}>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">{name}</h1>
              <p className="text-[#8D8D8D]">{time}</p>
            </div>
            <div className="mb-5">
              <p className="text-[#F78214]">{rating}</p>
              <p className="text-[#8D8D8D]">{body}</p>
            </div>
            <hr />
          </section>
        );
      })}
    </div>
  );
};
