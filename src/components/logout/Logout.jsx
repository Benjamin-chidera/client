import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const Logout = () => {
  const token = Cookies.get("token");
  let decode = null;

  try {
    if (token) {
      decode = jwtDecode(token);

      console.log(decode);
    }
  } catch (error) {
    console.log("Error decoding token", error);
  }

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <Menu>
      <MenuHandler>
        <Button>
          {" "}
          <img
            src={decode?.image}
            alt="admin-pic"
            className=" w-[50px] h-[50px] rounded-full"
          />
        </Button>
      </MenuHandler>
      <MenuList className="bg-black z-20">
        <MenuItem>
          <Button
            className="font-bold  text-white"
            size="sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
