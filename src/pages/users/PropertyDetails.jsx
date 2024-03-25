import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { SimilarProperties } from "../../components/users/SimilarProperties";
import { UsersNumHouses } from "../../components/users/UsersNumHouses";
import { BackToTop } from "../../components/users/BackToTop";
import axios from "axios";
import ReactPlayer from "react-player";
import Cookies from "js-cookie";
import { CurrencyFormatter } from "../../components/CurrencyFormatter";
import { useGlobalContext } from "../../context/context";
import { PostReveiws } from "../../components/users/PostReveiws";
import { CustomersReviews } from "../../components/users/CustomersReviews";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const PropertyDetail = () => {
  const { propertyId } = useParams();
  const url = `https://yemsyays-realestate-server.onrender.com/api/v1/properties/${propertyId}`;
  const [single, setSingle] = useState();
  const [similar, setSimilar] = useState();
  const token = Cookies.get("token");
  const { review } = useGlobalContext();

  const getSingleProperty = async () => {
    try {
      const { data } = await axios(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSingle(data.property);
      setSimilar(data.similarProperties);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSingleProperty();
  }, [propertyId]);

  console.log(single);

  return (
    <main className="mt-24 p-5 container mx-auto w-full">
      <section className="flex gap-3 justify-center">
        <div className="">
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={single?.media?.images[0]}
            alt=""
            className=" object-cover w-[176px] h-[224px] md:w-[560px] md:h-[373px] pic-one"
          />
        </div>

        <div className=" object-cover flex flex-col gap-3">
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={single?.media?.images[1]}
            alt=""
            className=" object-cover w-[176px] h-[66px] md:w-[360px] md:h-[116px] pic-two"
          />
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={single?.media?.images[2]}
            alt=""
            className=" object-cover w-[176px] h-[66px] md:w-[360px] md:h-[116px] pic-two"
          />
          <LazyLoadImage
            loading="lazy"
            effect="blur"
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
            {/* <LazyLoadImage loading="lazy" effect="blur" src={net} alt="" />
            <LazyLoadImage loading="lazy" effect="blur" src={fam} alt="" /> */}
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
                {<CurrencyFormatter value={single?.price} />}
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

          <CustomersReviews review={review} />

          <section className="border border-[#343434] w-[270px] md:w-[540px]  md:mt-5 p-5 rounded-xl  mt-5">
            {/* this is for write a review */}

            <h1 className="font-semibold text-lg">Write A Review</h1>

            <PostReveiws />
          </section>
        </section>

        <section>
          <div className="border border-[#343434] w-[270px] md:w-[300px] h-[358px] md:mt-5 p-5 rounded-xl text-center">
            {/* sale support */}

            <LazyLoadImage
              loading="lazy"
              effect="blur"
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
