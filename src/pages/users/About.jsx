import React from "react";
import { Link } from "react-router-dom";
import abt1 from "../../assets/Image/abt1.png";
import abt2 from "../../assets/Image/abt2.png";
import map from "../../assets/Image/map.png";
import { Pagination } from "../../components/admin/Pagination";
import { UsersNumHouses } from "../../components/users/UsersNumHouses";
import { UserCustomerTestimonials } from "../../components/users/userCustomerTestimonials";
import { BackToTop } from "../../components/users/BackToTop";

export const About = () => {
  const teams = [
    {
      id: 1,
      name: "Olakunle Olayemi",
      position: "Managing Director",
      image:
        "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Olakunle Olayemi",
      position: "C.O.O.",
      image:
        "https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Olakunle Olayemi",
      position: "Sales Manager",
      image:
        "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Olakunle Olayemi",
      position: "Marketing Manager",
      image:
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Olakunle Olayemi",
      position: "Customer Support Manager",
      image:
        "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Olakunle Olayemi",
      position: "Operations Manager",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <main className="w-full">
      <section className="about-bg pt-40 ps-5 md:ps-10">
        {/* this is the full bg image */}
        <div className=" container mx-auto">
          <h1
            className=" text-3xl text-[#fff] md:text-[56px] font-semibold md:max-w-[600px] md:leading-[60px]"
           
          >
            We Provide The Best Property For You
          </h1>

          <div>
            <p className="md:mt-5 mt-3 max-w-lg text-[#fff]">
              Lörem ipsum minat därar. Infras nuling. Preplanas. Polysion tin.
              Visper paraniling lanat. Tritrenade semingar lasovok. Visper
              paraniling lanat. Tritrenade semingar lasovok.{" "}
            </p>

            <div className="mt-7">
              <Link className="bg-[#F78214] px-8 py-3 rounded-lg">
                View Properties
              </Link>
            </div>
          </div>
        </div>

        {/* this is the full bg image above*/}
      </section>

      <section className="lg:flex justify-between container mx-auto my-20 md:px-20">
        <div className="mx-8">
          <h1 className="text-[#F78214]">About Yemsays</h1>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Company’s History
          </h2>
          <p className="mt-5 text-sm max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Scelerisque pretium lorem
            vel facilisis ac quam urna. Sit at nec fames mattis aliquam et
            tempor aenean tincidunt. Tristique id sed nulla ornare non donec
            fringilla elementum. Venenatis nulla purus lorem laoreet eu dui
            phasellus eget.
          </p>
          <p className="mt-5 text-sm max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Scelerisque pretium lorem
            vel facilisis ac quam urna. Sit at nec fames mattis aliquam et
            tempor aenean tincidunt. Tristique id sed nulla ornare non donec
            fringilla elementum. Venenatis nulla purus lorem laoreet eu dui
            phasellus eget.
          </p>
          <p className="mt-5 mb-5 text-sm max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Scelerisque pretium lorem
            vel facilisis ac quam urna. Sit at nec fames mattis aliquam et
            tempor aenean tincidunt. Tristique id sed nulla ornare non donec
            fringilla elementum. Venenatis nulla purus lorem laoreet eu dui
            phasellus eget.
          </p>
        </div>

        <div>
          <div className="relative w-[350px] mb-20  hidden md:block">
            <img
              src={abt1}
              alt=""
              className="w-[250px] md:w-[350px] h-[350px] md:h-[500px] object-cover md:rounded-[40px] relative mx-auto"
            />
            <img
              src={abt2}
              alt=""
              className="w-[200px] md:w-[250px] h-[200px] mx-auto object-cover md:rounded-[20px] absolute bottom-[-40px] left-[20px] md:left-[-80px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#070707] py-16 md:py-20 text-center w-full">
        <div className="container mx-auto">
          <h1 className="mb-10 text-3xl md:text-4xl font-semibold">
            Our Leadership Team
          </h1>

          <div className="grid md:grid-cols-3 gap-10">
            {teams.map((t) => {
              const { name, id, position, image } = t;

              return (
                <div key={id} className="text-center relative">
                  <img
                    src={image}
                    alt=""
                    className="w-[250px] h-[230px] md:w-[300px] md:h-[230px] object-cover mx-auto relative"
                  />

                  <div className="bg-[#F5D9BE] w-[250px] h-[100px] md:w-[300px] mx-auto md:h-[100px] flex flex-col justify-center ">
                    <h1 className="text-black font-semibold text-2xl">
                      {name}
                    </h1>
                    <p className="text-[#F78214]">{position}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination />
      </section>

      <section className="lg:flex justify-between container mx-auto my-20 md:px-20">
        <div className="mx-8">
          <h1 className="text-[#F78214]">About Yemsays</h1>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Company’s History
          </h2>
          <p className="mt-5 text-sm max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Scelerisque pretium lorem
            vel facilisis ac quam urna. Sit at nec fames mattis aliquam et
            tempor aenean tincidunt. Tristique id sed nulla ornare non donec
            fringilla elementum. Venenatis nulla purus lorem laoreet eu dui
            phasellus eget.
          </p>
          <p className="mt-5 text-sm max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Scelerisque pretium lorem
            vel facilisis ac quam urna. Sit at nec fames mattis aliquam et
            tempor aenean tincidunt. Tristique id sed nulla ornare non donec
            fringilla elementum. Venenatis nulla purus lorem laoreet eu dui
            phasellus eget.
          </p>
          <p className="mt-5 mb-5 text-sm max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Scelerisque pretium lorem
            vel facilisis ac quam urna. Sit at nec fames mattis aliquam et
            tempor aenean tincidunt. Tristique id sed nulla ornare non donec
            fringilla elementum. Venenatis nulla purus lorem laoreet eu dui
            phasellus eget.
          </p>
        </div>

        <div>
          <div className=" mb-20">
            <img
              src={map}
              alt=""
              className="w-[250px] md:w-[450px] h-[350px] md:h-[450px]  md:rounded-[60px] relative mx-auto"
            />
          </div>
        </div>
      </section>

      <UsersNumHouses />
      <UserCustomerTestimonials />
      <BackToTop/>
    </main>
  );
};
