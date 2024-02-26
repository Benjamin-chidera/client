import React from "react";
import { Rating } from "@material-tailwind/react";

export const PostRating = ({ rate, Change, name }) => {
  return <Rating value={rate} onChange={Change} name={name}/>;
};
