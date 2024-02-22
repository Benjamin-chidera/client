import { Outlet } from "react-router-dom";
import { Navbar } from "../users/Navbar";
import { Footer } from "./Footer";

export const UserLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer/>
    </div>
  );
};
