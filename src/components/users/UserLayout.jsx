import { Outlet } from "react-router-dom";
import { Navbar } from "../users/Navbar";

export const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
