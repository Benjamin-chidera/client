import { useState } from "react";
import logo from "./../../assets/Image/logo.png";

import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav>
      <main className=" flex justify-between px-5 bg-[#181818] h-24 items-center fixed w-full top-0 z-10">
        <div className="flex items-center gap-20">
          <img src={logo} alt="Company-Logo" />

          <div className="hidden md:block"></div>
        </div>

        <div className=" md:hidden">
          {/* this is the mobile device menu icon */}
          <Hamburger toggled={isOpen} toggle={setOpen} color="gray" />
        </div>
      </main>

      <CSSTransition
        in={isOpen}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames="slide-in-left"
      >
        <section className="p-5 bg-[#403b3b] h-full w-[250px] fixed top-0 md:hidden z-10">
          {/* menu bar for admin-mobile devices */}

          <section className="mt-5 text-center space-y-14"></section>
        </section>
      </CSSTransition>
    </nav>
  );
};
