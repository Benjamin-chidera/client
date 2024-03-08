import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Testimonial } from "../../data/CustomersTestimonials";
import tes from "../../assets/Image/tes.png";
import { useGlobalContext } from "../../context/context";

export const UserCustomerTestimonials = () => {
  const { AllReview } = useGlobalContext();

  console.log(AllReview);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className=" mx-auto space-y-4 text-center container mt-20">
      <div>
        <h1 className="text-[#F78214] font-semibold">Testimonials</h1>
        <h2 className="font-semibold text-lg md:text-3xl">
          That’s what our client says
        </h2>
      </div>
      <Slider
        {...settings}
        className="bg-[#1F1F1F] rounded-3xl w-[400px] h-[200px] md:w-[500px] mx-auto max-w-full px-5"
      >
        {AllReview.map((t) => {
          const { name, message, _id } = t;

          return (
            <div
              key={_id}
              className=" w-[100px] h-[250px] p-5 pb-3  relative mx-auto"
            >
              <div className="text-start mt-14">
                <p className="text-sm max-w-sm text-start mx-auto text-[#8D8D8D]">
                  {message}
                </p>

                <div className="mt-5 flex gap-2 items-center">
                  {/* <img
                    src={image}
                    alt=""
                    className="w-[44px] h-[44px] object-cover"
                  /> */}
                  <div className="text-start">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-[#8D8D8D]">Happy Customer</p>
                  </div>
                </div>
              </div>
              <img src={tes} alt="" className=" absolute top-3" />
            </div>
          );
        })}
      </Slider>
    </main>
  );
};
