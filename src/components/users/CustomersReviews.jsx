import React from "react";
import sale from "../../assets/Image/sale.png";
import lineImg from "../../assets/Image/lineImg.png";
import { UserRating } from "./UserRating";
import { Ratings } from "./Rating";

export const CustomersReviews = ({ review }) => {
  console.log(review);
  return (
    <main>
      <section className="border py-3 px-5 mt-5 border-[#343434] rounded-lg">
        {/* this is for the user rating */}
        <div>
          <h1 className="font-semibold text-[18px]">Visitor Ratings</h1>
        </div>

        <section className="flex justify-between items-center mt-5 bg-black md:h-[150px] flex-wrap px-3 py-3">
          {/* this is for visitor ratings */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl ">4.5</h1>
            <p className="text-[#ABABAB] text-xs mb-2">Out of 5.0</p>
            <div>
              <UserRating rate={4} />
            </div>
          </div>

          <div className="w-0.5 bg-[#ABABAB] md:h-[100px]"></div>

          <main>
            {review.map((r) => {
              const { property, _id } = r;

              return (
                <div key={_id}>
                  <div>
                    <h1 className="font-semibold text-sm">Property</h1>
                    <div className="flex gap-3 items-center">
                      {/* <img
                        src={lineImg}
                        alt=""
                        className="w-[200px] md:w-[100px]"
                      /> */}
                      <Ratings num={property}/>
                      <p>{property}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </main>

          <section>
            {/* <div>
              <h1 className="font-semibold text-sm">Property</h1>
              <div className="flex gap-3 items-center">
                <img src={lineImg} alt="" className="w-[200px] md:w-[100px]" />
                <p>4</p>
              </div>
            </div> */}
            {/* <div>
              <h1 className="font-semibold text-sm">Location</h1>
              <div className="flex gap-3 items-center">
                <img src={lineImg} alt="" className="w-[200px] md:w-[100px]" />
                <p>5</p>
              </div>
            </div> */}
          </section>

          <section>
            {/* <div>
              <h1 className="font-semibold text-sm">Value for Money</h1>
              <div className="flex gap-3 items-center">
                <img src={lineImg} alt="" className="w-[200px] md:w-[100px]" />
                <p>4</p>
              </div>
            </div> */}
            {/* <div>
              <h1 className="font-semibold text-sm">Support</h1>
              <div className="flex gap-3 items-center">
                <img src={lineImg} alt="" className="w-[200px] md:w-[100px]" />
                <p>4</p>
              </div>
            </div> */}
          </section>
        </section>
      </section>
      {/* rating card  - above*/}

      {/* rating words below */}
      <section className="border border-[#343434] w-[270px] md:w-[540px]  md:mt-5 p-5 rounded-xl  mt-5">
        {/* this is for reviews */}
        <h1 className="font-semibold text-lg">Reviews</h1>
        <p className="text-[#8D8D8D] text-sm">
          {review.length} {review.length === 1 ? "review" : "reviews"}
        </p>

        {review.map((r) => {
          const { name, email, message, _id } = r;

          return (
            <div key={_id}>
              <p className="font-semibold">
                {name}
                <span className="font-medium text-[#F78214] ms-1">
                  ({email})
                </span>
              </p>
              <p className="text-[#8D8D8D] text-sm">22-03-2023 09:30:20am</p>

              <p className="text-[#8D8D8D] text-sm mt-3">{message}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};
