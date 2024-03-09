import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Correct import statement

export const AdminPrivate = () => {
  const token = Cookies.get("token");
  let decode = null;

  try {
    // Ensure token exists before attempting to decode
    if (token) {
      decode = jwtDecode(token);
    }
  } catch (error) {
    // Handle decoding errors (e.g., invalid token format)
    console.error("Error decoding token:", error);
  }

  return (
    <div>
      {token && decode && decode.role === "admin" ? (
        <Outlet />
      ) : (
        <Navigate to={"/admin/signIn"} />
      )}
    </div>
  );
};
