/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import { Rating } from "@material-tailwind/react";

export const PostRating = ({ rate, Change, name }) => {
  return (
    // <Rating
    //   value={rate}
    //   onChange={(value) => {
    //     Change({ [name]: value });
    //   }}
    //   className=""
    // />
    <ReactStars
    value={rate}
      onChange={(value) => {
        Change({ [name]: value });
      }}
    size={24}
    activeColor="#ffd700"
  />
  );
};

// export const PostRating = () => {
//   return (
//     <div>PostRating</div>
//   )
// }
