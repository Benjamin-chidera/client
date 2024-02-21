import React from "react";
import loca from "../../assets/Image/loc.png";
import num from "../../assets/Image/num.png";
import mp from "../../assets/Image/mp.png";
import { Button } from "@material-tailwind/react";

export const Contact = () => {
  return (
    <main className="mt-24 p-5 md:flex justify-center gap-14">
      <section>
        <h1 className="text-[#F78214] font-semibold mb-2">Contact Us</h1>
        <h2 className="font-semibold text-xl mb-5">Get In Touch With Us</h2>
        <p className="text-sm max-w-md">
          Lörem ipsum egomabel tångar prese respektive makrovis teligt. Rårad
          parahet megal nypok diduskapet. Prerusat prede, så spede. Radiobel
          nyling planar, besm, i plavihet. Metastik povis och kamikazetips.
          Burkini fask, lånegarderob. Kaledes biofiering autokihet ultran, att
          vattkoppsgodis gigan. Löligt mätyktiga #metoo. Gigaras king sporta
          mäfänat devis.{" "}
        </p>

        <div className="flex flex-col">
          <div className="my-1 flex items-center gap-3">
            <img src={loca} alt="" className="w-[60px] h-[60px]" />
            <div>
              <h1 className="font-semibold">Our Location</h1>
              <p className="text-sm">3, Ogunlesi street, Onipanu</p>
            </div>
          </div>

          <div className="my-1 flex items-center gap-3">
            <img src={num} alt="" className="w-[50px] h-[50px]" />
            <div>
              <h1 className="font-semibold">Phone Number</h1>
              <p className="text-sm">(+234) 08101163182</p>
            </div>
          </div>

          <div className="my-1 flex items-center gap-3">
            <img src={mp} alt="" className="w-[50px] h-[50px]" />
            <div>
              <h1 className="font-semibold">Email Address</h1>
              <p className="text-sm">oladimeji.ayodeji@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white  py-5 px-3 rounded-md mt-5 md:mt-0">
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            className="w-[350px] max-w-full h-[40px] border border-[#C4C4C4] px-3 outline-none text-[#0008]"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-[350px] max-w-full h-[40px] border border-[#C4C4C4] px-3 outline-none text-[#0008]"
            placeholder=" Email "
          />
          <input
            type="tel"
            className="w-[350px] max-w-full h-[40px] border border-[#C4C4C4] px-3 outline-none text-[#0008]"
            placeholder=" Phone Number "
          />
          <textarea
            type="tel"
            className="w-[350px] max-w-full h-[200px] border border-[#C4C4C4] px-3 outline-none text-[#0008] pt-1"
            placeholder=" Message "
          />
          <Button type="submit" className="bg-[#F78214]">
            Submit Form
          </Button>
        </form>
      </section>
    </main>
  );
};
