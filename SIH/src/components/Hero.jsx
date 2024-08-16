import React from "react";
import { front_page, front } from "../assets/index.js";
import { AspectRatio } from "react-aspect-ratio";

function Hero() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center items-center w-full md:px-[10px] lg:px-[60px]">
          <div className="pt-10 ">
            <div className="relative">
              <img src={front_page} width={960} className="rounded-3xl" />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[38px] font-bold">
              Experience India, One Ticket Away
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-20 -translate-y-1/2 text-white text-[18px] font-semibold text-center ">
              Book your tickets for more than 500+ Museums, Monuments &
              Archaeological Sites in India.
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-40 -translate-y-1/2 ">
                <button className="bg-white text-black px-5 py-3 rounded-full font-semibold">
                    Buy your tickets
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
