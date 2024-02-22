import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export const SuccessFullBooking = ({ handleOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      <Dialog open={open} handler={handleOpen} className="bg-[#181818]">
        <DialogHeader>
          <h1 className="text-xl max-w-[700px] md:max-w-[350px] text-center flex justify-center text-white">
            Booking was Successful
          </h1>
        </DialogHeader>
        <DialogBody className="flex items-center flex-col">
          <Button
            className="w-[300px] mx-auto bg-[#F78214] mb-4"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </DialogBody>
      </Dialog>
    </>
  );
};
