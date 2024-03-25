import React from 'react'

export const UsersNumHouses = () => {
  return (
    <div className="mb-5 relative home-user flex justify-center">
      <section className="text-sm grid grid-cols-2 md:flex justify-center items-center gap-5 md:gap-20  flex-wrap text-center">
        <div>
          <p className="text-lg md:text-3xl font-semibold text-[#F78214]">
            2349
          </p>
          <p className="font-semibold text-sm md:text-md text-[#070707]">
            Homes for sale
          </p>
        </div>

        <div>
          <p className="text-lg md:text-3xl font-semibold text-[#F78214]">33</p>
          <p className="font-semibold text-sm md:text-md text-[#070707]">
            Open Houses
          </p>
        </div>

        <div>
          <p className="text-lg md:text-3xl font-semibold text-[#F78214]">
            400
          </p>
          <p className="font-semibold text-[#070707] text-sm md:text-md">
            Recently sold
          </p>
        </div>
        <div>
          <p className="text-lg md:text-3xl font-semibold text-[#F78214]">
            9.5/10
          </p>
          <p className="font-semibold text-[#070707] text-sm md:text-md">
            User Satisfaction
          </p>
        </div>
      </section>
    </div>
  );
}
