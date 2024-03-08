/* eslint-disable react/prop-types */
import React from "react";
import { Rating } from "@material-tailwind/react";

export const PostRating = ({ rate, Change, name }) => {
  return (
    <Rating
      value={rate}
      onChange={(value) => {
        Change({ [name]: value });
      }}
    />
  );
};

// export const PostRating = () => {
//   return (
//     <div>PostRating</div>
//   )
// }
