import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AdminPrivate = () => {
  const token = Cookies.get("token");

  return <div>{token ? <Outlet /> : <Navigate to={"/admin/signIn"} />}</div>;
};
