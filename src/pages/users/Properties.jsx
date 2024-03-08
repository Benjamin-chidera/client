import { UserSearch } from "../../components/users/UserSearch";
import { AllProperties } from "../../components/users/AllProperties";
import { BackToTop } from "../../components/users/BackToTop";

export const Properties = () => {
  return (
    <main className="mt-24 p-5 text-center container mx-auto w-full">
      <h1 className="font-semibold text-3xl">Properties</h1>
      <p className="mt-5 max-w-[400px] text-sm mx-auto text-[#8D8D8D]">
        Lörem ipsum Koning buvis ode, när dejelog nidoen dende plus ska, vka Din
        hybrde häfid. Prde sm, vis ode, när dejelog sm, lovien.
      </p>

      <UserSearch />

      <section>
        {/* <h2 className="font-semibold text-xl md:text-3xl mt-14">
          Property Listings -{" "}
          {properties.propertyType === "house" ? "House" : "Land"}
        </h2> */}

        <div>
          <AllProperties />
        </div>
      </section>

      <BackToTop />
    </main>
  );
};
