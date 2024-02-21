import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export const UnsoldSuccess = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen} className="bg-[#181818]">
        <DialogHeader className="text-xl max-w-[700px] md:max-w-[350px] text-center mx-auto text-white">
          Property Marked As Unsold Successfully!
        </DialogHeader>
        <DialogBody className="flex items-center flex-col">
          <p className="max-w-[270px] text-center mb-5 text-white">
            The property has been Marked as unsold successfully. Kindly click
            continue to view other sold properties
          </p>
          <Button className="w-[300px] mx-auto bg-[#F78214] mb-4">
            Continue
          </Button>
        </DialogBody>
      </Dialog>
    </>
  );
};
