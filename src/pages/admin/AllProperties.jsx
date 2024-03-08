import { Link } from "react-router-dom";
import { PiHouse } from "react-icons/pi";
import { LuRefreshCcw } from "react-icons/lu";
import { AllPropertyCard } from "../../components/admin/AllPropertyCard";
import { useGlobalContext } from "../../context/context";

export const AllProperties = () => {
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { properties, handleSelect, type, filters, setFilters, getProperties } =
    useGlobalContext();

  const filterByType = properties.filter((t) => t.propertyStatus === filters);

  return (
    <main className=" text-white container mx-auto w-full overflow-x-hidden">
      <header className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Properties</h1>
        <div className="flex gap-2 items-center">
          <Link className="flex gap-2 items-center">
            <PiHouse /> Home
          </Link>{" "}
          / <p>Properties</p>
        </div>
      </header>

      <section className="mt-4">
        <div className="md:flex justify-between items-center gap-5 ">
          <section className="flex items-center gap-10 md:gap-20 bg-[#181818] md:w-[378px] h-[60px] rounded-xl justify-center">
            <div className="focus:border-b-4 cursor-pointer text-sm md:text-[20px] font-semibold">
              <button
                onClick={() => setFilters("available")}
                className=" focus:text-orange-700"
              >
                Listed
              </button>
            </div>
            <div className="focus:border-b-4 cursor-pointer text-sm md:text-[20px] font-semibold">
              <button>Unlisted</button>
            </div>
            <div className="focus:border-b-4 cursor-pointer text-sm md:text-[20px] font-semibold">
              <button
                onClick={() => setFilters("sold")}
                className=" focus:text-orange-700"
              >
                Sold
              </button>
            </div>
          </section>

          <section className="flex items-center justify-center gap-5 mt-3 md:mt-0">
            <select
              name=""
              id=""
              className="bg-[#181818] text-[#F78214]  py-3 md:px-3 px-2 text-xs  rounded-2xl outline-none md:text-sm"
              value={type}
              onChange={handleSelect}
            >
              <option value="" defaultValue={""}>
                All
              </option>
              <option value="house">House</option>
              <option value="land">Land</option>
            </select>
            <button
              className="border border-[#F78214] text-xl md:text-3xl w-[40px] h-[40px] md:w-[80px] md:h-[50px] rounded-2xl flex justify-center items-center shadow-inner active:shadow-white"
              // disabled={true}
              onClick={getProperties}
            >
              <LuRefreshCcw color="#F78214" />
            </button>
            <Link
              className="bg-[#F78214] text-xs md:w-[80px] flex justify-center items-center font-semibold rounded-2xl md:h-[50px] w-[80px] h-[40px] px-1"
              to={"/admin/add-new-properties"}
            >
              + Add New
            </Link>
          </section>
        </div>
      </section>

      <section>
        <AllPropertyCard filterByType={filterByType} />
      </section>

      <div className="text-center">
        <button className=" underline my-10" onClick={handleToTop}>
          Back To Top
        </button>
      </div>
    </main>
  );
};
