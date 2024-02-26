import { Button } from '@material-tailwind/react';
import React from 'react'
import { PostRating } from './PostRating';

export const PostReveiws = () => {
  return (
    <main>
      <form>
        <section>
          <div className="flex items-center flex-wrap md:flex-nowrap">
            <section className="flex justify-between items-center flex-wrap mt-5">
              <div className="flex gap-10 items-center flex-wrap">
                <div>
                  {/* property */}
                  <h1 className="text-[#8D8D8D] text-sm">Property</h1>
                  <PostRating />
                </div>

                <div>
                  {/* Value for money */}
                  <h1 className="text-[#8D8D8D] text-sm">Value for money</h1>
                  <PostRating />
                </div>

                <div>
                  {/* Location*/}
                  <h1 className="text-[#8D8D8D] text-sm">Location</h1>
                  <PostRating />
                </div>

                <div>
                  {/* Support*/}
                  <h1 className="text-[#8D8D8D] text-sm">Support</h1>
                  <PostRating />
                </div>
              </div>
            </section>
            <section className="bg-black py-3 px-3">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl ">0.0</h1>
                <p className="text-[#ABABAB] text-xs mb-2">Out of 5.0</p>
                <div>
                  <PostRating rate={4} />
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="mt-5">
          {/* this is for the form */}
          <div className="flex justify-center items-center flex-wrap gap-5">
            <input
              type="text"
              className="bg-transparent border border-[#343434] w-[230px] h-[40px] px-3 outline-none placeholder:text-sm rounded"
              placeholder="Your Name "
            />
            <input
              type="email"
              className="bg-transparent border border-[#343434] w-[230px] h-[40px] px-3 outline-none rounded placeholder:text-sm"
              placeholder="Email"
            />
          </div>

          <div className="mt-5 md:mx-3">
            <textarea
              name=""
              id=""
              cols="50"
              className="w-[227px] md:w-[475px] md:h-[200px] resize-none bg-transparent border border-[#343434] outline-none rounded placeholder:text-sm p-3"
              rows="10"
              placeholder="Compose your review"
            ></textarea>
          </div>
          <Button size="" className="md:ms-2 mt-3 bg-[#F78214]" type="submit">
            Submit Review
          </Button>
        </section>
      </form>
    </main>
  );
}
