import React, { useState } from "react";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { PiHouse } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
// import d1 from "../../assets/Image/d1.png";
import black from "../../assets/Image/black.png";
// import d2 from "../../assets/Image/d2.png";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import { IoCameraOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AdminBtnSave } from "../../components/admin/AdminBtnSave";

export const AddNewProperty = () => {
  const { BASE_URL } = useGlobalContext();
  const [saved, setSave] = useState(false);
  const redirect = useNavigate();
  const [imgPreview, setImgPreview] = useState({
    img1: black,
    img2: black,
    img3: black,
    img4: black,
    img5: black,
    avatar: black,
    video:
      "https://res.cloudinary.com/dlb8nbz13/video/upload/c_scale,h_390,q_91,w_618/v1706177257/WhatsApp_Video_2024-01-25_at_11.05.54_eb4762c7_paf2hg.mp4",
  });

  const [property, setProperty] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    tags: "",
    propertyType: "",
    bedroom: "",
    bathroom: "",
    squareFeet: "",
    name: "",
    whatsappNumber: "",
    phoneNumber: "",
    garage: "",
    video: null,
    avatar: null,
    img1: null,
    img2: null,
    img3: null,
    img4: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const handleImage = (id) => {
    let fileInput = document.getElementById(id);
    fileInput.click();
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImgPreview((prevState) => ({
          ...prevState,
          [id]: URL.createObjectURL(file),
        }));

        setProperty((prevProperty) => ({
          ...prevProperty,
          [id]: file,
        }));
      }
    };
  };

  const handleAddNewProperty = async (e) => {
    e.preventDefault();
    setSave(true);

    if (
      !property.title ||
      !property.price ||
      !property.location ||
      !property.description ||
      !property.tags ||
      !property.propertyType ||
      !property.bedroom ||
      !property.bathroom ||
      !property.squareFeet ||
      !property.name ||
      !property.whatsappNumber ||
      !property.phoneNumber ||
      !property.garage ||
      !property.video ||
      !property.avatar ||
      !property.img1 ||
      !property.img2 ||
      !property.img3 ||
      !property.img4
    ) {
      toast.error("Please fill all property information");
      setSave(false);
    }

    const formData = new FormData();
    formData.append("title", property.title);
    formData.append("price", property.price);
    formData.append("description", property.description);
    formData.append("location", property.location);
    formData.append("tags", property.tags);
    formData.append("propertyType", property.propertyType);
    formData.append("bedroom", property.bedroom);
    formData.append("bathroom", property.bathroom);
    formData.append("garage", property.garage);
    formData.append("squareFeet", property.squareFeet);
    formData.append("name", property.name);
    formData.append("whatsappNumber", property.whatsappNumber);
    formData.append("phoneNumber", property.phoneNumber);
    formData.append("video", property.video);
    formData.append("avatar", property.avatar);
    formData.append("images", property.img1);
    formData.append("images", property.img2);
    formData.append("images", property.img3);
    formData.append("images", property.img4);

    try {
      const { data } = await axios.post(BASE_URL, formData);
      if (data) {
        setSave(false);
        console.log("data received", data);
        setProperty({
          title: "",
          price: "",
          location: "",
          description: "",
          tags: "",
          propertyType: "",
          bedroom: "",
          bathroom: "",
          squareFeet: "",
          name: "",
          whatsappNumber: "",
          phoneNumber: "",
          garage: "",
          video: null,
          avatar: null,
          img1: null,
          img2: null,
          img3: null,
          img4: null,
        });
        toast.success("Property successfully added");
        redirect("/admin/all-properties");
      }
    } catch (error) {
      setSave(false);
      console.log(error);
    }
  };

  return (
    <section className="container mx-auto w-full">
      <Toaster />
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center ">
          <RiArrowDropLeftFill size={40} color="orange" />
          <h1 className=" font-semibold text-xl">Add New Property</h1>
        </div>

        <header className="flex items-center justify-between">
          <div className="flex gap-2 items-center text-sm">
            <Link className="flex gap-2 items-center">
              <PiHouse size={20} /> Home
            </Link>{" "}
            / <p>Add New Property</p>
          </div>
        </header>
      </div>
      <form onSubmit={handleAddNewProperty}>
        <main>
          <section className="flex justify-between items-center my-5 flex-wrap bg-[#181818] p-5 rounded-lg w-screen max-w-full mx-auto">
            <div>
              <h1 className="font-semibold text-xl">New Title</h1>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-[#F78214] font-semibold text-sm">Property</p>
                /<p className="text-[#8D8D8D] text-xs">Address</p>
              </div>
            </div>

            <div className="flex gap-4 mt-3">
              <Button
                size="sm"
                className="bg-[#F78214] text-sm rounded-lg px-10"
                type="submit"
              >
                {saved ? <AdminBtnSave /> : "Saved"}
              </Button>
            </div>
          </section>

          <section className="flex gap-3">
            <div className=" relative cursor-pointer">
              <div onClick={() => handleImage("img1")} className="pic-one">
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  id="img1"
                />
                {imgPreview.img1 && (
                  <img
                    src={imgPreview.img1}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="text-center absolute top-[40%] left-[20%] md:top-[40%] md:left-[35%] pic-one-cam">
                <IoCameraOutline className="w-[40px] h-[40px] md:w-[70px] mx-auto md:h-[70px]" />
                <p className="text-[10px] md:text-lg">
                  Click to change picture
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-3 max-w-full">
              <div className=" relative cursor-pointer">
                {/* img-col-1 */}
                <div onClick={() => handleImage("img2")} className="pic-two">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    id="img2"
                  />
                  {imgPreview.img2 && (
                    <img
                      src={imgPreview.img2}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="text-center absolute top-[20%] left-[20%] md:top-[20%] md:left-[35%] pic-two-cam">
                  <IoCameraOutline className="w-[20px] h-[20px] md:w-[40px] mx-auto md:h-[40px]" />
                  <p className="text-[10px] md:text-sm">
                    Click to change picture
                  </p>
                </div>
              </div>
              <div className=" relative cursor-pointer">
                {/* img-col-2 */}
                <div onClick={() => handleImage("img3")} className="pic-two">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    id="img3"
                  />
                  {imgPreview.img3 && (
                    <img
                      src={imgPreview.img3}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="text-center absolute top-[20%] left-[20%] md:top-[20%] md:left-[35%] pic-two-cam">
                  <IoCameraOutline className="w-[20px] h-[20px] md:w-[40px] mx-auto md:h-[40px]" />
                  <p className="text-[10px] md:text-sm">
                    Click to change picture
                  </p>
                </div>
              </div>
              <div className=" relative cursor-pointer">
                {/* img-col-3 */}
                <div onClick={() => handleImage("img4")} className="pic-two">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    id="img4"
                  />
                  {imgPreview.img4 && (
                    <img
                      src={imgPreview.img4}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="text-center absolute top-[20%] left-[20%] md:top-[20%] md:left-[35%] pic-two-cam  ">
                  <IoCameraOutline className="w-[20px] h-[20px] md:w-[40px] mx-auto md:h-[40px]" />
                  <p className="text-[10px] md:text-sm">
                    Click to change picture
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex gap-7 md:gap-12 flex-wrap">
            {/* after images */}

            <section className="my-5">
              <section className="flex items-center gap-5">
                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">Tags</label>
                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] md:w-[320px] py-2 px-3 outline-none my-1 placeholder:text-xs tags"
                    placeholder="Select Tags"
                    name="tags"
                    value={property.tags}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={property.propertyType}
                    onChange={handleChange}
                    id=""
                    className=" bg-transparent border rounded-md border-[#8D8D8D] h-[43px] w-[150px] md:w-[200px] py-2 px-3 outline-none my-1"
                  >
                    <option value="" className=" bg-black" disabled>
                      Select Property Type
                    </option>
                    <option value="land" className=" bg-black">
                      Land
                    </option>
                    <option value="house" className=" bg-black">
                      House
                    </option>
                  </select>
                </div>
              </section>

              <section className="flex  gap-5">
                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">Title</label>

                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D] w-[180px] md:w-[320px] py-2 px-3 outline-none my-1 placeholder:text-xs tags"
                    placeholder="Select Title"
                    name="title"
                    value={property.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">Sales Price</label>

                  <input
                    type="text"
                    className=" bg-transparent max-w-full border rounded-md border-[#8D8D8D] w-[120px] md:w-[200px] py-2 px-3 outline-none my-1 placeholder:text-xs"
                    placeholder="Select Price"
                    name="price"
                    value={property.price}
                    onChange={handleChange}
                  />
                </div>
              </section>

              <div className="mb-4 flex flex-col max-w-full">
                <label className="text-[#8D8D8D] text-xs">Location</label>

                <input
                  type="text"
                  className=" bg-transparent border rounded-md border-[#8D8D8D] w-[320px] md:w-[540px] max-w-full py-2 px-3 outline-none my-1 placeholder:text-xs location"
                  placeholder="Select Location"
                  name="location"
                  value={property.location}
                  onChange={handleChange}
                />
              </div>

              <div className="border p-3 rounded-xl w-[320px] md:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold max-w-full location">
                <div className="mb-4 flex flex-col">
                  <label className="text-[#8D8D8D] text-xs">Description</label>

                  <textarea
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D]  py-2 px-3 outline-none my-1 h-[320px] max-w-full resize-none placeholder:text-xs "
                    placeholder="Select Descriptions..."
                    name="description"
                    value={property.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <section className="border p-3 rounded-xl w-[320px] md:w-[540px] max-w-full mt-4 border-[#343434] text-sm flex flex-col font-semibold location">
                <p className="text-xl mb-5">Features</p>
                <div className="flex justify-center gap-8 items-center flex-wrap">
                  <div className=" relative">
                    <input
                      type="number"
                      className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2  outline-none my-1 relative px-6 placeholder:text-xs"
                      placeholder="Select Bedroom"
                      name="bedroom"
                      value={property.bedroom}
                      onChange={handleChange}
                    />
                    <IoBedOutline className="absolute top-4 left-2" />
                  </div>
                  <div className=" relative">
                    <input
                      type="number"
                      className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2  outline-none my-1 relative px-6 placeholder:text-xs"
                      placeholder="Select Bathroom"
                      name="bathroom"
                      value={property.bathroom}
                      onChange={handleChange}
                    />
                    <LuBath className="absolute top-4 left-2" />
                  </div>
                  <div className=" relative">
                    {/* <input
                      type="text"
                      className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2  outline-none my-1 relative px-6 placeholder:text-xs"
                      placeholder="Select Garage"
                    /> */}

                    <select
                      id=""
                      className=" bg-transparent border rounded-md border-[#8D8D8D]  py-2  outline-none my-1 relative px-6 placeholder:text-xs w-[100px]"
                      name="garage"
                      value={property.garage}
                      onChange={handleChange}
                    >
                      <option value="" className="bg-black">
                        Select Garage
                      </option>
                      <option value="yes" className="bg-black">
                        Yes
                      </option>
                      <option value="no" className="bg-black">
                        No
                      </option>
                    </select>
                    <GiHomeGarage className="absolute top-4 left-2" />
                  </div>
                  <div className=" relative">
                    <input
                      type="number"
                      className=" bg-transparent border rounded-md border-[#8D8D8D] w-[150px] py-2  outline-none my-1 relative px-6 placeholder:text-xs"
                      placeholder="Select Square Feet"
                      name="squareFeet"
                      value={property.squareFeet}
                      onChange={handleChange}
                    />
                    <FaRegSquare className="absolute top-4 left-2" />
                  </div>
                </div>
              </section>

              <div className="border p-3 rounded-xl w-[320px] md:w-[540px] max-w-full  mt-4 border-[#343434] text-sm flex flex-col font-semibold location">
                <p className="text-xl mb-5">Property Video</p>
                <div className=" relative cursor-pointer">
                  <div
                    onClick={() => handleImage("video")}
                    className=" object-cover w-full h-[224px] max-w-full md:h-[373px] relative"
                  >
                    <input
                      type="file"
                      style={{ display: "none" }}
                      accept="video/*"
                      id="video"
                    />

                    {imgPreview.video && (
                      <div className=" object-cover w-full h-[224px] md:h-[373px] relative">
                        <ReactPlayer
                          url={imgPreview.video}
                          width={"100%"}
                          height={"100%"}
                          controls
                        />
                      </div>
                    )}
                  </div>

                  <div className="text-center absolute top-[40%] left-[35%] md:top-[40%] md:left-[30%]">
                    <IoCameraOutline className="w-[40px] h-[40px] md:w-[70px] mx-auto md:h-[70px]" />
                    <p className="text-[10px] md:text-lg">
                      Click to change picture
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="border border-[#343434] w-[320px] md:w-[300px] h-[400px] md:mt-5 p-5 rounded-xl text-center sales">
                {/* sale support */}

                <div className=" relative cursor-pointer">
                  <div
                    onClick={() => handleImage("avatar")}
                    className=" object-cover w-[114px] mx-auto h-[114px] md:h-[114px]  relative rounded-full"
                  >
                    <input
                      type="file"
                      style={{ display: "none" }}
                      accept="image/*"
                      id="avatar"
                    />
                    {imgPreview.avatar && (
                      <img
                        src={imgPreview.avatar}
                        alt="Preview"
                        className=" object-cover w-[114px] mx-auto h-[114px] md:h-[114px] relative rounded-full"
                      />
                    )}
                  </div>

                  <div className="text-center absolute top-[37%] left-[45%] md:top-[35%] md:left-[43%] sales-cam">
                    <IoCameraOutline className="w-[30px] h-[30px] md:w-[40px] mx-auto md:h-[40px]" />
                  </div>
                </div>

                <div className="mb-4 flex flex-col mt-3 text-start">
                  <label className="text-[#8D8D8D] text-xs">
                    Support In-Charge
                  </label>

                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D]  py-2 px-3 outline-none my-1 placeholder:text-xs"
                    placeholder="Select Name"
                    name="name"
                    value={property.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 flex flex-col mt-3 text-start">
                  <label className="text-[#8D8D8D] text-xs">
                    WhatsApp Contact Details
                  </label>

                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D]  py-2 px-3 outline-none my-1 placeholder:text-xs"
                    placeholder="Select What'sApp Number"
                    name="whatsappNumber"
                    value={property.whatsappNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 flex flex-col mt-3 text-start">
                  <label className="text-[#8D8D8D] text-xs">
                    Call Contact Details
                  </label>

                  <input
                    type="text"
                    className=" bg-transparent border rounded-md border-[#8D8D8D]  py-2 px-3 outline-none my-1 placeholder:text-xs"
                    placeholder="Select Phone Number"
                    name="phoneNumber"
                    value={property.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>
          </section>
        </main>
      </form>
    </section>
  );
};
