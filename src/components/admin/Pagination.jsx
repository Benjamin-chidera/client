import React, { useState } from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
 

export const Pagination = () => {
 const [active, setActive] = useState(1);
 
  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "white",
      onClick: () => setActive(index),
    });
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex justify-center items-center text-xs mt-10">
      <Button
        variant="text"
        className="flex items-center  active:bg-white"
        onClick={prev}
        disabled={active === 1}
      >
        <IoIosArrowBack color="gray" size={20} />
      </Button>
      <div className="flex items-center  text-xs">
        <IconButton {...getItemProps(1)} size='sm'>1</IconButton>
        <IconButton {...getItemProps(2)} size='sm'>2</IconButton>
        <IconButton {...getItemProps(3)} size='sm'>3</IconButton>
        <IconButton {...getItemProps(4)} size='sm'>4</IconButton>
        <IconButton {...getItemProps(5)} size='sm'>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center text-xs gap-1 active:bg-white"
        onClick={next}
        disabled={active === 5}
      >
        <IoIosArrowForward color="gray" size={20} />
      </Button>
    </div>
  );
}
