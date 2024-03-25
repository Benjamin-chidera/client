import { Link } from "react-router-dom";
import tax from "../../assets/Image/tax.png";
import insurance from "../../assets/Image/insurance.png";
import lowest from "../../assets/Image/lowest.png";
import us1 from "../../assets/Image/us1.png";
import us2 from "../../assets/Image/us2.png";
import { UserSearch } from "../../components/users/UserSearch";
import { UsersNumHouses } from "../../components/users/UsersNumHouses";
import { LatestProperties } from "../../components/users/LatestProperties";
import { UserCustomerTestimonials } from "../../components/users/userCustomerTestimonials";
import { BackToTop } from "../../components/users/BackToTop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Home = () => {
  return (
    <main className="my-20">
      <section className="home-bg pt-20 md:ps-10">
        {/* this is the full bg image */}
        <div className=" container mx-auto">
          <h1 className=" text-4xl text-[#070707] md:text-[56px] font-semibold">
            Find Your Future
          </h1>

          <div className="flex gap-4 items-center relative md:mt-7">
            <h2 className="text-4xl md:text-[70px] text-[#070707] font-semibold">
              Dream
            </h2>
            <h3 className="text-4xl md:text-[70px] text-[#F78214] font-semibold">
              Home.
            </h3>
          </div>

          <div>
            <p className="md:mt-5 mt-3 max-w-lg text-[#070707]">
              Lörem ipsum minat därar. Infras nuling. Preplanas. Polysion tin.
              Visper paraniling lanat. Tritrenade semingar lasovok. Visper
              paraniling lanat. Tritrenade semingar lasovok.{" "}
            </p>

            <div className="mt-7">
              <Link
                className="bg-[#F78214] px-8 py-3 rounded-lg"
                to={"/properties"}
              >
                View Properties
              </Link>
            </div>
          </div>

          <UserSearch />
        </div>

        {/* this is the full bg image above*/}
      </section>

      <section className="mt-14  text-center">
        <h1 className="text-2xl font-semibold text-[#FCEEE2]">Why Choose Us</h1>
        <div className="flex justify-center items-center mt-5 flex-wrap gap-10">
          <div>
            <LazyLoadImage
              loading="lazy"
              effect="blur"
              src={tax}
              alt="Tax"
              className=" mx-auto"
            />
            <h1 className="font-semibold text-[18px]">Tax Advantage</h1>
            <p className=" max-w-[250px] text-sm">
              Lörem ipsum riteck prekin att ysade. Makrosm rud visorade.{" "}
            </p>
          </div>

          <div>
            <LazyLoadImage
              loading="lazy"
              effect="blur"
              src={insurance}
              alt="Tax"
              className=" mx-auto"
            />
            <h1 className="font-semibold text-[18px]">Property Insurance</h1>
            <p className=" max-w-[250px] text-sm">
              Lörem ipsum riteck prekin att ysade. Makrosm rud visorade.{" "}
            </p>
          </div>

          <div>
            <LazyLoadImage
              loading="lazy"
              effect="blur"
              src={lowest}
              alt="Tax"
              className=" mx-auto"
            />
            <h1 className="font-semibold text-[18px]">Lowest Commission</h1>
            <p className=" max-w-[250px] text-sm">
              Lörem ipsum riteck prekin att ysade. Makrosm rud visorade.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="md:flex justify-center gap-20 mt-24 mb-14">
        <div className="relative w-[350px] mb-20 hidden md:block">
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={us1}
            alt=""
            className="w-[200px] md:w-[350px] h-[350px] md:h-[500px] object-cover md:rounded-[40px] relative mx-auto"
          />
          <img
            src={us2}
            alt=""
            className="w-[200px] md:w-[250px] h-[200px] mx-auto object-cover md:rounded-[20px] absolute bottom-[-40px] left-[100px] md:right-[-80px]"
          />
        </div>

        <div className="text-center md:text-start">
          <p className="text-[#F78214] font-semibold text-lg">About Us</p>
          <p className="text-[#FCEEE2] text-[20px] md:text-[40px] max-w-[600px] md:max-w-[500px] mx-auto mt-5">
            We Provide The Best <span className="text-[#F78214]">Property</span>{" "}
            For You
          </p>
          <p className="text-sm md:text-[16px] max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 text-[#8D8D8D]">
            Lörem ipsum mikrograf plusjobb i depäska. Rosk häsamma, käde dihäs.
            Bemör kvasilig oaktat el att vatesamma. Presk kaktig.
          </p>
          <p className="text-sm md:text-[16px] max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 mt-5 text-[#8D8D8D]">
            Lörem ipsum mikrograf plusjobb i depäska. Rosk häsamma, käde dihäs.
            Bemör kvasilig oaktat el att vatesamma. Presk kaktig.
          </p>
        </div>
      </section>

      <UsersNumHouses />

      <section className="text-center  ">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Latest Properties
        </h1>
        <p className="text-[#8D8D8D] text-sm">
          Lörem ipsum mikrograf plusjobb i depäskama käde dihäs. Bemör kvasilig{" "}
        </p>
        <LatestProperties />
      </section>

      <UserCustomerTestimonials />
      <BackToTop />
    </main>
  );
};
