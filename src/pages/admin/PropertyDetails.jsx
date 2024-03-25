import { useEffect, useState } from "react";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { PiHouse } from "react-icons/pi";
import { Link, useParams, useNavigate } from "react-router-dom";

import vi from "../../assets/Image/vi.png";
import { MdLocationOn } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import ReactPlayer from "react-player";
import { useGlobalContext } from "../../context/context";
import Cookies from "js-cookie";
import { CurrencyFormatter } from "../../components/CurrencyFormatter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const PropertyDetails = () => {
  const [single, setSingle] = useState();
  const { propertyId } = useParams();
  const { deleteProperty } = useGlobalContext();
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const url = `https://yemsyays-realestate-server.onrender.com/api/v1/properties/${propertyId}`;

  const getSingleProperty = async () => {
    try {
      const { data } = await axios(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSingle(data.property);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(single);

  useEffect(() => {
    getSingleProperty();
  }, [propertyId]);

  return (
    <main className="xl:container xl:mx-auto w-full">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center ">
          <RiArrowDropLeftFill size={40} color="orange" />
          <h1 className=" font-semibold text-xl">Properties Details</h1>
        </div>

        <header className="flex flex-wrap text-sm items-center justify-between">
          <div className="flex gap-2 items-center">
            <Link className="flex gap-2 items-center">
              <PiHouse size={20} /> Home
            </Link>{" "}
            / <Link>Properties</Link> / <p>Properties Details</p>
          </div>
        </header>
      </div>

      <section className="flex justify-between items-center my-3 flex-wrap bg-[#181818] w-[100%] h-[200px] max-w-full px-5 rounded-lg pb-3 md:h-[80px]">
        <div>
          <h1 className="font-semibold text-xl">{single?.title}</h1>
          <p className="text-[#F78214] font-semibold mt-3">Listed Property</p>
        </div>

        <div className="flex gap-4 mt-3 ">
          <Link
            to={`/admin/edit-property/${propertyId}`}
            className="bg-[#F78214] rounded-lg w-[100px] h-[50px] p-3 font-semibold flex justify-center items-center"
          >
            Edit
          </Link>

          <Link className="border text-[#F78214] border-[#F78214] rounded-lg md:w-[130px] text-sm h-[50px] max-w-full p-3 font-semibold flex justify-center items-center">
            Unlist Property
          </Link>
        </div>
      </section>

      <section className="flex gap-3">
        <div className="">
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={single?.media?.images[0]}
            alt=""
            className=" object-cover w-[176px] h-[224px] md:w-[760px] md:h-[373px] lg:w-[500px] xl:h-[600px] xl:w-[750px] pic-one"
          />
        </div>

        <div className=" object-cover flex flex-col gap-3">
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={single?.media?.images[1]}
            alt=""
            className=" object-cover w-[226px] h-[66px] md:w-[360px] md:h-[116px] lg:w-[420px] xl:h-[192px] xl:w-[570px] pic-two"
          />
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={single?.media?.images[2]}
            alt=""
            className=" object-cover w-[226px] h-[66px] md:w-[360px] md:h-[116px] lg:w-[420px] xl:h-[192px] xl:w-[570px] pic-two"
          />
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={single?.media?.images[3]}
            alt=""
            className=" object-cover w-[226px] h-[66px] md:w-[360px] md:h-[116px] lg:w-[420px] xl:h-[192px] xl:w-[570px] pic-two"
          />
        </div>
      </section>

      <section className="flex gap-7 md:gap-12 flex-wrap">
        <section>
          <div className="flex items-center gap-3 mt-5">
            <LazyLoadImage
              loading="lazy"
              effect="blur"
              src={single?.tags}
              alt=""
            />
          </div>

          <section className="flex justify-between">
            <div>
              <h1 className="font-bold text-xl">{single?.title}</h1>
              <p className="text-[#8D8D8D] text-xs flex gap-1 items-center">
                <MdLocationOn />
                {single?.location}
              </p>
            </div>

            <div>
              <p className="text-[#8D8D8D] text-sm">Sales Price</p>
              <p className="font-semibold text-lg md:text-xl">
                {<CurrencyFormatter value={single?.price} />}
              </p>
            </div>
          </section>

          <div className="border p-3 rounded-xl md:w-[440px] lg:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold">
            <p className="text-xl">Description</p>
            <p className=" font-medium text-[#ABABAB]">{single?.description}</p>
          </div>

          <section className="border p-3 rounded-xl md:w-[440px] lg:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold">
            <p className="text-xl mb-5">Features</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center items-center flex-wrap">
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <IoBedOutline /> <p> {single?.bedroom} Bedroom</p>
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <LuBath /> <p>{single?.bathroom} Bathroom</p>
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <GiHomeGarage />
                {single?.garage === "no" ? (
                  <p>0 garage</p>
                ) : (
                  <p>{single?.garage} garage</p>
                )}
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <FaRegSquare /> <p>{single?.squareFeet} Square Feet</p>
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <IoBedOutline /> <p> {single?.bedroom} Bedroom</p>
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <LuBath /> <p>{single?.bathroom} Bathroom</p>
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <GiHomeGarage />{" "}
                {single?.garage === "no" ? (
                  <p>0 garage</p>
                ) : (
                  <p>{single?.garage} garage</p>
                )}
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <FaRegSquare /> <p>{single?.squareFeet} Square Feet</p>
              </div>
            </div>
          </section>

          <div className="border p-3 rounded-xl md:w-[440px] lg:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold">
            <p className="text-xl mb-5">Property Video</p>
            <ReactPlayer
              url={single?.media?.video}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </section>

        <section>
          <div className="border border-[#343434] w-[270px] md:w-[300px] h-[358px] md:mt-5 p-5 rounded-xl text-center">
            <LazyLoadImage
              loading="lazy"
              effect="blur"
              src={single?.salesSupport?.avatar}
              alt=""
              className="w-[100px] h-[100px] mx-auto rounded-full"
            />
            <h1 className="font-semibold text-xl mt-5">
              {single?.salesSupport?.name}
            </h1>
            <p className="text-sm text-[#ABABAB]">Sales Support</p>
            <p className="bg-white w-[247px] h-[44px] mx-auto mt-10 text-[#111111] flex justify-center items-center rounded-lg">
              Message: {single?.salesSupport?.whatsappNumber}
            </p>
            <p className="bg-[#F5D9BE] w-[247px] h-[44px] mx-auto mt-4 text-[#F78214] flex justify-center items-center rounded-lg">
              Call: {single?.salesSupport?.phoneNumber}
            </p>
          </div>

          <div className="border border-[#343434] ww-[270px] md:w-[300px] h-[320px] mt-5 p-5 rounded-xl text-center">
            <h1 className="font-semibold text-xl mt-5 max-w-60 mx-auto">
              Old Property? Would you like to delete this property or mark as
              sold?
            </h1>

            <Button className="bg-[#F78214] w-[227px] h-[44px]  mx-auto mt-10 text-[#fff] flex justify-center items-center rounded-lg">
              Mark as Sold
            </Button>
            <Button
              className="border border-[#F78214] w-[227px] h-[44px] mx-auto mt-4 text-[#F78214] flex justify-center items-center rounded-lg"
              onClick={() => {
                deleteProperty(single._id);
                navigate("/admin/all-properties");
              }}
              type="button"
            >
              Delete Property
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
};
