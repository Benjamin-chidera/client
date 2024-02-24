/* eslint-disable react/prop-types */
import React from "react";
import { property } from "../../data/Property";
import { Link, useNavigate } from "react-router-dom";

export const SimilarProperties = ({ similar }) => {
  const similars = property.slice(0, 6);
  // const history = useHistory();
  const navigate = useNavigate();

  console.log(similar);

  const move = (_id) => {
    navigate(`/propertyDetails/${_id}`);
    window.location.reload();
  };

  // const moves = (_id) => {
  //   history.push(`/propertyDetails/${_id}`);
  //   // window.location.reload();
  // };

  return (
    <div className="flex flex-col justify-center">
      {similar?.map((s) => {
        const {
          _id,
          title,
          media: { images },
          price,
          location,
        } = s;

        return (
          <div
            key={_id}
            className="flex justify-center items-center gap-5 border mt-5 py-5 rounded-lg border-[#343434] px-3"
          >
            <div>
              <img src={images[0]} alt="" className="w-[100px] h-[100px]" />
            </div>

            <div className=" space-y-2">
              <div>
                <h1 className="text-sm font-semibold">{title}</h1>
                <address className=" not-italic text-xs text-[#8D8D8D]">
                  {location}
                </address>
                <p className="">${price}</p>
              </div>
              <div className="mt-3">
                <Link
                  className="text-[#F78214] border border-[#F78214] py-2 px-2 rounded-lg text-xs"
                  // to={moves}
                  onClick={() => move(_id)}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
