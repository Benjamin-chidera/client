import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const Private = () => {
  const token = Cookies.get("token");
  const decode = jwtDecode(token);

  

  return (
    <div>
      {token && decode.role === "user" ? (
        <Outlet />
      ) : (
        <Navigate to={"/signIn"} />
      )}
    </div>
  );
};
