import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-[20rem] w-screen overflow-hidden md:h-[25rem] ">
      <div className="">
        <Image
          alt="heroImg"
          src={"/pexels-blueprints.jpg"}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute h-full w-full bg-black opacity-60"></div>
      </div>
      <div className="absolute top-0 mt-8 h-full px-4 xl:left-1/4 xl:mt-20 xl:max-w-[80vw]">
        <p className="py-1 font-serif text-3xl text-slate-200 sm:text-5xl md:text-6xl">
          Make Your Home Your
        </p>
        <p className="py-1 text-5xl font-bold text-gray-200 md:text-7xl">
          Dream Home!
        </p>
        <button
          className="
              mt-4 border-2 border-slate-400 bg-slate-600 px-12 py-2 text-center text-2xl leading-none text-slate-300 hover:bg-slate-500 sm:mt-4 sm:px-16
              sm:py-4 md:text-2xl
            "
        >
          Get a Quote!
        </button>
      </div>
    </section>
  );
}

export default Hero;
