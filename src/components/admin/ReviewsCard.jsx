import React from "react";
import { reviews } from "../../data/Reviews";
import { useGlobalContext } from "../../context/context";
import { UserRating } from "../../components/users/UserRating";

export const ReviewsCard = () => {
  const { AllReview } = useGlobalContext();
  console.log(AllReview);
  return (
    <div className=" space-y-10">
      {AllReview.map((r) => {
        const {
          id,
          name,
          message,
          support,
          property,
          location,
          value,
          updatedAt,
        } = r;

        const rate = (support + property + location + value) / 4

        return (
          <section key={id}>
            <div className="flex justify-between items-center gap-5">
              <h1 className="text-xl font-semibold">{name}</h1>
              <p className="text-[#8D8D8D] text-xs ms-3">
                {new Date(updatedAt).toDateString()}
              </p>
            </div>
            <div className="mb-5">
              <p className="text-[#F78214]">
                <UserRating rate={rate} />
              </p>
              <p className="text-[#8D8D8D]">{message}</p>
            </div>
            <hr />
          </section>
        );
      })}
    </div>
  );
};
