import React from "react";
import Image from "next/image";

function Hero() {
    return (
        <section className="relative h-[70vh] w-[100vw] overflow-hidden">
            <Image
                alt="heroImg"
                src={"/pexels-blueprints.jpg"}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="blur-sm"
            />
            <div className="absolute h-full w-full bg-black opacity-5"></div>
            <div className="absolute top-0 mt-8 h-full px-4 py-32 font-anek md:left-20 xl:left-[12vw] 2xl:left-[18vw]">
                <p className="py-1 text-4xl sm:text-5xl text-slate-600 md:text-7xl">
                    Welcome to
                </p>
                <p className="py-1 text-4xl sm:text-5xl font-bold text-slate-600 md:text-7xl">
                    MG Drywall U.S.A
                </p>
                <button className="mt-4 px-16 py-4 text-2xl border-2 border-slate-400 bg-slate-600 text-center text-slate-300 leading-none hover:bg-slate-500 md:text-2xl">
                    Contact Us!
                </button>
            </div>
        </section>
    );
}

export default Hero;
