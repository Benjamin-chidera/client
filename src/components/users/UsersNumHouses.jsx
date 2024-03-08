import React from 'react'

export const UsersNumHouses = () => {
  return (
    <div className="mb-5 relative home-user flex justify-center">
      <section className="grid grid-cols-2 md:flex justify-center gap-10 md:gap-40 absolute md:top-[35%] flex-wrap text-center">
        <div>
          <p className="text-lg md:text-4xl font-semibold text-[#F78214]">
            2349
          </p>
          <p className="font-semibold text-sm md:text-lg text-[#070707]">
            Homes for sale
          </p>
        </div>

        <div>
          <p className="text-lg md:text-4xl font-semibold text-[#F78214]">33</p>
          <p className="font-semibold text-sm md:text-lg text-[#070707]">
            Open Houses
          </p>
        </div>

        <div>
          <p className="text-lg md:text-4xl font-semibold text-[#F78214]">
            33
          </p>
          <p className="font-semibold text-[#070707]">Open Houses</p>
        </div>
        <div>
          <p className="text-lg md:text-4xl font-semibold text-[#F78214]">
            33
          </p>
          <p className="font-semibold text-[#070707]">Open Houses</p>
        </div>
      </section>
    </div>
  );
}
