import React from 'react'
import { Rating } from "@material-tailwind/react";

export const UserRating = ({ rate }) => {
  return <Rating value={rate} />;
};
