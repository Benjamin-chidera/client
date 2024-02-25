import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Private = () => {
  const token = Cookies.get("token");

  return <div>{token ? <Outlet /> : <Navigate to={"/signIn"} />}</div>;
};
