import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export const Unsold = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-[#181818]"
      >
        <DialogHeader className="text-xl max-w-[700px] md:max-w-[350px] text-center mx-auto text-white">
          Are you sure you want to mark this property as unsold?
        </DialogHeader>
        <DialogBody className="flex items-center flex-col">
          <Button className="w-[300px] mx-auto bg-[#F78214] mb-4">Yes</Button>
          <Button className="w-[300px] mx-auto bg-transparent border border-[#F78214] text-[#F78214]">
            No
          </Button>
        </DialogBody>
      </Dialog>
    </>
  );
};
