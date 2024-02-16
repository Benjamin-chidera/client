import { Link } from "react-router-dom";
import { PiHouse } from "react-icons/pi";
import { DashboardPro } from "../../components/admin/DashboardPro";
import { PropertyCard } from "../../components/admin/PropertyCard";
import { ReviewsCard } from "../../components/admin/ReviewsCard";

export const DashBoard = () => {
  return (
    <section className=" text-white container mx-auto">
      <header className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Dashboard</h1>
        <div className="flex gap-2 items-center">
          <Link className="flex gap-2 items-center">
            <PiHouse /> Home
          </Link>{" "}
          / <p>DashBoard</p>
        </div>
      </header>
      <DashboardPro />

      <main className=" gap-5 md:flex justify-between my-5">
        <section className="md:w-[723px] md:h-[700px]">
          <div className="flex justify-between gap-5 items-center text-sm">
            <h1 className="font-bold text-lg">Recently Added Properties</h1>
            <Link className="text-[#F78214]">View All Properties</Link>
          </div>

          <PropertyCard />
        </section>

        <section className="md:w-[349px] md:h-[875px] mt-10 md:mt-0">
          <div className="flex justify-between gap-5 items-center text-sm">
            <h1 className="font-bold text-lg">Reviews</h1>
            <Link className="text-[#F78214]">View All</Link>
          </div>

          <ReviewsCard />
        </section>
      </main>
    </section>
  );
};
