import React, { useEffect, useState } from "react";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { PiHouse } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import d1 from "../../assets/Image/d1.png";
import vi from "../../assets/Image/vi.png";
import d2 from "../../assets/Image/d2.png";
import net from "../../assets/Image/net.png";
import fam from "../../assets/Image/fam.png";
import sale from "../../assets/Image/sale.png";
import lineImg from "../../assets/Image/lineImg.png";
import { MdLocationOn } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import { SimilarProperties } from "../../components/users/SimilarProperties";
import { UserRating } from "../../components/users/UserRating";
import { UsersNumHouses } from "../../components/users/UsersNumHouses";
import { BackToTop } from "../../components/users/BackToTop";
import axios from "axios";
import ReactPlayer from "react-player";

export const PropertyDetail = () => {
  const { propertyId } = useParams();
  const url = `http://localhost:3000/api/v1/properties/${propertyId}`;
  const [single, setSingle] = useState();
  const [similar, setSimilar] = useState();

  const getSingleProperty = async () => {
    try {
      const { data } = await axios(url);
      setSingle(data.property);
      setSimilar(data.similarProperties);
    } catch (error) {
      console.log(error.message);
    }
  };

  

  useEffect(() => {
    getSingleProperty();
  }, [propertyId]);

  return (
    <main className="mt-24 p-5 container mx-auto w-full">
      <section className="flex gap-3 justify-center">
        <div className="">
          <img
            src={single?.media?.images[0]}
            alt=""
            className=" object-cover w-[176px] h-[224px] md:w-[560px] md:h-[373px] pic-one"
          />
        </div>

        <div className=" object-cover flex flex-col gap-3">
          <img
            src={single?.media?.images[1]}
            alt=""
            className=" object-cover w-[176px] h-[66px] md:w-[360px] md:h-[116px] pic-two"
          />
          <img
            src={single?.media?.images[2]}
            alt=""
            className=" object-cover w-[176px] h-[66px] md:w-[360px] md:h-[116px] pic-two"
          />
          <img
            src={single?.media?.images[3]}
            alt=""
            className=" object-cover w-[176px] h-[66px] md:w-[360px] md:h-[116px] pic-two"
          />
        </div>
      </section>

      <section className="flex gap-7 md:gap-12 flex-wrap justify-center">
        {/* after images */}

        <section>
          <div className="flex items-center gap-3 my-5">
            {/* <img src={net} alt="" />
            <img src={fam} alt="" /> */}
            <p>{single?.tags}</p>
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
                ${single?.price}
              </p>
            </div>
          </section>

          <div className="border p-3 rounded-xl md:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold">
            <p className="text-xl">Description</p>
            <p className=" font-medium text-[#ABABAB]">{single?.description}</p>
          </div>

          <section className="border p-3 rounded-xl md:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold">
            <p className="text-xl mb-5">Features</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center items-center flex-wrap">
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <IoBedOutline /> <p>{single?.bedroom} Bedroom</p>
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <LuBath /> <p> {single?.bathroom} Bathroom</p>
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <GiHomeGarage /> <p>Garage</p>
              </div>
              <div className="flex gap-3 items-center text-xs text-[#ABABAB]">
                <FaRegSquare /> <p>{single?.squareFeet} Square Feet</p>
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <IoBedOutline />{" "}
                {single?.garage === "no" ? (
                  <p>0 Garage</p>
                ) : (
                  <p>{single?.garage} Garage</p>
                )}
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <LuBath /> <p> {single?.bathroom} Bathroom</p>
              </div>
              <div className="flex gap-3 items-center text-sm text-[#ABABAB]">
                <GiHomeGarage />{" "}
                {single?.garage === "no" ? (
                  <p>0 Garage</p>
                ) : (
                  <p>{single?.garage} Garage</p>
                )}
              </div>
              <div className="flex gap-3 items-center text-xs text-[#ABABAB]">
                <FaRegSquare /> <p>{single?.squareFeet} Square Feet</p>
              </div>
            </div>
          </section>

          <div className="border p-3 rounded-xl md:w-[540px] mt-4 border-[#343434] text-sm flex flex-col font-semibold">
            <p className="text-xl mb-5">Property Video</p>
            <ReactPlayer
              url={single?.media?.video}
              width="100%"
              height="100%"
              controls
            />
          </div>

          <section className="border py-3 px-5 mt-5 border-[#343434] rounded-lg">
            {/* this is for the user rating */}
            <div>
              <h1 className="font-semibold text-[18px]">Visitor Ratings</h1>
            </div>

            <section className="flex justify-between items-center mt-5 bg-black md:h-[150px] flex-wrap px-3 py-3">
              {/* this is for visitor ratings */}
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl ">4.5</h1>
                <p className="text-[#ABABAB] text-xs mb-2">Out of 5.0</p>
                <div>
                  <UserRating rate={4} />
                </div>
              </div>

              <div className="w-0.5 bg-[#ABABAB] md:h-[100px]"></div>

              <section>
                <div>
                  <h1 className="font-semibold text-sm">Property</h1>
                  <div className="flex gap-3 items-center">
                    <img
                      src={lineImg}
                      alt=""
                      className="w-[200px] md:w-[100px]"
                    />
                    <p>4</p>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold text-sm">Location</h1>
                  <div className="flex gap-3 items-center">
                    <img
                      src={lineImg}
                      alt=""
                      className="w-[200px] md:w-[100px]"
                    />
                    <p>5</p>
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <h1 className="font-semibold text-sm">Value for Money</h1>
                  <div className="flex gap-3 items-center">
                    <img
                      src={lineImg}
                      alt=""
                      className="w-[200px] md:w-[100px]"
                    />
                    <p>4</p>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold text-sm">Support</h1>
                  <div className="flex gap-3 items-center">
                    <img
                      src={lineImg}
                      alt=""
                      className="w-[200px] md:w-[100px]"
                    />
                    <p>4</p>
                  </div>
                </div>
              </section>
            </section>
          </section>

          <section className="border border-[#343434] w-[270px] md:w-[540px]  md:mt-5 p-5 rounded-xl  mt-5">
            {/* this is for reviews */}
            <h1 className="font-semibold text-lg">Reviews</h1>
            <p className="text-[#8D8D8D] text-sm">1 Review</p>

            <p className="font-semibold">
              Aisha Akinwumi{" "}
              <span className="font-medium text-[#F78214]">
                (oyelolaifeoluwa@gmail.com)
              </span>
            </p>
            <p className="text-[#8D8D8D] text-sm">22-03-2023 09:30:20am</p>

            <p className="text-[#8D8D8D] text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur. Id libero suspendisse eu
              risus amet vel. Aliquet contur consectetur purus amet ultricies
              facilisis a pelloique. Telus et cras urna vel vitae. Ornare
              aliquam dolor enim consequat sapien odio cras integer.{" "}
            </p>
          </section>

          <form>
            <section className="border border-[#343434] w-[270px] md:w-[540px]  md:mt-5 p-5 rounded-xl  mt-5">
              {/* this is for write a review */}

              <h1 className="font-semibold text-lg">Write A Review</h1>

              <div className="flex items-center flex-wrap md:flex-nowrap">
                <section className="flex justify-between items-center flex-wrap mt-5">
                  <div className="flex gap-10 items-center flex-wrap">
                    <div>
                      {/* property */}
                      <h1 className="text-[#8D8D8D] text-sm">Property</h1>
                      <UserRating />
                    </div>

                    <div>
                      {/* Value for money */}
                      <h1 className="text-[#8D8D8D] text-sm">
                        Value for money
                      </h1>
                      <UserRating />
                    </div>

                    <div>
                      {/* Location*/}
                      <h1 className="text-[#8D8D8D] text-sm">Location</h1>
                      <UserRating />
                    </div>

                    <div>
                      {/* Support*/}
                      <h1 className="text-[#8D8D8D] text-sm">Support</h1>
                      <UserRating />
                    </div>
                  </div>
                </section>
                <section className="bg-black py-3 px-3">
                  <div className="text-center">
                    <h1 className="text-2xl md:text-3xl ">0.0</h1>
                    <p className="text-[#ABABAB] text-xs mb-2">Out of 5.0</p>
                    <div>
                      <UserRating rate={4} />
                    </div>
                  </div>
                </section>
              </div>

              <section className="mt-5">
                <div className="flex justify-center items-center flex-wrap gap-5">
                  <input
                    type="text"
                    className="bg-transparent border border-[#343434] w-[230px] h-[40px] px-3 outline-none placeholder:text-sm rounded"
                    placeholder="Your Name "
                  />
                  <input
                    type="email"
                    className="bg-transparent border border-[#343434] w-[230px] h-[40px] px-3 outline-none rounded placeholder:text-sm"
                    placeholder="Email"
                  />
                </div>

                <div className="mt-5 md:mx-3">
                  <textarea
                    name=""
                    id=""
                    cols="50"
                    className="w-[227px] md:w-[475px] md:h-[200px] resize-none bg-transparent border border-[#343434] outline-none rounded placeholder:text-sm p-3"
                    rows="10"
                    placeholder="Compose your review"
                  ></textarea>
                </div>
                <Button
                  size=""
                  className="md:ms-2 mt-3 bg-[#F78214]"
                  type="submit"
                >
                  Submit Review
                </Button>
              </section>
            </section>
          </form>
        </section>

        <section>
          <div className="border border-[#343434] w-[270px] md:w-[300px] h-[358px] md:mt-5 p-5 rounded-xl text-center">
            {/* sale support */}

            <img
              src={single?.salesSupport?.avatar}
              alt=""
              className="w-[100px] h-[100px] rounded-full mx-auto"
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

          <div className="mt-10">
            <h1 className="text-2xl font-semibold">Similar Properties</h1>

            <SimilarProperties similar={similar} />
          </div>
        </section>
      </section>

      <div className="mt-5">
        <UsersNumHouses />
      </div>

      <BackToTop />
    </main>
  );
};
