import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import logo from "../../assets/Image/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import { AdminBtnSave } from "../../components/admin/AdminBtnSave";

export const SignUp = () => {
  const url = "http://localhost:3000/api/v1/signup";
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "admin",
    image: "",
    name: "",
  });
  const navigate = useNavigate();
  const [save, setSave] = useState(false);

    const handleChange = (e) => {
      if (e.target.name === "image") {
        // Handle image upload separately
        setUser({ ...user, image: e.target.files[0] });
      } else {
        // Handle other form fields
        setUser({ ...user, [e.target.name]: e.target.value });
      }
    };

  const handleSignUp = async (e) => {
    e.preventDefault();

     if (
       !user.password ||
       !user.confirmPassword ||
       !user.email ||
       !user.name ||
       !user.image
     ) {
       toast.error("Please fill all required fields");
       setSave(false);
     }

     if (user.password !== user.confirmPassword) {
       setSave(false);
       toast.error("Passwords do not match");
     }

     if (user.password.length < 7) {
       setSave(false);
       toast.error("Password must be at least 7 characters");
     }

    try {
      setSave(true);

       const formData = new FormData();

       formData.append("email", user.email);
       formData.append("password", user.password);
       formData.append("confirmPassword", user.confirmPassword);
       formData.append("name", user.name);
       formData.append("image", user.image);
       formData.append("role", user.role)

      const {
        data: { users },
      } = await axios.post(url, formData);

      if (users) {
        console.log(users);
        setSave(false);
        // navigate("/admin/signIn");
        setUser({
          email: "",
          password: "",
          confirmPassword: "",
          role: "admin",
          image: "",
          name: "",
        });
      }
    } catch (error) {
      setSave(false);
      console.log(error?.response?.data?.err);
      toast.error(error?.response?.data?.err);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <Toaster />
      <Card
        color="transparent"
        shadow={false}
        className="bg-[#1F1F1F] w-fit mt-40 h-[670px] py-5 px-5 md:px-14 mx-auto"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="flex justify-center"
        >
          <Link to={"/admin"}>
            <img src={logo} alt="company-logo" />
          </Link>
        </Typography>
        <Typography color="gray" className="mt-3 font-normal text-center">
          Create an admin account
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSignUp}
        >
          <div className="mb-1 flex flex-col gap-4">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-white"
            >
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
              name="email"
              value={user.email}
              onChange={handleChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-white"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
              name="password"
              value={user.password}
              onChange={handleChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-white"
            >
              Confirm Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-white"
            >
              UserName
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Your username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
              name="name"
              value={user.name}
              onChange={handleChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-white"
            >
              Profile
            </Typography>
            <Input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <Button className="mt-6 bg-[#F78214]" fullWidth type="submit">
            {save ? <AdminBtnSave /> : "sign up"}
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal text-white"
          >
            Already a user?
            <Link
              className="font-medium ms-3 text-[#F78214]"
              to={"/admin/signIn"}
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </main>
  );
};
